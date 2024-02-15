import { NavigationContainer } from '@react-navigation/native';

import StacksApp from '@routes/StacksApp';
import Dev from '@routes/Dev';

const App = ()=>{
  return (
    <NavigationContainer>
      <StacksApp/>
    </NavigationContainer>
  );
}

export default App

