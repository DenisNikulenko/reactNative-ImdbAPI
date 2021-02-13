import React from 'react';
import {StyleSheet, Text} from 'react-native';

//Navigation
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

//Redux
import {Provider} from 'react-redux';
import {store, appPersist} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';

//Icons
import Ionicons from 'react-native-vector-icons/Ionicons';

//Screens
import HomeScreen from './src/screens/HomeScreen';
import BookmarksScreen from './src/screens/BookmarksScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={appPersist}>
        <NavigationContainer>
          <Text>Hello</Text>
          <Tab.Navigator
            screenOptions={({route}) => ({
              tabBarIcon: ({focused, color, size}) => {
                let iconName;

                if (route.name === 'Home') {
                  iconName = focused ? 'home' : 'home-outline';
                } else if (route.name === 'Bookmarks') {
                  iconName = focused ? 'star' : 'star-outline';
                }

                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: 'red',
              inactiveTintColor: 'gray',
            }}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen
              name="Bookmarks"
              component={BookmarksScreen}
              options={{tabBarBadge: 3}}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
