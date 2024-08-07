import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {
  useFonts({
    poppins: require("./../assets/fonts/Poppins-SemiBold.ttf"),
  });
  return (
    <Stack screenOptions={{
      headerShown:false
    }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}
