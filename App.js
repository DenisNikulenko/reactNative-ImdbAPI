import React from 'react';
//Navigation
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

//Redux
import {Provider} from 'react-redux';
import {store, appPersist} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';

//Styles
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from './src/utilities/colors';

//Screens
import HomeScreen from './src/screens/HomeScreen';
import BookmarksScreen from './src/screens/BookmarksScreen';
import SearchScreen from './src/screens/SearchScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import ActorScreen from './src/screens/ActorScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="Actor" component={ActorScreen} />

    </Stack.Navigator>
  );
};

const BookmarksStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Bookmarks" component={BookmarksScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="Actor" component={ActorScreen} />
    </Stack.Navigator>
  );
};

const SearchStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="Actor" component={ActorScreen} />
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

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={appPersist}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({route}) => screenOption(route)}
            tabBarOptions={tabBarOptions}>
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="Search" component={SearchStack} />
            <Tab.Screen name="Bookmarks" component={BookmarksStack} />
          </Tab.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
