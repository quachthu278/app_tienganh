import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  ScrollView,
} from "react-native";
import { useCall, useCallStateHooks } from "@stream-io/video-react-native-sdk";

// Inline type matching @stream-io/video-client CallClosedCaption interface
type CallClosedCaption = {
  id?: string;
  text: string;
  speaker_id?: string;
  start_time?: string;
  end_time?: string;
  language?: string;
  user?: { id?: string; name?: string };
};

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

type CaptionRole = "teacher" | "student";

interface CaptionLine {
  id: string;
  role: CaptionRole;
  speakerName: string;
  text: string;
  timestamp: number;
}

interface LiveCaptionBarProps {
  /** The local user's Stream user ID — used to distinguish student vs AI teacher */
  localUserId: string;
  /** Whether captions panel is visible (controlled by Subtitles toggle) */
  visible: boolean;
  /** Max captions to keep visible at once */
  maxVisible?: number;
}

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

function getRoleFromCaption(caption: CallClosedCaption, localUserId?: string): CaptionRole {
  const sid = (caption.speaker_id ?? caption.user?.id ?? "").toLowerCase();
  if (sid === "ai-teacher" || sid.includes("teacher")) {
    return "teacher";
  }
  return "student";
}

function getSpeakerName(caption: CallClosedCaption, role: CaptionRole): string {
  if (role === "teacher") return "AI Teacher";
  return caption.user?.name || "Bạn (You)";
}

// ─────────────────────────────────────────────────────────────────────────────
// LiveCaptionBar
// ─────────────────────────────────────────────────────────────────────────────

/**
 * LiveCaptionBar — displays realtime closed captions from Stream SDK.
 *
 * Architecture:
 * - Subscribes to `call.state.closedCaptions$` RxJS Observable
 * - Updates utterances in-place as user or AI teacher speaks
 * - Distinguishes AI Teacher (purple 🤖) vs Student (green 🎙️)
 * - Auto-scrolls to the latest caption
 * - Provides live speaking status feedback
 */
