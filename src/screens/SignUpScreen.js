import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import FormButton from '../components/ui/FormButton';
import FormInput from '../components/ui/FormInput';
import SocialButton from '../components/ui/SocialButton';

const SignUpScreen = ({navigate}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Создание нового аккаунта</Text>

      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />

      <FormInput
        labelValue={confirmPassword}
        onChangeText={(userPassword) => setConfirmPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />

      <FormButton
        buttonTitle="Sign Up"
        onPress={() => console.log('Sign Up')}
      />

      <View style={styles.textPrivate}>
        <Text style={styles.colorTextPrivate}>
          TEXT
        </Text>
        <TouchableOpacity onPress={() => alert('Terms Clicked')}>
          <Text style={[styles.color_textProvate, {color: '#e88832'}]}>
            TEXT
          </Text>
        </TouchableOpacity>
        <Text style={styles.color_textProvate}>and</Text>
        <Text style={[styles.color_textProvate, {color: '#e88832'}]}>
          TEXT
        </Text>
      </View>

      <SocialButton 
        buttonTitle='Войти через Google'
        btnType='google'
        color='#4867aa'
        backgroundColor='#e6eaf4'
        onPress={() => console.log('login in Google')} />

      <TouchableOpacity 
        style={styles.navBtn}
        onPress={() => console.log('navigate to loginScreen')} >
        <Text style={styles.navBtnText}>Есть аккаунт? Войти...</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
  },

  text: {
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },

  textPrivate: {},
  colorTextPrivate: {},

  navBtn: {
    marginTop: 15,
  },

  navBtnText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
  },

});

export default SignUpScreen;
