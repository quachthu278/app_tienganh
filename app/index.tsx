import { ScrollView, Text, View } from "react-native";

/**
 * Design System Preview Screen
 *
 * Showcases all Lingua design tokens — colors, typography, and utilities.
 * Remove or replace this screen once you start building real features.
 */
export default function Index() {
  return (
    <ScrollView className="flex-1 bg-background">
      <View className="px-4 pt-12 pb-8 gap-8">
        {/* ── Brand Header ── */}
        <View>
          <Text className="text--h1">lingua</Text>
          <Text className="text--body-md text-text-secondary">
            Design System Preview
          </Text>
        </View>

        {/* ── Typography Scale ── */}
        <View className="gap-3">
          <Text className="text--caption text-brand-purple uppercase tracking-widest">
            Typography
          </Text>
          <Text className="text--h1">H1 — Screen Title</Text>
          <Text className="text--h2">H2 — Section Title</Text>
          <Text className="text--h3">H3 — Card Title</Text>
          <Text className="text--h4">H4 — Subheading</Text>
          <Text className="text--body-lg">Body Large — Important content</Text>
          <Text className="text--body-md">Body Medium — Body text</Text>
          <Text className="text--body-sm">Body Small — Supporting text</Text>
          <Text className="text--caption">Caption — Labels, meta text</Text>
        </View>

        {/* ── Primary Colors ── */}
        <View className="gap-3">
          <Text className="text--caption text-brand-purple uppercase tracking-widest">
            Primary Colors
          </Text>
          <View className="flex-row gap-3">
            <View className="flex-1 gap-1">
              <View className="h-16 rounded-lg bg-brand-purple" />
              <Text className="text--caption text-text-secondary">
                Purple
              </Text>
              <Text className="text--caption text-text-primary">#6C4EF5</Text>
            </View>
            <View className="flex-1 gap-1">
              <View className="h-16 rounded-lg bg-brand-deep-purple" />
              <Text className="text--caption text-text-secondary">
                Deep Purple
              </Text>
              <Text className="text--caption text-text-primary">#5B3BF6</Text>
            </View>
            <View className="flex-1 gap-1">
              <View className="h-16 rounded-lg bg-brand-blue" />
              <Text className="text--caption text-text-secondary">Blue</Text>
              <Text className="text--caption text-text-primary">#4D8BFF</Text>
            </View>
            <View className="flex-1 gap-1">
              <View className="h-16 rounded-lg bg-brand-green" />
              <Text className="text--caption text-text-secondary">Green</Text>
              <Text className="text--caption text-text-primary">#21C16B</Text>
            </View>
          </View>
        </View>

        {/* ── Semantic Colors ── */}
        <View className="gap-3">
          <Text className="text--caption text-brand-purple uppercase tracking-widest">
            Semantic Colors
          </Text>
          <View className="flex-row gap-3">
            <View className="flex-1 gap-1">
              <View className="h-16 rounded-lg bg-success" />
              <Text className="text--caption text-text-secondary">Success</Text>
            </View>
            <View className="flex-1 gap-1">
              <View className="h-16 rounded-lg bg-warning" />
              <Text className="text--caption text-text-secondary">Warning</Text>
            </View>
            <View className="flex-1 gap-1">
              <View className="h-16 rounded-lg bg-streak" />
              <Text className="text--caption text-text-secondary">Streak</Text>
            </View>
            <View className="flex-1 gap-1">
              <View className="h-16 rounded-lg bg-error" />
              <Text className="text--caption text-text-secondary">Error</Text>
            </View>
          </View>
        </View>

        {/* ── Neutrals ── */}
        <View className="gap-3">
          <Text className="text--caption text-brand-purple uppercase tracking-widest">
            Neutrals
          </Text>
          <View className="flex-row gap-3">
            <View className="flex-1 gap-1">
              <View className="h-16 rounded-lg bg-text-primary" />
              <Text className="text--caption text-text-secondary">
                Text Primary
              </Text>
            </View>
            <View className="flex-1 gap-1">
              <View className="h-16 rounded-lg bg-text-secondary" />
              <Text className="text--caption text-text-secondary">
                Text Secondary
              </Text>
            </View>
            <View className="flex-1 gap-1">
              <View className="h-16 rounded-lg bg-border border border-border" />
              <Text className="text--caption text-text-secondary">Border</Text>
            </View>
            <View className="flex-1 gap-1">
              <View className="h-16 rounded-lg bg-surface border border-border" />
              <Text className="text--caption text-text-secondary">Surface</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
