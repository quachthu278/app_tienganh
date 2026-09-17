import React, { useEffect, useRef } from "react";
import {
  Animated,
  Dimensions,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { SymbolView } from "expo-symbols";

// Tab configuration — icon names map to SF Symbols (iOS) / fallback emoji (Android)
const TAB_CONFIG: Record<
  string,
  { sfSymbol: string; sfSymbolFilled: string; label: string; emoji: string }
> = {
  index: {
    sfSymbol: "house",
    sfSymbolFilled: "house.fill",
    label: "Home",
    emoji: "🏠",
  },
  learn: {
    sfSymbol: "book",
    sfSymbolFilled: "book.fill",
    label: "Learn",
    emoji: "📖",
  },
  "ai-teacher": {
    sfSymbol: "sparkles",
    sfSymbolFilled: "sparkles",
    label: "AI Teacher",
    emoji: "✨",
  },
  chat: {
    sfSymbol: "message",
    sfSymbolFilled: "message.fill",
    label: "Chat",
    emoji: "💬",
  },
  profile: {
    sfSymbol: "person",
    sfSymbolFilled: "person.fill",
    label: "Profile",
    emoji: "👤",
  },
};

const ACTIVE_COLOR = "#5B3FD9";
const INACTIVE_COLOR = "#9CA3AF";
const TAB_BAR_HEIGHT = 70;
const CIRCLE_SIZE = 52;
const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function CustomTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const insets = useSafeAreaInsets();
  const tabCount = state.routes.length;
  const tabWidth = SCREEN_WIDTH / tabCount;

  // Animated X position of the active circle
  const circleX = useRef(new Animated.Value(state.index * tabWidth)).current;

  useEffect(() => {
    Animated.spring(circleX, {
      toValue: state.index * tabWidth,
      useNativeDriver: true,
      damping: 20,
      stiffness: 180,
      mass: 0.8,
    }).start();
  }, [state.index, tabWidth]);

  const bottomPadding = insets.bottom;

  return (
    <View style={styles.tabBar}>
      {/* Safe area background fill — flush to screen bottom edge */}
      {bottomPadding > 0 && (
        <View
          style={[
            styles.safeAreaFill,
            { height: bottomPadding },
          ]}
        />
      )}

      {/* Animated active circle background */}
      <Animated.View
        style={[
          styles.activeCircle,
          {
            transform: [
              {
                translateX: Animated.add(
                  circleX,
                  new Animated.Value(tabWidth / 2 - CIRCLE_SIZE / 2)
                ),
              },
            ],
          },
        ]}
      />

      {/* Tab buttons */}
      {state.routes.map((route, index) => {
        const isActive = state.index === index;
        const config = TAB_CONFIG[route.name] ?? {
          sfSymbol: "circle",
          sfSymbolFilled: "circle.fill",
          label: route.name,
          emoji: "●",
        };

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });
          if (!isActive && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <Pressable
            key={route.key}
            style={[styles.tabItem, { width: tabWidth }]}
            onPress={onPress}
            accessibilityRole="button"
            accessibilityLabel={config.label}
            accessibilityState={{ selected: isActive }}
          >
            {/* Icon — inside circle when active */}
            <View style={styles.iconWrapper}>
              {Platform.OS === "ios" ? (
                <SymbolView
                  name={
                    isActive ? config.sfSymbolFilled : config.sfSymbol
                  }
                  size={isActive ? 22 : 20}
                  tintColor={isActive ? "#FFFFFF" : INACTIVE_COLOR}
                  style={styles.symbol}
                />
              ) : (
                <Text
                  style={[
                    styles.emoji,
                    { opacity: isActive ? 1 : 0.5 },
                  ]}
                >
                  {config.emoji}
                </Text>
              )}
            </View>

            {/* Label — only for inactive tabs */}
            {!isActive && (
              <Text style={styles.label}>{config.label}</Text>
            )}
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#F3F4F6",
    position: "relative",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 10,
  },
  safeAreaFill: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#FFFFFF",
  },
  activeCircle: {
    position: "absolute",
    top: (TAB_BAR_HEIGHT - CIRCLE_SIZE) / 2 - 4,
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    backgroundColor: ACTIVE_COLOR,
    zIndex: 0,
  },
  tabItem: {
    alignItems: "center",
    justifyContent: "center",
    height: TAB_BAR_HEIGHT,
    zIndex: 1,
    gap: 2,
  },
  iconWrapper: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    alignItems: "center",
    justifyContent: "center",
  },
  symbol: {
    width: 24,
    height: 24,
  },
  emoji: {
    fontSize: 20,
  },
  label: {
    fontSize: 10,
    fontFamily: "Poppins_500Medium",
    color: INACTIVE_COLOR,
    letterSpacing: 0.2,
    marginTop: -2,
  },
});
