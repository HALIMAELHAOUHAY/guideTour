import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import UserCard from '../components/UserCard';
import StatsCard from '../components/StatsCard';
import BadgeCard from '../components/BadgeCard';
import NextAdventureCard from '../components/NextAdventureCard';
import SettingsCard from '../components/SettingsCard';
import AccountCard from '../components/AccountCard';
import Header from '../components/Header';

export default function ProfileScreen() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const user = {
    name: 'Sofia Belmonte',
    role: 'Exploratrice avancée',
    bio: "Passionnée de découvertes locales et de culture...",
    avatar: require('../../assets/avatar.png'),
  };

  const stats = [
    { value: 42, label: 'Lieux visités' },
    { value: 16, label: 'Favoris' },
    { value: 23, label: 'Contributions' },
    { value: '4.8/5', label: 'Score' },
  ];

  const badges = [
    { title: 'Explorateur de Saïdia', unlocked: true },
    { title: 'Historien', unlocked: true },
    { title: 'Gourmet', unlocked: true },
    { title: 'Photographe', unlocked: false },
    { title: 'Premier pas', unlocked: true },
  ];

  const adventure = {
    title: 'Tafoughalt',
    description: 'Tafoughalt, un joyau niché au cœur des montagnes Beni Snassen, offre des paysages verdoyants, des sources naturelles et un climat rafraîchissant idéal pour l’aventure et la détente.',
    image: require('../../assets/tafoughalt.jpg'),
    progress: 65,
  };

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#121212' : '#f5f6fa' }]}>
      <Header onToggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <ScrollView contentContainerStyle={{ paddingTop: 100 }}>
        <UserCard user={user} isDarkMode={isDarkMode} />
        <StatsCard stats={stats} isDarkMode={isDarkMode} />
        <BadgeCard badges={badges} isDarkMode={isDarkMode} />
        <NextAdventureCard adventure={adventure} isDarkMode={isDarkMode} />
        <SettingsCard isDarkMode={isDarkMode} />
        <AccountCard isDarkMode={isDarkMode} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
