import React, {useEffect, useState} from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import BookmarksScreen from '../screens/BookmarksScreen';
import SearchScreen from '../screens/SearchScreen';
import DetailsScreen from '../screens/DetailsScreen';
import ActorScreen from '../screens/ActorScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../utilities/colors';
import MovieIndicator from '../components/ui/MovieIndicator';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {backgroundColor: COLORS.MAIN_COLOR, height: 35},
      }}>
      <Stack.Screen
        name="Home"
        options={{title: 'Популярные фильмы'}}
        component={HomeScreen}
      />
      <Stack.Screen
        name="Details"
        options={{title: 'Детали фильма'}}
        component={DetailsScreen}
      />
      <Stack.Screen
        name="Actor"
        options={{title: 'Детали актера'}}
        component={ActorScreen}
      />
    </Stack.Navigator>
  );
};

const SearchStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {backgroundColor: COLORS.MAIN_COLOR, height: 35},
      }}>
      <Stack.Screen
        name="Search"
        options={{title: 'Поиск по названию'}}
        component={SearchScreen}
      />
      <Stack.Screen
        name="Details"
        options={{title: 'Детали фильма'}}
        component={DetailsScreen}
      />
      <Stack.Screen
        name="Actor"
        options={{title: 'Детали актера'}}
        component={ActorScreen}
      />
    </Stack.Navigator>
  );
};

const BookmarksStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {backgroundColor: COLORS.MAIN_COLOR, height: 35},
      }}>
      <Stack.Screen
        name="Bookmarks"
        options={{title: 'Закладки'}}
        component={BookmarksScreen}
      />
      <Stack.Screen
        name="Details"
        options={{title: 'Детали фильма'}}
        component={DetailsScreen}
      />
      <Stack.Screen
        name="Actor"
        options={{title: 'Детали актера'}}
        component={ActorScreen}
      />
    </Stack.Navigator>
  );
};

const screenOption = (route) => ({
  tabBarIcon: ({color, size}) => {
    let iconName;
    const {name} = route;

    name === 'Home' ? (iconName = 'home') : null;
    name === 'Search' ? (iconName = 'search') : null;
    name === 'Bookmarks' ? (iconName = 'bookmarks') : null;

    return <Ionicons name={iconName} size={size} color={color} />;
  },
});

const tabBarOptions = {
  activeTintColor: COLORS.MAIN_COLOR,
  inactiveTintColor: COLORS.GREY,
};

const MovieTabs = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(async () => {
      setIsLoading(false);
    }, 800);
  }, [isLoading]);

  if(isLoading) {
    return <MovieIndicator />
  } else {
    return (
      <Tab.Navigator
        screenOptions={({route}) => screenOption(route)}
        tabBarOptions={tabBarOptions}>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Search" component={SearchStack} />
        <Tab.Screen name="Bookmarks" component={BookmarksStack} />
      </Tab.Navigator>
    );
  }
};

export default MovieTabs;
