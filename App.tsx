import React from 'react';
import { StatusBar } from 'react-native';

import {NavigationContainer} from '@react-navigation/native'
import Routes from '@routes/Stacks';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#FE0364'} barStyle={'default'}/>
      <Routes/>
    </NavigationContainer>
  );
}


export default App;
