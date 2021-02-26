import React, {useEffect} from 'react';

import { GoogleSignin } from '@react-native-community/google-signin';

import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
  
  useEffect(() => {
    // initialize the Google SDK
    GoogleSignin.configure({
      webClientId: '917206495600-0t1b8p215kshb4e3tv2bvqd6piosuaq2.apps.googleusercontent.com',
    });
  }, []);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={() => ({
          title: '',
          headerStyle: {
            backgroundColor: '#f9fafd',
            shadowColor: '#f9fafd',
            elevation: 0,
          },
        })}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
