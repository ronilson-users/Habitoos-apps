import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

import { favoritos } from "@/utils/api/"

// Constante de favoritos


// Função para simular uma chamada de API
const getFavoritos = () => {
 return new Promise((resolve) => {
  setTimeout(() => {
   resolve(favoritos);
  }, 1000); // Simulando um atraso de 1 segundo na resposta
 });
};

const Favoritos = () => {
 const [data, setData] = useState([]);
 const [loading, setLoading] = useState(true);

 useEffect(() => {
  getFavoritos().then(favoritos => {
   setData(favoritos);
   setLoading(false);
  });
 }, []);

 if (loading) {
  return (
   <View style={styles.container}>
    <Text>Carregando...</Text>
   </View>
  );
 }

 const renderItem = ({ item }) => (
  <View style={styles.item}>
   <Image source={{ uri: item.imagem }} style={styles.image} />
   <Text style={styles.produto}>{item.produto}</Text>
   <Text style={styles.valor}>R$ {item.valor.toFixed(2)}</Text>
   <Text style={styles.avaliacao}>Avaliação: {item.avaliacao} estrelas</Text>
   <Text style={styles.ultimaCompra}>Última Compra: {item.ultimaCompra}</Text>
  </View>
 );

 return (
  <View style={styles.container}>
   <FlatList
    data={data}
    renderItem={renderItem}
    keyExtractor={item => item.produto}
   />
  </View>
 );
};

const styles = StyleSheet.create({
 container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  padding: 20
 },
 item: {
  marginBottom: 20,
  padding: 10,
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 5
 },
 image: {
  width: 100,
  height: 100,
  marginBottom: 10
 },
 produto: {
  fontSize: 18,
  fontWeight: 'bold'
 },
 valor: {
  fontSize: 16,
  color: 'green'
 },
 avaliacao: {
  fontSize: 14,
  color: 'orange'
 },
 ultimaCompra: {
  fontSize: 14,
  color: 'gray'
 }
});

export default Favoritos;