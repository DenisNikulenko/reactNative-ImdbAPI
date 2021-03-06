import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {windowWidth} from '../utilities/dimensions';
import {COLORS} from '../utilities/colors';

const PhoneScreen = () => {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState('+380');

  const onChangeText = (numbers) => {
    const i = /\+38\(\d{3}\)\d{3}-\d{2}-\d{2}/;

    setPhoneNumber(numbers);
  }

  const getOTP = () => {
    if (phoneNumber && phoneNumber.length > 10){
      navigation.navigate('OTP Screen', {phoneNumber});
    } else { 
          alert("Please enter 10 digit phone number");
      }
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Введите норме телефона:</Text>

      <TextInput 
        style={styles.input}
        value={phoneNumber}
        autoFocus={true}
        keyboardType="numeric"
        maxLength={13}
        onChangeText={onChangeText} />

      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btnOtp} onPress={getOTP}>
          <Ionicons name='arrow-forward' size={45} color={COLORS.MAIN_COLOR} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    marginBottom: 50,
    fontSize: 20,
    color: COLORS.MAIN_COLOR
  },

  input: {
    width: '80%',
    fontSize: 20,
    height: 50,
    elevation: 2,
    borderBottomColor: COLORS.MAIN_COLOR,
    borderBottomWidth: 1 ,
    borderRadius: 5,
    backgroundColor: COLORS.WHITE
  },

  btnContainer: {
    width: windowWidth - 20,
    alignItems: 'flex-end'
  },

  btnOtp: {
    marginTop: 50,
    marginRight: 20,
  }
});

export default PhoneScreen;
