import { NavigationContainer } from '@react-navigation/native';

import StacksApp from '@routes/StacksApp';
import Dev from '@routes/Dev';

const App = ()=>{
  return (
    <NavigationContainer>
      <Dev/>
    </NavigationContainer>
  );
}

export default App

