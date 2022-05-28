
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import FormScreen from './Screen/FormScreen';
import ProfileScreen from './Screen/ProfileScreen';
import SettingScreen from './Screen/SettingScreen';
import FavoriteScreen from './Screen/FavoriteScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const App = () => {


  return (
      
     <NavigationContainer>
     <Tab.Navigator>
       <Tab.Screen name="Profile" component={ProfileScreen} />
       <Tab.Screen name="Form" component={FormScreen} />
       <Tab.Screen name="Favorite" component={FavoriteScreen} />
       <Tab.Screen name="Settings" component={SettingScreen} />
     </Tab.Navigator>
   </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
