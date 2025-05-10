import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function NextAdventureCard({ adventure, isDarkMode }) {
  return (
    <View style={[styles.card, { backgroundColor: isDarkMode ? '#1e1e2f' : '#fff' }]}>
      <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#000' }]}>
        🕒 Ta prochaine aventure
      </Text>
      <Image source={adventure.image} style={styles.image} />
      <Text style={[styles.name, { color: isDarkMode ? '#fff' : '#000' }]}>
        {adventure.title}
      </Text>
      <Text style={[styles.desc, { color: isDarkMode ? '#ccc' : '#555' }]}>
        {adventure.description}
      </Text>
      <Text style={[styles.progress, { color: isDarkMode ? '#aaa' : '#777' }]}>
        Progression régionale : {adventure.progress}%
      </Text>
      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: isDarkMode ? '#9b8bff' : '#6c63ff' },
        ]}
      >
        <Text style={styles.buttonText}>Explorer</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 13,
    marginVertical: 5,
  },
  progress: {
    fontSize: 13,
  },
  button: {
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
