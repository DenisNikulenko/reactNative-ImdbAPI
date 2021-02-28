import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {register} from '../services/authServices';
import {GoogleSigninButton} from '@react-native-community/google-signin';

import FormButton from '../components/ui/FormButton';
import FormInput from '../components/ui/FormInput';
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
      console.log(register);
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
        onPress={() => validationRegistrer(email, password)}
      />

      {/* <SocialButton 
        btnTitle='Войти через Google'
        btnType='google'
        color='#ff6666'
        backgroundColor='#ffcccc'
        onPress={() => console.log('clicked google')} /> */}

      <GoogleSigninButton
        style={styles.googleBtn}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Light}
        onPress={() => googleLogin()}
      />

      <TouchableOpacity
        style={styles.navBtn}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.navBtnText}>Есть аккаунт? Войти...</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
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
