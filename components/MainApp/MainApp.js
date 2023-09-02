import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeNavigator from '../navigators/HomeNavigator/HomeNavigator';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import MovieDetailsScreen from '../screens/MovieDetailsScreen/MovieDetailsScreen';
import WatchlistScreen from '../screens/WatchlistScreen/WatchlistScreen';

const Stack = createNativeStackNavigator();

const MainApp = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home"
            screenOptions={{
                headerShown: false,
            }}
            >
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="MovieDetails" component={MovieDetailsScreen} />
                <Stack.Screen name="Watchlist" component={WatchlistScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainApp