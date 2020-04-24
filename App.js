import React from 'react';
import Home from "./src/screens/Home";
import SignUp from "./src/screens/Auth/signUp";
import SignIn from "./src/screens/Auth/signIn";
import Dashboard from "./src/screens/Dashboard"
import Product from "./src/screens/Product"

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}} />
        <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown: false}} />
        <Stack.Screen name="Product" component={Product} options={{headerShown: false}} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;