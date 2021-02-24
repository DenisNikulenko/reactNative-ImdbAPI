import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import FormButton from '../components/ui/FormButton';
import FormInput from '../components/ui/FormInput';
import SocialButton from '../components/ui/SocialButton';

import AntDesign from 'react-native-vector-icons/AntDesign';

const LoginScreen = ({navigate}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <View style={styles.container}> 
      {/* <Image 
        style={styles.logo} 
        source={require('')} /> */}
      <Text style={styles.text}>Movie App</Text>

      <FormInput 
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText='Email'
        iconName='user'
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
        buttonTitle="Sing in"
        inPress={() => console.log("Sign in")} />

      <TouchableOpacity style={styles.forgotButton} onPress={() => console.log('forgot password')}>
        <Text style={styles.navBtnText}>Forgot password</Text>
      </TouchableOpacity>

      <SocialButton 
        buttonTitle='Sign in with Google'
        btnType='google'
        color='red'
        backgroundColor='#e6eaf4'
        onPress={() => console.log('clicked google')}
      />

      <TouchableOpacity style={styles.forgotButton} onPress={() => console.log('navigate to Sign Up')}>
        <Text style={styles.navBtnText}>Создание аккаунта.</Text>
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