import { createNativeStackNavigator } from '@react-navigation/native-stack'

//import Signin from '@views/Signin';
//import Recover from '@views/Recover';
//import Create from '@views/Create';
//import UsersData from '@views/Create/UsersData';
import UsersPhoto from '@views/Create/UsersPhoto';

const Stack = createNativeStackNavigator();

declare global {
    namespace ReactNavigation {
        interface RootParamList{
            Signin: undefined;
            Recover: undefined;
            Create: undefined;
            UsersData: {name: string, orientation: string};
            UsersPhoto: {name: string, orientation: string, age: number, email: string, password: string};
            Home: undefined;
        }
    }
}

const Dev = () =>{
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
                name='Develop'
                component={UsersPhoto}
            />
        </Stack.Navigator>
    )
};

export default Dev;