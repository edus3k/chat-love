import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Signin from '@views/Signin';
//import Recover from '@views/Recover';
//import Create from '@views/Create';
//import CreateViwe2 from '@views/Create/CreateView2';
//import Home from '@views/Home';

const Stack = createNativeStackNavigator();

const Dev = () =>{
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
                name='Signin'
                component={Signin}
            />
        </Stack.Navigator>
    )
};

export default Dev;