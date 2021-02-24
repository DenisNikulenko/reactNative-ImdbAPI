import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import FormButton from '../components/ui/FormButton';
import FormInput from '../components/ui/FormInput';
import SocialButton from '../components/ui/SocialButton';

const SignUpScreen = () => {
  const navigation = useNavigation();

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
        buttonTitle="Создать"
        onPress={() => console.log('Sign Up')}
      />

      <SocialButton 
        btnTitle='Войти через Google'
        btnType='google'
        color='#ff6666'
        backgroundColor='#ffcccc'
        onPress={() => console.log('clicked google')}
      />

      <TouchableOpacity 
        style={styles.navBtn}
        onPress={() => navigation.navigate('Login')} >
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

  navBtn: {
    marginTop: 50,
  },

  navBtnText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
  },

});

export default SignUpScreen;
