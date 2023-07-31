import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, AntDesign } from '@expo/vector-icons';

import Signin from '@views/Signin';
//import Deve from '@views/CreateUsers/DataUsers';
import Deve from '@views/CreateUsers/DataUsers';

const Stack = createNativeStackNavigator();
//const Tabs = createBottomTabNavigator();

const Dev = () =>{

    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
           
            <Stack.Screen
                name='Deve'
                component={Deve}
            />
        </Stack.Navigator>
    )
};

export default Dev;