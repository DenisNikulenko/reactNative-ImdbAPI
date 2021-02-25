import auth from '@react-native-firebase/auth';

export const login = async (email, password) => {
  try {
    await auth().signInWithEmailAndPassword(email, password);
  } catch (error) {
    console.log(error);
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
