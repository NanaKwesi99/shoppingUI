import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import Shoppage from '../Components/ShopPage';
import { NavigationContainer, DefaultTheme   } from '@react-navigation/native';
import SecondDetailsPage from '../Components/Details/SeconDetailsPage';
import ThirdDetailsPage from '../Components/Details/ThirdDetailsPage';
import FourthDetailsPage from '../Components/Details/FourthDetailsPage';
import FirstDetailsPage from '../Components/Details/FirstDetailsPage';

const Stack = createStackNavigator()

const RootNavigator = ({navigation}) => {

  

    const MyTheme = {
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: "#F4F4FB"
        },
      };

      

    return (
        <NavigationContainer theme = {MyTheme} >
        <Stack.Navigator
              screenOptions={{
                headerShown: false
              }}
              
        >
             
              <Stack.Screen 
            name = "Shop Page" 
            component = {Shoppage}    
            />

              <Stack.Screen 
            name = "First Details Page"
             component = {FirstDetailsPage} />

             <Stack.Screen 
            name = "Second Details Page"
             component = {SecondDetailsPage} />


            <Stack.Screen 
            name = "Third Details Page"
             component = {ThirdDetailsPage} />

            <Stack.Screen 
            name = "Fourth Details Page"
             component = {FourthDetailsPage} />

 
          

          
        </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigator;