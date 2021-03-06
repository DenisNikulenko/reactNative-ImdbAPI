import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {login, googleLogin} from '../services/authServices';

import FormButton from '../components/ui/FormButton';
import FormInput from '../components/ui/FormInput';
import SocialButton from '../components/ui/SocialButton';

import {COLORS} from '../utilities/colors';

const LoginScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const validationLogin = (email, password) => {
    if (email && password) {
      login(email, password);
    } else if (email && !password) {
      alert('Проверьте поле pass!');
    } else if (password & !email) {
      alert('Проверьте поле email!')
    } else {
      alert('Проверьте поля email и password!')
    }
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assests/images/movie-logo.png')} />
      <Text style={styles.text}>Movie App</Text>

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

      <FormButton buttonTitle="Войти" onPress={() => validationLogin(email, password)} />

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => alert('In developing')}>
        <Text style={styles.navBtnText}>Забыл пароль?</Text>
      </TouchableOpacity>

      <View style={styles.loginWithBar}>
        <SocialButton
          btnType='google'
          onPress={() => googleLogin()} />

        <SocialButton
          btnType='phone'
          onPress={() => navigation.navigate('Phone')} />

        <SocialButton
          btnType='apple'
          onPress={() => alert('In developing')} />
      </View>

      <TouchableOpacity
        style={styles.createBtn}
        onPress={() => navigation.navigate('SignUp')} >
        <Text style={styles.navBtnText}>Создать аккаунт...</Text>
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

  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },

  text: {
    fontSize: 28,
    marginBottom: 10,
    color: COLORS.MAIN_COLOR,
  },

  forgotButton: {
    marginBottom: 15,
  },

  loginWithBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
  },

  createBtn: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  navBtnText: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.LINK,
  },
});

export default LoginScreen;
