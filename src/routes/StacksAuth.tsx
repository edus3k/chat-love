import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Signin from '@views/Signin';
import Recover from '@views/Recover';
import Create from '@views/Create';
import UsersData from '@views/Create/UsersData';
import UsersPhoto from '@views/Create/UsersPhoto';
import Profiler from '@views/Profiler';

const Stack = createNativeStackNavigator();

declare global {
    namespace ReactNavigation {
        interface RootParamList{
            Signin: undefined;
            Recover: undefined;
            Create: undefined;
            UsersData: {name: string, orientation: string};
            CreateViwe3: {name: string, orientation: string, age: number, email: string, password: string};
            Home: undefined;
        }
    }
}


const StacksAuth = () =>{
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
                name='Signin'
                component={Signin}
            />
            <Stack.Screen
                name='Recover'
                component={Recover}
            />
            <Stack.Screen
                name='Create'
                component={Create}
            />
            <Stack.Screen
                name='UsersData'
                component={UsersData}
            />
            <Stack.Screen
                name='UsersPhoto'
                component={UsersPhoto}
            />
            <Stack.Screen
                name='Profiler'
                component={Profiler}
            />
        </Stack.Navigator>
    )
};

export default StacksAuth;