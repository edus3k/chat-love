import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Deve from '@views/Signin';

const Stack = createNativeStackNavigator();

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