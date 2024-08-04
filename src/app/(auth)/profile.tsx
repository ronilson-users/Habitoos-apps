// index.tsx
import { Button } from '@/components/Button';
import { View, StyleSheet, Text } from "react-native";
import { useAuth, useUser } from '@clerk/clerk-expo';
import UserImage from '@/components/UserImage'; // Importe o componente de imagem

export default function Profile() {
 const { user } = useUser();
  const { signOut } = useAuth();
  
 
  return (
    <View style={styles.container}>
      
      <Text style={styles.text}>Olá, {user?.fullName}</Text>
      
      
      <Text>Hello {user?.firstName}</Text>
      <Button
        icon="exit"
        title="Sair"
        onPress={() => { signOut() }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    justifyContent: "center",
    alignItems: "center",
    padding: 32,
    gap: 7,
  },
  text: {
    fontSize: 12,
    fontWeight: 'bold',
  }
});