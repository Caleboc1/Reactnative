import { AuthProvider, useAuth } from "@/lib/auth-context";
import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";



export default function RootLayout() {
  const router = useRouter();
  const {user, isLoadingUser} = useAuth();
  const segments = useSegments();

  useEffect(() => {
    const timeout = setTimeout(() => {
      const inAuthGroup = segments[0] === "auth";

      if (!user && !inAuthGroup && !isLoadingUser) {
        router.replace("/auth");
      } else if (user && inAuthGroup && !isLoadingUser) {
        router.replace("/");
      }
    }, 0);

    return () => clearTimeout(timeout);
  }, [user, segments]);

  return (
    <AuthProvider> 
      <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="auth" options={{ headerShown: true}} />
    </Stack></AuthProvider>
   
  );
}