import React from 'react';
import {NativeBaseProvider, Box} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import NavigationComponent from './src/Navigation/Navigation';

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <NavigationComponent />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
