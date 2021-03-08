import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import auth from '@react-native-firebase/auth';

const OTPScrenn = ({
  route: {
    params: {phoneNumber},
  },
}) => {
  let textInput = useRef(null);
  const lengthInput = 6;

  const [internalVal, setInternalVal] = useState('');
  const [confirm, setConfirm] = useState(null);

  useEffect(() => {
    textInput.focus();
    signInWithPhoneNumber(phoneNumber);
  }, [phoneNumber]);

  useEffect(() => {
    
  }, [])

  const signInWithPhoneNumber = async (phoneNumber) => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
    } catch (error) {
      console.log(error);
    }
  };

  const onResendOTP = async () => {
    try {
      console.log('===>>>', confirm);
      await confirm.confirm(internalVal);
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeNumber = () => {
    setInternalVal(null);
  };

  const onChangeText = (text) => {
    setInternalVal(text);
    if (text.length === lengthInput) {
      onResendOTP();
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={50}
        behavior={'padding'}
        style={styles.containerAvoiding}>
        <Text style={styles.textTitle}>Введите код:</Text>

        <View>
          <TextInput
            ref={(input) => (textInput = input)}
            onChangeText={onChangeText}
            style={{width: 0, height: 0}}
            value={internalVal}
            maxLength={lengthInput}
            returnKeyType="done"
            keyboardType="numeric"
          />
        </View>

        <View style={styles.containerInput}>
          {Array(lengthInput)
            .fill()
            .map((data, idx) => (
              <View key={idx} style={styles.cellView}>
                <Text style={styles.cellText} onPress={() => textInput.focus()}>
                  {internalVal && internalVal.length > 0
                    ? internalVal[idx]
                    : ''}
                </Text>
              </View>
            ))}
        </View>

        <View style={styles.bottomView}>
          <TouchableOpacity onPress={onChangeNumber}>
            <View style={styles.btnChangeNumber}>
              <Text style={styles.textChange}>Change number</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={onResendOTP}>
            <View style={styles.btnResend}>
              <Text style={styles.textResend}>Resend OTP</Text>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  containerAvoiding: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },

  textTitle: {
    marginTop: 50,
    marginBottom: 50,
    fontSize: 16,
  },

  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
    fontSize: 16,
  },

  bottomView: {
    flexDirection: 'row',
    flex: 1,
    marginBottom: 50,
    alignItems: 'flex-end',
  },

  btnChangeNumber: {
    width: 150,
    height: 50,
    borderRadius: 10,
    alignItems: 'flex-start',
    justifyContent: 'center',
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
    justifyContent: 'center',
  },

  textResend: {
    color: '#234db7',
    alignItems: 'center',
    fontSize: 15,
  },
});

export default OTPScrenn;
