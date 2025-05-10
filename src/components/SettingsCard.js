import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, Modal, Pressable } from 'react-native';

export default function SettingsCard({ isDarkMode }) {
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState('Français');
  const [modalVisible, setModalVisible] = useState(false);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setModalVisible(false);
  };

  return (
    <View style={[styles.card, { backgroundColor: isDarkMode ? '#1e1e2f' : '#fff' }]}>
      <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#000' }]}>🛠️ Paramètres</Text>
      <Text style={[styles.subtitle, { color: isDarkMode ? '#aaa' : '#666' }]}>Préférences</Text>

      <View style={styles.row}>
        <Text style={[styles.label, { color: isDarkMode ? '#ddd' : '#000' }]}>🔔 Notifications</Text>
        <Switch
          value={notifications}
          onValueChange={setNotifications}
          thumbColor={notifications ? '#6c63ff' : '#ccc'}
          trackColor={{ false: '#999', true: '#c5bfff' }}
        />
      </View>

      <Text style={[styles.label, { color: isDarkMode ? '#ddd' : '#000' }]}>🌐 Langue</Text>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={[
          styles.select,
          {
            borderColor: isDarkMode ? '#555' : '#ddd',
            backgroundColor: isDarkMode ? '#2c2c3a' : '#fff',
          },
        ]}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ color: isDarkMode ? '#ccc' : '#000' }}>{language}</Text>
          <Text style={{ color: isDarkMode ? '#ccc' : '#000' }}>▼</Text>
        </View>
      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, { backgroundColor: isDarkMode ? '#1e1e2f' : '#fff' }]}>
            {['Français', 'Anglais', 'Arabe'].map((lang) => (
              <Pressable
                key={lang}
                onPress={() => handleLanguageChange(lang)}
                style={styles.modalOption}
              >
                <Text style={{ color: isDarkMode ? '#fff' : '#000' }}>{lang}</Text>
              </Pressable>
            ))}
          </View>
        </View>
      </Modal>

      <TouchableOpacity style={styles.trashButton}>
        <Text style={{ color: '#fff' }}>🗑️ Vider le cache</Text>
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
  subtitle: {
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
  },
  select: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
  trashButton: {
    backgroundColor: '#e74c3c',
    padding: 10,
    marginTop: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    borderRadius: 10,
    padding: 20,
  },
  modalOption: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
