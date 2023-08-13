import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MovieListStackParamList } from "../types";
import { MovieList } from "../screens/movieList/MovieList";
import MovieScreen from "../screens/movieScreen/MovieScreen";

const Stack = createStackNavigator<MovieListStackParamList>();

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="MovieList">
                <Stack.Screen
                    name="MovieList"
                    component={MovieList}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="MovieScreen"
                    component={MovieScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;
