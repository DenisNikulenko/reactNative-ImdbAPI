import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {register, googleLogin} from '../services/authServices';

import FormInput from '../components/ui/FormInput';
import FormButton from '../components/ui/FormButton';
import SocialButton from '../components/ui/SocialButton';

import {windowHeight} from '../utilities/dimensions';

const SignUpScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const validationRegistrer = (email, password) => {
    if (password === confirmPassword) {
      register(email, password);
    } else {
      alert('Пароли не совпадают');
    }
  };

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
        autoCorrect={false} />

      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true} />

      <FormInput
        labelValue={confirmPassword}
        onChangeText={(userPassword) => setConfirmPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true} />

      <FormButton
        buttonTitle="Создать"
        onPress={() => validationRegistrer(email, password)} />

      <SocialButton 
        btnTitle='Регистрация через Google'
        btnType='google'
        color='#ff4d4d'
        backgroundColor='#ffb3b3'
        onPress={() =>  googleLogin()} />
      
      <SocialButton 
        btnTitle='Регистрация по номеру'
        btnType='phone'
        color='white'
        backgroundColor='#bfbfbf'
        onPress={() => navigation.navigate('Phone')} />

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
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },

  text: {
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },

  googleBtn: {
    marginTop: 10,
    width: '100%',
    height: windowHeight / 15,
  },

  navBtn: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  navBtnText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2e64e5',
  },
});

export default SignUpScreen;
