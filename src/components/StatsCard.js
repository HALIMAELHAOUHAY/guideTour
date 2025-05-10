import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function StatsCard({ stats, isDarkMode }) {
  return (
    <View style={[styles.card, { backgroundColor: isDarkMode ? '#1e1e2f' : '#fff' }]}>
      <View style={styles.row}>
        {stats.map((item, index) => (
          <View key={index} style={styles.statBox}>
            <Text style={[styles.value, { color: isDarkMode ? '#fff' : '#1a1a1a' }]}>{item.value}</Text>
            <Text style={[styles.label, { color: isDarkMode ? '#bbb' : '#888' }]}>{item.label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statBox: {
    alignItems: 'center',
  },
  value: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 12,
  },
});
