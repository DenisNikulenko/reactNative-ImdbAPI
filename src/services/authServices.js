import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-community/google-signin';

export const login = async (email, password) => {
  try {
    await auth().signInWithEmailAndPassword(email, password);
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }
    if (error.code === 'auth/invalid-email') {
      alert('Неправильный формат поля email')
      console.log('That email address is invalid!');
    }
    if(error) {
      console.log(`${error}:${error.code}`);
    } 
    // alert(error);
  }
};

export const googleLogin = async () => {
  try {
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
    alert(error);
    console.log(`${error}:${error.code}`);
  }
};

export const logaut = async () => {
  try {
    await auth().signOut();
    await GoogleSignin.revokeAccess();
  } catch (error) {
    if(!error.code === 4) {
      console.log(`${error}:${error.code}`);
    }
  }
};
