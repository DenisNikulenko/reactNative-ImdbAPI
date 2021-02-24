import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import FormButton from '../components/ui/FormButton';
import FormInput from '../components/ui/FormInput';
import SocialButton from '../components/ui/SocialButton';

import AntDesign from 'react-native-vector-icons/AntDesign';

const LoginScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <View style={styles.container}> 
      <Image 
        style={styles.logo} 
        source={require('../images/movie-logo.png')} />
      <Text style={styles.text}>Movie App</Text>

       <FormInput 
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText='Email'
        iconType='user'
        keyboardType='email-address'
        autoCapitalize='none'
        autoCorrect={false} />

      <FormInput 
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText='Password'
        iconType='lock'
        secureTextEntry={true} />

      <FormButton 
        buttonTitle="Войти"
        onPress={() => console.log("Sign in")} />

      <TouchableOpacity style={styles.forgotButton} onPress={() => console.log('forgot password')}>
        <Text style={styles.navBtnText}>Забыл пароль?</Text>
      </TouchableOpacity>

      <SocialButton 
        btnTitle='Войти через Google'
        btnType='google'
        color='#ff6666'
        backgroundColor='#ffcccc'
        onPress={() => console.log('clicked google')}
      />

      <TouchableOpacity style={styles.forgotButton} onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.navBtnText}>Создать аккаунт..</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50
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

  forgotButton:{
    marginVertical: 35,
  },
  
  navBtnText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
  },

});

export default LoginScreen;