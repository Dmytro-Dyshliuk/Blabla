import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Chats from '../pages/Chats';
import FavoriteChats from '../pages/FavoriteChats';
import Favorites from '../pages/Favorites';
import Profile from '../pages/Profile';
import Footer from '../components/Footer';
import Header from '../components/Header';

const MainApp = () => {
  const [activeTab, setActiveTab] = useState('chats');
  const [searchValue, setSearchValue] = useState('');

  const handleTabPress = (tab) => {
    setActiveTab(tab);
    setSearchValue('');
  };

  const handleSearch = () => {
    console.log('Searching for:', searchValue);
  };

  const getPageTitle = () => {
    switch (activeTab) {
      case 'chats':
        return 'Чати';
      case 'favoriteChats':
        return 'Обрані чати';
      case 'favorites':
        return 'Обране';
      case 'profile':
        return 'Профіль';
      default:
        return '';
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'chats':
        return <Chats />;
      case 'favoriteChats':
        return <FavoriteChats />;
      case 'favorites':
        return <Favorites />;
      case 'profile':
        return <Profile />;
      default:
        return <Chats />;
    }
  };

  return (
    <View style={styles.container}>
      {activeTab !== 'profile' && (
        <Header
          searchValue={searchValue}
          onSearchChange={setSearchValue}
          onSearch={handleSearch}
          title={getPageTitle()}
        />
      )}
      {renderContent()}
      <Footer activeTab={activeTab} onTabPress={handleTabPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MainApp; 