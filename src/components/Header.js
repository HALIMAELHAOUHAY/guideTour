import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
//test changement 

const Header = ({ onToggleTheme, isDarkMode }) => {
  return (
    <View style={[styles.header, { backgroundColor: isDarkMode ? '#1e1e2f' : '#fff' }]}>
      <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#6B46C1' }]}>TravelProfile</Text>
      <TouchableOpacity onPress={onToggleTheme}>
        <Ionicons
          name={isDarkMode ? 'sunny' : 'moon'}
          size={24}
          color={isDarkMode ? '#FFD700' : '#333'}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    paddingTop: 50,
    paddingBottom: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
 

export default Header;
