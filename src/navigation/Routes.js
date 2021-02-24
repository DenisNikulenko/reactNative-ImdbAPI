import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import MovieTabs from './MovieTabs';
import AuthStack from './AuthStack';
import { useSelector } from 'react-redux';

const Routes = () => {
  const user = useSelector(({userReducer}) => userReducer.userData)
  console.log(user)
  return (
    <NavigationContainer>
      {user ?  <MovieTabs /> : <AuthStack />}
      {/* <MovieTabs />  */}
      {/* <AuthStack /> */}
    </NavigationContainer>
  )
}

export default Routes
