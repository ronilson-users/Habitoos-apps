import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface HeaderProps {
  setSearchResult: (result: string) => void;
}

const Header: React.FC<HeaderProps> = ({ setSearchResult }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Simulando a busca e definindo o resultado
    setSearchResult(query);
  };

  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Este é o Header</Text>
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#fff" style={styles.searchIcon} />
        <TextInput 
          style={styles.searchInput}
          placeholder="Pesquisar"
          placeholderTextColor="#fff"
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#6200EE',
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: '100%',
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: '#fff',
  },
});

export default Header;