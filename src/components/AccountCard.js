import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';

const AccountCard = ({ isDarkMode }) => {
  const iconColor = isDarkMode ? '#fff' : '#333';
  const backgroundColor = isDarkMode ? '#1e1e2f' : '#fff';

  return (
    <View style={[styles.card, { backgroundColor }]}>
      <Text style={[styles.title, { color: iconColor }]}>🧾 Compte</Text>
      <Text style={[styles.subtitle, { color: isDarkMode ? '#ccc' : '#666' }]}>Gérez les paramètres de votre compte</Text>

      <TouchableOpacity style={[styles.option, { backgroundColor: isDarkMode ? '#2e2e3e' : '#f0f0f0' }]}>
        <Ionicons name="key-outline" size={16} color={iconColor} />
        <Text style={[styles.optionText, { color: iconColor }]}>Modifier le mot de passe</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.option, { backgroundColor: isDarkMode ? '#2e2e3e' : '#f0f0f0' }]}>
        <Feather name="download" size={16} color={iconColor} />
        <Text style={[styles.optionText, { color: iconColor }]}>Exporter mes données</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.option, { backgroundColor: isDarkMode ? '#2e2e3e' : '#f0f0f0' }]}>
        <Feather name="user-plus" size={16} color={iconColor} />
        <Text style={[styles.optionText, { color: iconColor }]}>Inviter un ami</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.option, { backgroundColor: isDarkMode ? '#2e2e3e' : '#f0f0f0' }]}> 
        <MaterialIcons name="rate-review" size={16} color={iconColor} />
        <Text style={[styles.optionText, { color: iconColor }]}>Laisser un avis</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.deleteButton}>
        <Text style={styles.deleteText}>🗑️ Supprimer le compte</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>↩️ Se déconnecter</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 13,
    marginBottom: 16,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    gap: 10,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 8,
  },
  optionText: {
    fontSize: 14,
  },
  deleteButton: {
    backgroundColor: '#e74c3c',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 12,
  },
  deleteText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#6c63ff',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default AccountCard;
