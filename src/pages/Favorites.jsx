import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Favorites = () => {
  const favorites = [
    { 
      id: '1', 
      type: 'message',
      content: 'Важливе повідомлення...',
      time: '12:30',
      chatName: 'Чат 1'
    },
    { 
      id: '2', 
      type: 'image',
      content: 'https://example.com/image.jpg',
      time: '11:45',
      chatName: 'Чат 2'
    },
    { 
      id: '3', 
      type: 'file',
      content: 'document.pdf',
      time: '10:20',
      chatName: 'Чат 3'
    },
  ];

  const renderFavoriteItem = ({ item }) => (
    <TouchableOpacity style={styles.favoriteItem}>
      <View style={styles.favoriteHeader}>
        <Text style={styles.chatName}>{item.chatName}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
      
      <View style={styles.contentContainer}>
        {item.type === 'message' && (
          <Text style={styles.messageText}>{item.content}</Text>
        )}
        {item.type === 'image' && (
          <View style={styles.imageContainer}>
            <Ionicons name="image" size={24} color="#007AFF" />
            <Text style={styles.fileText}>Зображення</Text>
          </View>
        )}
        {item.type === 'file' && (
          <View style={styles.fileContainer}>
            <Ionicons name="document" size={24} color="#007AFF" />
            <Text style={styles.fileText}>{item.content}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Обране</Text>
        <TouchableOpacity style={styles.headerButton}>
          <Ionicons name="filter" size={24} color="#007AFF" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={favorites}
        renderItem={renderFavoriteItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Ionicons name="heart-outline" size={50} color="#8E8E93" />
            <Text style={styles.emptyText}>Немає збережених елементів</Text>
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
  favoriteItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  favoriteHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  chatName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  time: {
    fontSize: 12,
    color: '#8E8E93',
  },
  contentContainer: {
    marginTop: 5,
  },
  messageText: {
    fontSize: 14,
    color: '#000000',
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fileText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#007AFF',
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

export default Favorites; 