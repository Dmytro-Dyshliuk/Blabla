import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Footer = ({ activeTab, onTabPress }) => {
  const tabs = [
    {
      id: 'chats',
      label: 'Чати',
      icon: activeTab === 'chats' ? 'chatbubbles' : 'chatbubbles-outline'
    },
    {
      id: 'favoriteChats',
      label: 'Обрані чати',
      icon: activeTab === 'favoriteChats' ? 'star' : 'star-outline'
    },
    {
      id: 'favorites',
      label: 'Обране',
      icon: activeTab === 'favorites' ? 'heart' : 'heart-outline'
    },
    {
      id: 'profile',
      label: 'Профіль',
      icon: activeTab === 'profile' ? 'person' : 'person-outline'
    }
  ];

  return (
    <View style={styles.footer}>
      {tabs.map(tab => (
        <TouchableOpacity 
          key={tab.id}
          style={styles.tab} 
          onPress={() => onTabPress(tab.id)}
        >
          <Ionicons 
            name={tab.icon}
            size={24} 
            color={activeTab === tab.id ? '#007AFF' : '#8E8E93'} 
          />
          <Text 
            style={[
              styles.tabText, 
              activeTab === tab.id && styles.activeTabText
            ]}
          >
            {tab.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E5EA',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    fontSize: 12,
    marginTop: 4,
    color: '#8E8E93',
  },
  activeTabText: {
    color: '#007AFF',
  },
});

export default Footer; 