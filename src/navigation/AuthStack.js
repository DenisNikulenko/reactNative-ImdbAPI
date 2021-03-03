import React, {useEffect} from 'react';

import {GoogleSignin} from '@react-native-community/google-signin';

import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import PhoneScreen from '../screens/PhoneScreen';
import OTPScrean from '../screens/OTPScrenn';

const Stack = createStackNavigator();
// const PhoneStack = () => {};

const AuthStack = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '129562092658-fdeeh9scs3f2vqcm9cbt9dfcnoaodsvo.apps.googleusercontent.com',
    });
  }, []);

  const optinWithBack = () => ({
    title: '',
    headerStyle: {
      backgroundColor: '#f9fafd',
      shadowColor: '#f9fafd',
      elevation: 0,
    },
  })

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{header: () => null}} />

      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={optinWithBack} />

      <Stack.Screen
        name="Phone"
        component={PhoneScreen}
        options={optinWithBack} />

      <Stack.Screen
        name="OTP Screen"
        component={OTPScrean}
        options={optinWithBack} />
    </Stack.Navigator>
  );
};

export default AuthStack;
