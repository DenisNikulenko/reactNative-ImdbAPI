import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {GoogleSigninButton} from '@react-native-community/google-signin';
import {login, googleLogin} from '../services/authServices';

import FormButton from '../components/ui/FormButton';
import FormInput from '../components/ui/FormInput';

import {windowHeight} from '../utilities/dimensions';

const LoginScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assests/images/movie-logo.png')}
      />
      <Text style={styles.text}>Movie App</Text>

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

      <FormButton buttonTitle="Войти" onPress={() => login(email, password)} />

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => console.log('forgot password')}>
        <Text style={styles.navBtnText}>Забыл пароль?</Text>
      </TouchableOpacity>

      {/* <SocialButton
        btnTitle="Войти через Google"
        btnType="google"
        color="red"
        backgroundColor="#ffcccc"
        onPress={() => googleLogin()}
      /> */}
      <GoogleSigninButton
        style={styles.googleBtn}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Light}
        onPress={() => googleLogin()} />

      <TouchableOpacity
        style={styles.createBtn}
        onPress={() => navigation.navigate('SignUp')}>
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
    color: '#051d5f',
  },

  forgotButton: {
    // justifyContent: 'center',
    marginBottom: 15,
  },


  googleBtn: {
    marginTop: 10,
    width: '100%',
    height: windowHeight / 15,
  },

  createBtn: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems:'center',
  },  

  navBtnText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2e64e5',
  },
});

export default LoginScreen;
