import React from "react";
    import { View, StyleSheet, Text } from "react-native";
    
    export default function Search() {
     return (
      <View style={styles.container}>
      <Text>Welcome to React Native!</Text>
      </View>
      );
    }
    
    const styles = StyleSheet.create({
     container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
     }
    });
    