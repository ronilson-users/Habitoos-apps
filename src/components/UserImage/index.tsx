// components/UserImage.tsx
import React from 'react';
import { Image, StyleSheet } from 'react-native';

import { useAuth, useUser } from '@clerk/clerk-expo';



interface UserImageProps {
 user: {
  profileImageUrl: string;
 };
}

const UserImage: React.FC<UserImageProps> = ({ user }) => {
 return (
  <Image
   source={{ uri: user.profileImageUrl }}
   style={styles.image}
  />
 );
};

const styles = StyleSheet.create({
 image: {
  width: 100,
  height: 100,
  borderRadius: 50,
 },
});

export default UserImage;