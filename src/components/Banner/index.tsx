import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Banner = () => {
  return (
    <View style={styles.banner}>
      <Text style={styles.bannerText}>Este é o Banner</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    backgroundColor: '#6200EE',
    padding: 10,
    borderRadius: 2,
    marginBottom: 20,
    alignItems: 'center',
  },
  bannerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Banner;