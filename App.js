import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Loader from './src/components/loader';
import Chats from './src/pages/Chats';
import FavoriteChats from './src/pages/FavoriteChats';
import Favorites from './src/pages/Favorites';
import Profile from './src/pages/Profile';
import Footer from './src/components/Footer';
import Header from './src/components/Header';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('chats');
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

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
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {activeTab !== 'profile' && (
            <Header
              searchValue={searchValue}
              onSearchChange={setSearchValue}
              onSearch={handleSearch}
            />
          )}
          {renderContent()}
          <Footer activeTab={activeTab} onTabPress={handleTabPress} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
