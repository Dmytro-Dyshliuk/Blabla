import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, StyleSheet } from 'react-native';
import Loader from './src/components/loader';
import Chats from './src/pages/Chats';
import FavoriteChats from './src/pages/FavoriteChats';
import Favorites from './src/pages/Favorites';
import Profile from './src/pages/Profile';
import Footer from './src/components/Footer';
import Header from './src/components/Header';
import LoginScreen from './src/components/Auth/LoginScreen';
import RegisterScreen from './src/components/Auth/RegisterScreen';

const Stack = createNativeStackNavigator();

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
        />
      )}
      {renderContent()}
      <Footer activeTab={activeTab} onTabPress={handleTabPress} />
    </View>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={MainApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
