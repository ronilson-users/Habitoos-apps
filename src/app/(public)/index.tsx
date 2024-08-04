import { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from "react-native";

import * as WebBrowser from 'expo-web-browser'
import * as Linking from 'expo-linking'

import { useOAuth } from '@clerk/clerk-expo';

import { Button } from '@/components/Button';

WebBrowser.maybeCompleteAuthSession()

export default function Signin() {

 const [isLoading, setIsLoading] = useState(false);

 const googleOAuth = useOAuth({ strategy: "oauth_google" })

 async function onGoogleSignin() {
  try {
   setIsLoading(true);

   const redirectUrl = Linking.createURL("/")

   const oAuthFlow = await googleOAuth.startOAuthFlow({ redirectUrl });

   if (oAuthFlow.authSessionResult?.type === "success") {
    
    if (oAuthFlow.setActive && oAuthFlow.type?.createdSessionId) {
     await oAuthFlow.setActive({ session: oAuthFlow.createdSessionId });
     
    }
   } else {
    setIsLoading(false);
   }

  } catch (error) {
   console.log('error', error);
   setIsLoading(false);
  }
 }

 useEffect(() => {
  WebBrowser.warmUpAsync();

  return () => {
   WebBrowser.coolDownAsync();
  }
 }, [isLoading]);

 return (
  <View style={styles.container}>
   <Text>Welcome to React Native!</Text>
   <Button
    icon="logo-google"
    title="Entrar com Google"
    onPress={onGoogleSignin}
    isLoading={isLoading}
   />
  </View>
 );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  justifyContent: "center",
  padding: 32,
  gap: 12,
 },
 title: {
  fontWeight: 'bold',
  fontSize: 18,
 }
});