import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '@views/Welcome';
import Signin from '@views/Signin';
//import RecoverUsers from '@views/RecoverUsers';
//import CreateUsers from '@views/CreateUsers';
import Profiler from '@views/Profiler';

const Stack = createNativeStackNavigator();


const StacksAuth = () =>{
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
                name='Welcome'
                component={Welcome}
            />
            <Stack.Screen
                name='Signin'
                component={Signin}
            />
           <Stack.Screen
                name='Profiler'
                component={Profiler}
            />
        </Stack.Navigator>
    )
};

export default StacksAuth;