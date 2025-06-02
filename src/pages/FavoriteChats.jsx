import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const FavoriteChats = () => {
  const favoriteChats = [
    { id: '1', name: 'Улюблений чат 1', lastMessage: 'Важливе повідомлення...', time: '12:30' },
    { id: '2', name: 'Улюблений чат 2', lastMessage: 'Привіт!', time: '11:45' },
  ];

  const renderChatItem = ({ item }) => (
    <TouchableOpacity style={styles.chatItem}>
      <View style={styles.avatarContainer}>
        <Ionicons name="star" size={20} color="#FFD700" style={styles.starIcon} />
        <Ionicons name="person-circle" size={50} color="#007AFF" />
      </View>
      <View style={styles.chatInfo}>
        <View style={styles.chatHeader}>
          <Text style={styles.chatName}>{item.name}</Text>
          <Text style={styles.chatTime}>{item.time}</Text>
        </View>
        <Text style={styles.lastMessage}>{item.lastMessage}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Обрані чати</Text>
        <TouchableOpacity style={styles.headerButton}>
          <Ionicons name="options" size={24} color="#007AFF" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={favoriteChats}
        renderItem={renderChatItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Ionicons name="star-outline" size={50} color="#8E8E93" />
            <Text style={styles.emptyText}>Немає улюблених чатів</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5EA',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000000',
  },
  headerButton: {
    padding: 8,
  },
  listContainer: {
    padding: 10,
    paddingBottom: 80, // Додатковий відступ для футера
  },
  chatItem: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  avatarContainer: {
    marginRight: 15,
    position: 'relative',
  },
  starIcon: {
    position: 'absolute',
    top: -5,
    right: -5,
    zIndex: 1,
  },
  chatInfo: {
    flex: 1,
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  chatName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  chatTime: {
    fontSize: 12,
    color: '#8E8E93',
  },
  lastMessage: {
    fontSize: 14,
    color: '#8E8E93',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  emptyText: {
    marginTop: 10,
    fontSize: 16,
    color: '#8E8E93',
  },
});

export default FavoriteChats; 