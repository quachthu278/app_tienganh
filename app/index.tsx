import { useAuth } from "@clerk/expo";
import { images } from "@/constants/images";
import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const { signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    router.replace("/onboarding");
  };

  return (
    <View className="flex-1 items-center justify-center gap-6 bg-background px-6">
      {/* Logo */}
      <Image source={images.mascotLogo} className="w-20 h-20" />

      {/* Brand name */}
      <Text className="text--h1 text-text-primary">tt601-lingo</Text>
      <Text className="text--body-md text-center text-text-secondary">
        Your AI language learning companion
      </Text>

      {/* Sign out */}
      <TouchableOpacity
        onPress={handleSignOut}
        className="mt-4"
        activeOpacity={0.7}
      >
        <Text className="text-brand-purple text--body-md">Sign Out →</Text>
      </TouchableOpacity>
    </View>
  );
}
