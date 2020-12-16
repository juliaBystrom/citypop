/**
 * Empty app
 * 
 *
 */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {AppNavigator} from './src/routes/homeStack';



export default function App() {
  return (
    <>
      <AppNavigator/>
    </>
  );
};
