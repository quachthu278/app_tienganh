import { useState, useRef, useCallback } from "react";

interface UseTranslationOptions {
  targetLang: string;
  baseUrl: string;
}

interface UseTranslationResult {
  getTranslation: (text: string) => string | undefined;
  isTranslatingKey: (text: string) => boolean;
  translate: (text: string) => Promise<void>;
}

/**
 * Hook for translating text via the /api/translate endpoint.
 *
 * Fixes the race condition from the original inline implementation:
 * - Uses a ref to track in-flight requests (not stale-closure prone)
 * - Per-key loading state instead of a single shared boolean
 * - Prevents duplicate concurrent requests for the same key
 */
export function useTranslation({
  targetLang,
  baseUrl,
}: UseTranslationOptions): UseTranslationResult {
  const [cache, setCache] = useState<Record<string, string>>({});
  const [loadingKeys, setLoadingKeys] = useState<Set<string>>(new Set());

  // Ref is never stale — safe for concurrent calls
  const inFlight = useRef<Set<string>>(new Set());
  // Sync cache ref to avoid stale closure in translate
  const cacheRef = useRef<Record<string, string>>({});

  const translate = useCallback(
    async (text: string) => {
      if (!text || text.trim().length === 0) return;
      const key = `${targetLang}:${text}`;

      // Guard: already cached or request in-flight
      if (cacheRef.current[key] || inFlight.current.has(key)) return;

      inFlight.current.add(key);
      setLoadingKeys((prev) => new Set(prev).add(key));

      try {
        const res = await fetch(`${baseUrl}/api/translate`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text, targetLang }),
          signal: AbortSignal.timeout(5000),
        });

        if (res.ok) {
          const data = (await res.json()) as { translatedText?: string };
          if (data.translatedText) {
            cacheRef.current[key] = data.translatedText;
            setCache((prev) => ({ ...prev, [key]: data.translatedText! }));
          }
        }
      } catch {
        // Network error or timeout — fail silently, UI falls back to static text
      } finally {
        inFlight.current.delete(key);
        setLoadingKeys((prev) => {
          const next = new Set(prev);
          next.delete(key);
          return next;
        });
      }
    },
    [targetLang, baseUrl]
  );

  const getTranslation = useCallback(
    (text: string): string | undefined => cache[`${targetLang}:${text}`],
    [cache, targetLang]
  );

  const isTranslatingKey = useCallback(
    (text: string): boolean => loadingKeys.has(`${targetLang}:${text}`),
    [loadingKeys, targetLang]
  );

  return { getTranslation, isTranslatingKey, translate };
}
