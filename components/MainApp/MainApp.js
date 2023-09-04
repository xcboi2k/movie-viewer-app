import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeNavigator from '../navigators/HomeNavigator/HomeNavigator';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import MovieDetailsScreen from '../screens/MovieDetailsScreen/MovieDetailsScreen';
import WatchlistScreen from '../screens/WatchlistScreen/WatchlistScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import useAuthStore from '../../stores/useAuthStore';
import RatedMoviesScreen from '../screens/RatedMoviesScreen/RatedMoviesScreen';
import RatedMoviesDetailsScreen from '../screens/RatedMovieDetailsScreen/RatedMoviesDetailsScreen';

const Stack = createNativeStackNavigator();

const MainApp = () => {
    const isLoggedIn = useAuthStore((state) => state.isAuthenticated);
    return (
        <NavigationContainer>
            {
                isLoggedIn ? (
                <Stack.Navigator initialRouteName="Home"
                screenOptions={{
                    headerShown: false,
                }}
                >
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="MovieDetails" component={MovieDetailsScreen} />
                    <Stack.Screen name="Watchlist" component={WatchlistScreen} />
                    <Stack.Screen  name="RatedMovies" component={RatedMoviesScreen} />
                    <Stack.Screen  name="RatedMovieDetails" component={RatedMoviesDetailsScreen} />
                </Stack.Navigator>
                ):(
                    <Stack.Navigator initialRouteName="Login"
                    screenOptions={{
                        headerShown: false,
                    }}
                    >
                        <Stack.Screen name="Login" component={LoginScreen} />
                    </Stack.Navigator>
                )

            }
        </NavigationContainer>
    )
}

export default MainApp