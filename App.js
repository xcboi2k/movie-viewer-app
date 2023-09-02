import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import MainApp from './components/MainApp/MainApp';

import HomeScreen from './components/screens/HomeScreen/HomeScreen';
import LoginScreen from './components/screens/LoginScreen/LoginScreen';
import MovieDetailsScreen from './components/screens/MovieDetailsScreen/MovieDetailsScreen';
import WatchlistScreen from './components/screens/WatchlistScreen/WatchlistScreen';

export default function App() {
  return (
    <MainApp />
    // <View style={styles.container}>
      
    //   {/* <HomeScreen /> */}
    //   {/* <LoginScreen /> */}
    //   {/* <MovieDetailsScreen /> */}
    //   {/* <WatchlistScreen /> */}
    //   {/* <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" /> */}
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15191E',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
