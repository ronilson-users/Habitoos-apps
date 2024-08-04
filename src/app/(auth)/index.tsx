import React from 'react';
import { ScrollView, StatusBar, Text, StyleSheet, View } from 'react-native';
import Banner from '@/components/Banner';
import Header from '@/components/Header';
import Favoritos from '@/components/Favoritos';

export default function Index() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#6200EE" barStyle="light-content" />
      <Header />
      <ScrollView contentContainerStyle={styles.content}>
        <Banner />
        <Favoritos />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 5,
  },
  text: {
    fontSize: 18,
    marginVertical: 5,
  },
});