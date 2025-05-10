import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function UserCard({ user, isDarkMode }) {
  return (
    <View style={[styles.card, { backgroundColor: isDarkMode ? '#1e1e2f' : '#fff' }]}>
      <Image source={user.avatar} style={styles.avatar} />
      <Text style={[styles.name, { color: isDarkMode ? '#ffffff' : '#000000' }]}>{user.name}</Text>
      <Text
        style={[
          styles.role,
          {
            backgroundColor: isDarkMode ? '#32275f' : '#e0d5fc',
            color: isDarkMode ? '#c3b7ff' : '#6b46c1',
          },
        ]}
      >
        {user.role}
      </Text>
      <Text style={[styles.bio, { color: isDarkMode ? '#cccccc' : '#666666' }]}>{user.bio}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  role: {
    paddingHorizontal: 10,
    borderRadius: 12,
    marginTop: 4,
    fontSize: 14,
    fontWeight: '500',
    paddingVertical: 4,
  },
  bio: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 14,
  },
});
