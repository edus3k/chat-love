import {NativeStackNavigationProp, createNativeStackNavigator} from '@react-navigation/native-stack'

import Welcome from '@views/Welcome';
import Signin from '@views/Signin';
import RecoverUsers from '@views/RecoverUsers';
import CreateUsers from '@views/CreateUsers';
import Home from '@views/Home';;

const Stack = createNativeStackNavigator();

type StackNavigation = {
    Welcome: undefined,
    Signin: undefined,
    RecoverUsers: undefined,
    CreateUsers: undefined,
    Home: undefined
}

export type StackTypes = NativeStackNavigationProp<StackNavigation>

const Stacks = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='RecoverUsers'
                component={RecoverUsers}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name='Welcome'
                component={Welcome}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name='Signin'
                component={Signin}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name='CreateUsers'
                component={CreateUsers}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name='Home'
                component={Home}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
};

export default Stacks;