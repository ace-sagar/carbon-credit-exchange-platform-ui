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
import RootNavigation from './src/navigators/rootnavigation';



const App = () => {
  return (
    <RootNavigation/>
  );
};

export default App;
