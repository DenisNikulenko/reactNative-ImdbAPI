import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-community/google-signin';

export const login = async (email, password) => {
  try {
    await auth().signInWithEmailAndPassword(email, password);
  } catch (error) {
    console.log(error);
  }
};

export const googleLogin = async () => {
  try {
    console.log('1 этап')
    const {idToken} = await GoogleSignin.signIn();

    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    await auth().signInWithCredential(googleCredential);
  } catch (error) {
    console.log(`${error}:${error.code}`);
  }
};

export const register = async (email, password) => {
  try {
    await auth().createUserWithEmailAndPassword(email, password);
  } catch (error) {
    console.log(error);
  }
};

export const logaut = async () => {
  try {
    auth().signOut();
  } catch (error) {
    console.log(error);
  }
};
