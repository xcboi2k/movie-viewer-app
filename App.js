import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import fetch from 'node-fetch';

import HomeScreen from './components/screens/HomeScreen/HomeScreen';
import LoginScreen from './components/screens/LoginScreen/LoginScreen';
import MovieDetailsScreen from './components/screens/MovieDetailsScreen/MovieDetailsScreen';
import WatchlistScreen from './components/screens/WatchlistScreen/WatchlistScreen';

export default function App() {
  const [data, setData] = useState([]);
  const url = 'https://api.themoviedb.org/3/authentication';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTJmOTNkODExMGM2MzM1OWY0YjM0MTc3YTc4ZTdlNyIsInN1YiI6IjY0ZjFkYTU5ZGJiYjQyMDExYjcxNDE5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2flLbwPagHEBs2jaRnvKcNyAOzEXvB1LNA_7OD4pqT8'
    }
  };

  useEffect(() => {
    fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error:' + err));
  }, []);

  return (
    <View style={styles.container}>
      <HomeScreen />
      {/* <LoginScreen /> */}
      {/* <MovieDetailsScreen /> */}
      {/* <WatchlistScreen /> */}
      {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}
    </View>
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
