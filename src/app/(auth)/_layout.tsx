// => /src/app/(tabs)/_layout.tsx

import React from 'react';
import { Tabs } from 'expo-router';
import {
 Foundation,
 Ionicons,
 AntDesign,
 MaterialIcons
} from '@expo/vector-icons';
import { Avatar } from '@/components/Avatar';
import { theme } from '@/app/theme';

export default function TabLayout() {
 return (
  <Tabs
   screenOptions={{
    headerShown: false,
    tabBarActiveTintColor: theme.colors.white,
    tabBarInactiveTintColor: theme.colors.gray[600],
    tabBarShowLabel: false,
    tabBarStyle: {
     backgroundColor: theme.colors.black,
     borderColor: theme.colors.black,
    },
   }}
  >
   <Tabs.Screen
    name="index"
    options={{
     tabBarIcon: ({ size, color }) => (
      <Foundation name="home" size={size} color={color} />
     ),
    }}
   />
   <Tabs.Screen
    name="search"
    options={{
     tabBarIcon: ({ size, color }) => (
      <Ionicons name="search" size={size} color={color} />
     ),
    }}
   />
   <Tabs.Screen
    name="scanBarcode"
    options={{
     tabBarIcon: ({ size, color }) => (
      <MaterialIcons name="qr-code-scanner" size={size} color={color} />
     ),
    }}
   />
   <Tabs.Screen
    name="maps"
    options={{
     tabBarIcon: ({ size, color }) => (
      <MaterialIcons name="map" size={size} color={color} />
     ),
    }}
   />
   <Tabs.Screen
    name="profile"
    options={{
     tabBarIcon: ({ focused }) => (
      <Avatar
       selected={focused}
       source={{ uri: 'https://github.com/ronilson-users.png' }}
      />
     ),
    }}
   />
  </Tabs>
 );
}