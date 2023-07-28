import React from 'react';
import { NavigationContainer } from '@react-navigation/native'

import Dev from '@routes/Dev';
import StacksApp from '@routes/StacksApp';

const App = () => {
  return (
    <NavigationContainer>
      <Dev/>
    </NavigationContainer>
  );
}


export default App;
