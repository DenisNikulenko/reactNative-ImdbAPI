import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';

import auth from '@react-native-firebase/auth';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import RNOtpVerify from 'react-native-otp-verify';

import {windowWidth} from '../utilities/dimensions';
import {COLORS} from '../utilities/colors';

//TESTING:
//PHONE: +44 7444 555666
//CODE: 123456

const OTPScrenn = ({
  route: {
    params: {phoneNumber},
  },
}) => {
  const [otp, setOtp] = useState('');
  const [confirm, setConfirm] = useState(null);

  let inputRef = useRef(null);

  useEffect(() => {
    getHash();
    startListeningForOtp();

    signInWithPhoneNumber(phoneNumber);

    return () => {
      RNOtpVerify.removeListener();
    };
  }, [inputRef]);

  const getHash = () => {
    RNOtpVerify.getHash().then(console.log).catch(console.log);
  };

  const startListeningForOtp = () => {
    RNOtpVerify.getOtp()
      .then((response) => {
        console.log(response);
        RNOtpVerify.addListener((message) => {
          try {
            if (message && message !== 'Timeout Error') {
              console.log(`message=> , ${message}`);
              const otp = /(\d{6})/g.exec(message)[0];
              if (otp.length === 6) {
                console.log(otp);
                setOtp(otp.split(''));
              }
            } else {
              console.log(
                'OTPVerification: RNOtpVerify.getOtp - message=>',
                message,
              );
            }
          } catch (error) {
            console.log('OTPVerification: RNOtpVerify.getOtp error=>', error);
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signInWithPhoneNumber = async (phoneNumber) => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
      if(phoneNumber === '+44 7444 555666') {
        setOtp('123456');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onSendOTP = async (otp) => {
    try {
      await confirm.confirm(otp);
    } catch (error) {
      console.log(`message: ${error}, code: ${error.code}`);
    }
  };

  const onChangeNumber = () => {
    setOtp('');
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={50}
        behavior={'padding'}
        style={styles.containerAvoiding}>
        <View style={styles.topView}>
          <Text style={styles.textTitle}>Введите код:</Text>
          <OTPInputView
            style={styles.otpInput}
            ref={inputRef}
            pinCount={6}
            code={otp}
            onCodeChanged={setOtp}
            autoFocusOnLoad={true}
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeFilled={onSendOTP}
          />
        </View>

        <View style={styles.bottomView}>
          <TouchableOpacity onPress={onChangeNumber}>
            <View style={styles.btnChangeNumber}>
              <Text style={styles.textBtn}>Изменить</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onSendOTP(otp)}>
            <View style={styles.btnResend}>
              <Text style={styles.textBtn}>Войти</Text>
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
  },

  topView: {
    flex: 1,
    alignItems: 'center',
  },

  textTitle: {
    marginTop: 50,
    fontSize: 30,
    color: COLORS.MAIN_COLOR,
  },

  otpInput: {
    height: 200,
    width: windowWidth - 60,
  },

  borderStyleBase: {
    width: 30,
    height: 45,
  },

  underlineStyleBase: {
    width: 40,
    height: 55,
    borderWidth: 0,
    borderBottomWidth: 1,
    color: COLORS.BLACK,
    fontSize: 24,
    borderBottomColor: 'red',
    backgroundColor: COLORS.WHITE,
    borderRadius: 5,
  },

  underlineStyleHighLighted: {
    borderBottomColor: COLORS.BLACK,
  },

  bottomView: {
    flex: 1,
    width: windowWidth - 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginLeft: 10,
    marginBottom: 50,
  },

  textBtn: {
    color: COLORS.LINK,
    fontSize: 18,
  },
});

export default OTPScrenn;