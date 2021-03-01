import React, {useState, useEffect, useRef} from 'react';
import {View, Text, StyleSheet, KeyboardAvoidingView} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

import {useNavigation} from '@react-navigation/native';

const OTPScrenn = () => {
  const navigation = useNavigation();

  let textInput = useRef(null);
  let clockCall = null;
  const [internalVal, setInternalVal] = useState('');
  const defaultCountdown = 5;
  const [countdown, setCountdown] = useState(defaultCountdown)
  const lengthInput = 6; 
  const [enableResend, setEnableResend] = useState(false);

  useEffect(() => {
    clockCall = setInterval(() => {
      decrementClock();
    }, 1000)

    return () => {
      clearInterval(clockCall);
    }
  },[clockCall, countdown]);

  const decrementClock = () => {
    if (countdown === 0) {
      setEnableResend(true)
      setCountdown(0)
      clearInterval(clockCall)
    } else {
      setCountdown(countdown - 1)
    }
  }

  const onResendOTP = () => {
    if (enableResend) {
      setCountdown(defaultCountdown);
      setEnableResend(false);
      clearInterval(clockCall);
      clockCall = setInterval(() => {
        decrementClock()
      }, 1000);
    }
  }

  const onChangeNumber = () => {
    console.log("object")

    setInternalVal(null)
  }

  useEffect(() => {
    textInput.focus()
  },[]);

  const onChangeText = (text) => {
    setInternalVal(text);
    if (text.length >= lengthInput) {
      console.log('auth')
      navigation.navigate('Home')
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={50}
        behavior={'padding'}
        style={styles.containerAvoiding}
      >
        <Text style={styles.textTitle}>Введите код:</Text> 

        <View>
          <TextInput 
            ref={(input) => textInput = input}
            onChangeText={onChangeText}
            style={{width: 0, height: 0,}}
            value={internalVal}
            maxLength={lengthInput}
            returnKeyType='done'
            keyboardType='numeric'
          />
        </View>

        <View style={styles.containerInput}>
          {
            Array(lengthInput).fill().map((data, idx) => (
              <View 
                key={idx}
                style={styles.cellView}>
                <Text 
                  style={styles.cellText}
                  onPress={() => textInput.focus()} >
                    {internalVal && internalVal.length > 0 ? internalVal[idx] : '' } 
                </Text>
              </View>
            ))
          }
        </View>

        <View style={styles.bottomView}>
          <TouchableOpacity onPress={() => setInternalVal('')}>
            <View style={styles.btnChangeNumber}>
              <Text style={styles.textChange}>Change number</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onpress={onResendOTP}>
            <View style={styles.btnResend}>
              <Text style={[styles.textResend, {color: enableResend ? '#234db7' : 'grey'}]}>Resend OTP ({countdown})</Text>
            </View>
          </TouchableOpacity>
        </View>

      </KeyboardAvoidingView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },

  containerAvoiding: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },

  textTitle: {
    marginTop: 50,
    marginBottom: 50,
    fontSize: 16
  },

  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  cellView: {
    paddingVertical: 11,
    width: 40,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1.5,
    borderBottomColor: 'red',
  },

  cellText: {
    textAlign: 'center',
    fontSize: 16
  },

  bottomView: {
    flexDirection: 'row',
    flex: 1,
    // justifyContent: 'flex -end',
    marginBottom: 50,
    alignItems: 'flex-end'
  },

  btnChangeNumber: {
    width: 150,
    height: 50,
    borderRadius: 10,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },

  textChange: {
    color: '#234db7',
    alignItems: 'center',
    fontSize: 15,
  },

  btnResend: {
    width: 150,
    height: 59,
    borderRadius: 10,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },

  textResend: {
    alignItems: 'center',
    fontSize: 15
  }
});

export default OTPScrenn;