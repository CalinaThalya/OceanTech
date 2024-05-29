import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home'
import Login from './components/Login';
import Help from './components/Help';
import About from './components/About';
import Register from './components/Register';
import ForgotPassword from './components/ForgoutPassaword';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="Home" 
          component={Home}
          options={{ title: 'Home' }} 
          />
           <Stack.Screen
          name="Help" 
          component={Help}
          options={{ title: 'Help' }} 
          />
            <Stack.Screen
          name="About" 
          component={About}
          options={{ title: 'About' }} 
          />
           <Stack.Screen
          name="Register" 
          component={Register}
          options={{ title: 'Register' }} 
          />
           <Stack.Screen
          name="ForgotPassword" 
          component={ForgotPassword}
          options={{ title: 'ForgotPassword' }} 
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
