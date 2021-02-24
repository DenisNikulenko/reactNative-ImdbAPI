import React, {useState, useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';

import { useSelector, useDispatch } from 'react-redux';
import {setUserData} from '../redux/actions/authActions';

import auth from '@react-native-firebase/auth';

import MovieTabs from './MovieTabs';
import AuthStack from './AuthStack';

const Routes = () => {
  const user = useSelector(({userReducer}) => userReducer.currentUser);
  const dispatch = useDispatch();

  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = (user) => {
    dispatch(setUserData(user));
    if (initializing) setInitializing(false);
  }
  
  useEffect(() =>{
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; 
  }, [user])

  if (initializing) return null;

  return (
    <NavigationContainer>
      {user ? <MovieTabs /> : <AuthStack />}
      {/* <MovieTabs />  */}
      {/* <AuthStack /> */}
    </NavigationContainer>
  )
}

export default Routes