export function LiveCaptionBar({
  localUserId,
  visible,
  maxVisible = 6,
}: LiveCaptionBarProps) {
  const call = useCall();
  const { useParticipants } = useCallStateHooks();
  const participants = useParticipants();

  const localParticipant = participants.find((p) => p.isLocalParticipant);
  const isStudentSpeaking = !!localParticipant?.isSpeaking;
  const aiTeacher = participants.find(
    (p) => p.userId === "ai-teacher" || p.name?.toLowerCase().includes("teacher")
  );
  const isTeacherSpeaking = !!aiTeacher?.isSpeaking;

  const [lines, setLines] = useState<CaptionLine[]>([]);
  const scrollRef = useRef<ScrollView>(null);
  const fadeAnim = useRef(new Animated.Value(visible ? 1 : 0)).current;

  // Animate visibility
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: visible ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [visible, fadeAnim]);

  // Subscribe to Stream SDK closedCaptions$ Observable
  useEffect(() => {
    if (!call) return;

    const subscription = call.state.closedCaptions$.subscribe(
      (captions: CallClosedCaption[]) => {
        if (!captions || captions.length === 0) return;

        setLines((prev) => {
          let updated = [...prev];

          for (const cap of captions) {
            const rawText = cap.text?.trim();
            if (!rawText) continue;

            const role = getRoleFromCaption(cap, localUserId);
            const speakerName = getSpeakerName(cap, role);
            const capId = cap.id || `${cap.speaker_id || role}-${cap.start_time || ""}`;
            const timestamp = cap.start_time
              ? new Date(cap.start_time).getTime()
              : Date.now();

            // Match if exact same ID, or fallback to same role within 3.5s window only if cap.id is not provided
            const existingIndex = updated.findIndex(
              (item) =>
                item.id === capId ||
                (!cap.id && item.role === role && Math.abs(item.timestamp - timestamp) < 3500)
            );

            if (existingIndex >= 0) {
              // Update in-place with latest streaming transcript
              updated[existingIndex] = {
                ...updated[existingIndex],
                text: rawText,
              };
            } else {
              // Append new utterance
              updated.push({
                id: capId || `cap-${Date.now()}-${Math.random()}`,
                role,
                speakerName,
                text: rawText,
                timestamp,
              });
            }
          }

          // Sort chronologically and preserve latest maxVisible
          updated.sort((a, b) => a.timestamp - b.timestamp);
          return updated.slice(-maxVisible);
        });
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, [call, localUserId, maxVisible]);

  // Auto-scroll to latest caption
  useEffect(() => {
    if (lines.length > 0 || isStudentSpeaking) {
      requestAnimationFrame(() => {
        scrollRef.current?.scrollToEnd({ animated: true });
      });
    }
  }, [lines, isStudentSpeaking]);

  // Don't unmount completely — hide via opacity/display so subscription stays alive
  if (!visible && lines.length === 0) return null;

  return (
    <Animated.View
      style={[
        styles.container,
        { opacity: fadeAnim, display: visible ? "flex" : "none" },
      ]}
    >
      {lines.length === 0 && !isStudentSpeaking ? (
        <EmptyCaptionState
          isStudentSpeaking={isStudentSpeaking}
          isTeacherSpeaking={isTeacherSpeaking}
        />
      ) : (
        <ScrollView
          ref={scrollRef}
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled
        >
          {lines.map((line) => (
            <CaptionLineItem key={line.id} line={line} />
          ))}

          {/* Real-time speaking status indicator when student speaks */}
          {isStudentSpeaking && (
            <View style={styles.speakingIndicatorRow}>
              <View style={styles.studentBadgeSmall}>
                <Text style={{ fontSize: 11 }}>🎙️</Text>
              </View>
              <Text style={styles.speakingIndicatorText}>
                Bạn đang nói...
              </Text>
            </View>
          )}
        </ScrollView>
      )}
    </Animated.View>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────────────────────

function EmptyCaptionState({
  isStudentSpeaking,
  isTeacherSpeaking,
}: {
  isStudentSpeaking: boolean;
  isTeacherSpeaking: boolean;
}) {
  const [pulse] = useState(() => new Animated.Value(0.4));

  useEffect(() => {
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(pulse, { toValue: 1, duration: 800, useNativeDriver: true }),
        Animated.timing(pulse, { toValue: 0.4, duration: 800, useNativeDriver: true }),
      ])
    );
    loop.start();
    return () => loop.stop();
  }, [pulse]);

  return (
    <View style={styles.emptyRow}>
      <Animated.View
        style={[
          styles.listeningDot,
          {
            opacity: pulse,
            backgroundColor: isStudentSpeaking ? "#10B981" : "#6C4EF5",
          },
        ]}
      />
      <Text style={styles.emptyText}>
        {isStudentSpeaking
          ? "🎙️ Bạn đang nói... (Đang nhận diện giọng nói)"
          : isTeacherSpeaking
          ? "🤖 AI Teacher đang nói..."
          : "🎧 Đang lắng nghe cuộc trò chuyện..."}
      </Text>
    </View>
  );
}

function CaptionLineItem({ line }: { line: CaptionLine }) {
  const [fadeAnim] = useState(() => new Animated.Value(0));
  const isTeacher = line.role === "teacher";

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 180,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View style={[styles.captionRow, { opacity: fadeAnim }]}>
      {/* Speaker emoji badge */}
      <View
        style={[
          styles.speakerBadge,
          isTeacher ? styles.teacherBadge : styles.studentBadge,
        ]}
      >
        <Text style={styles.speakerBadgeText}>
          {isTeacher ? "🤖" : "🎙️"}
        </Text>
      </View>

      {/* Caption bubble */}
      <View
        style={[
          styles.captionBubble,
          isTeacher ? styles.teacherBubble : styles.studentBubble,
        ]}
      >
        <Text
          style={[
            styles.speakerLabel,
            isTeacher ? styles.teacherLabel : styles.studentLabel,
          ]}
        >
          {line.speakerName}
        </Text>
        <Text style={styles.captionText}>{line.text}</Text>
      </View>
    </Animated.View>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Styles
// ─────────────────────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginVertical: 4,
    backgroundColor: "rgba(15, 23, 42, 0.94)",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 14,
    height: 106, // Cố định chiều cao thoải mái, hiển thị trọn vẹn không bị cắt dòng
    borderWidth: 1.5,
    borderColor: "rgba(108, 78, 245, 0.4)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    gap: 8,
    paddingBottom: 4,
  },
  emptyRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    gap: 8,
  },
  listeningDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#6C4EF5",
  },
  emptyText: {
    fontFamily: "Poppins_500Medium",
    fontSize: 12,
    color: "rgba(255, 255, 255, 0.6)",
  },
  captionRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
  },
  speakerBadge: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 2,
    flexShrink: 0,
  },
  teacherBadge: {
    backgroundColor: "rgba(108, 78, 245, 0.35)",
  },
  studentBadge: {
    backgroundColor: "rgba(16, 185, 129, 0.35)",
  },
  speakerBadgeText: {
    fontSize: 13,
  },
  captionBubble: {
    flex: 1,
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  teacherBubble: {
    backgroundColor: "rgba(108, 78, 245, 0.2)",
    borderWidth: 1,
    borderColor: "rgba(108, 78, 245, 0.35)",
  },
  studentBubble: {
    backgroundColor: "rgba(16, 185, 129, 0.2)",
    borderWidth: 1,
    borderColor: "rgba(16, 185, 129, 0.35)",
  },
  speakerLabel: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 10,
    letterSpacing: 0.3,
    marginBottom: 2,
  },
  teacherLabel: {
    color: "#C4B5FD",
  },
  studentLabel: {
    color: "#6EE7B7",
  },
  captionText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 13,
    color: "#F8FAFC",
    lineHeight: 19,
  },
  speakingIndicatorRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingLeft: 4,
    paddingTop: 4,
  },
  studentBadgeSmall: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "rgba(16, 185, 129, 0.3)",
    alignItems: "center",
    justifyContent: "center",
  },
  speakingIndicatorText: {
    fontFamily: "Poppins_500Medium",
    fontSize: 11,
    color: "#34D399",
    fontStyle: "italic",
  },
});
