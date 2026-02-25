import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";

const isAuth = false;

export default function RootLayout() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isAuth) {
        router.replace("/auth");
      }
    }, 0);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="auth" options={{ headerShown: true}} />
    </Stack>
  );
}