import { images } from "@/constants/images";
import { Link } from "expo-router";
import { Image, Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center gap-6 bg-background px-6">
      {/* Logo */}
      <Image source={images.mascotLogo} className="w-20 h-20" />

      {/* Brand name */}
      <Text className="text--h1 text-text-primary">tt601-lingo</Text>
      <Text className="text--body-md text-center text-text-secondary">
        Your AI language learning companion
      </Text>

      {/* Navigate to onboarding */}
      <Link href="/onboarding" asChild>
        <Text className="text-brand-purple ">View Onboarding →</Text>
      </Link>
    </View>
  );
}
