import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import WatchlistScreen from '../../screens/MovieDetailsScreen/MovieDetailsScreen';
import MovieDetailsScreen from '../../screens/WatchlistScreen/WatchlistScreen'

const HomeStack = createStackNavigator();

const HomeNavigator = () => {
    return (
        <HomeStack.Navigator initialRouteName="Home">
            <HomeStack.Screen name="HomeMain" component={HomeScreen} />
            <HomeStack.Screen name="MovieDetails" component={MovieDetailsScreen} />
            <HomeStack.Screen name="Watchlist" component={WatchlistScreen} />
        </HomeStack.Navigator>
    )
}

export default HomeNavigator