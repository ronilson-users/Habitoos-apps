import { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import "@/styles/global.css";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { Slot, useRouter } from 'expo-router';
import { ClerkProvider, useAuth } from '@clerk/clerk-expo';

import { tokenCache } from '@/storage/tokenCache';

import TabLayout from '@/app/(tabs)/_layout';

const PUBLIC_CLERK_PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY as string;

if (!PUBLIC_CLERK_PUBLISHABLE_KEY) {
 throw new Error(
  'Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env',
 );
}

function InitialLayout() {
 const { isSignedIn, isLoaded } = useAuth();
 const router = useRouter();

 useEffect(() => {
  if (!isLoaded) return;

  if (isSignedIn) {
   router.replace('(auth)');
  } else {
   router.replace('(public)');
  }
 }, [isSignedIn, isLoaded, router]);

 return isLoaded ? (
  <Slot />
 ) : (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
   <ActivityIndicator size="large" />
  </View>
 );
}

export default function Layout() {
 return (
  <ClerkProvider publishableKey={PUBLIC_CLERK_PUBLISHABLE_KEY} tokenCache={tokenCache}>
  <GestureHandlerRootView>
   <InitialLayout />
   </GestureHandlerRootView>
  </ClerkProvider>
 );
}