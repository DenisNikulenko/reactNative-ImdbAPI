import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import FormButton from '../components/ui/FormButton';
import FormInput from '../components/ui/FormInput';
import SocialButton from '../components/ui/SocialButton';

import AntDesign from 'react-native-vector-icons/AntDesign';

const LoginScreen = ({navigate}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return(
    <View> 
      <Image style={styles.container} />
    </View>
  )
}

const styles = StyleSheet.create({

});

export default LoginScreen;