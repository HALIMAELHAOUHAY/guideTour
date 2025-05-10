import React, { useRef, useMemo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const BadgeCard = ({ isDarkMode }) => {
  const badges = useMemo(
    () => [
      { title: 'Explorateur de Saïdia', unlocked: true },
      { title: 'Historien', unlocked: true },
      { title: 'Gourmet', unlocked: true },
      { title: 'Photographe', unlocked: false },
      { title: 'Premier pas', unlocked: true },
    ],
    []
  );

  const scales = useRef(badges.map(() => new Animated.Value(1))).current;

  const handlePress = (index) => {
    Animated.sequence([
      Animated.timing(scales[index], {
        toValue: 1.2,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scales[index], {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <View style={[styles.card, { backgroundColor: isDarkMode ? '#1e1e2f' : '#fff' }]}>
      <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#000' }]}>🏆 Badges</Text>
      <View style={styles.grid}>
        {badges.map((badge, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.badgeBox, !badge.unlocked && styles.locked]}
            onPress={() => handlePress(index)}
            activeOpacity={0.8}
          >
            <Animated.View
              style={[styles.iconCircle, { transform: [{ scale: scales[index] }] }]}
            >
              <Ionicons
                name="ribbon-outline"
                size={24}
                color={badge.unlocked ? (isDarkMode ? '#c1aaff' : '#6B46C1') : '#ccc'}
              />
            </Animated.View>
            <Text
              style={[styles.label, !badge.unlocked && styles.lockedText, { color: isDarkMode ? '#ccc' : '#000' }]}
            >
              {badge.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
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
    marginBottom: 15,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  badgeBox: {
    width: '30%',
    alignItems: 'center',
    marginVertical: 10,
  },
  iconCircle: {
    backgroundColor: '#f3f0ff',
    borderRadius: 50,
    padding: 10,
    marginBottom: 5,
  },
  label: {
    fontSize: 12,
    textAlign: 'center',
  },
  locked: {
    opacity: 0.3,
  },
  lockedText: {
    color: '#aaa',
  },
});

export default BadgeCard;
