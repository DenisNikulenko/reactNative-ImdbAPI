import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {register, googleLogin} from '../services/authServices';

import FormInput from '../components/ui/FormInput';
import FormButton from '../components/ui/FormButton';
import SocialButton from '../components/ui/SocialButton';

import {COLORS} from '../utilities/colors';

const SignUpScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const validationRegistrer = (email, password) => {
    if (password === confirmPassword && email) {
      register(email, password);
    } else if (!password && !email){
      alert('Заполните поля!')      
    }else if(!password || !confirmPassword) {
      alert('Заполните поле пароля!');
    } else {
      alert('Пароли не совпадают!');
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
    marginBottom: 60,
    color: COLORS.MAIN_COLOR,
  },

  loginWithBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
  },

  navBtn: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  navBtnText: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.LINK,
  },
});

export default SignUpScreen;
