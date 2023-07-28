import { createNativeStackNavigator } from '@react-navigation/native-stack'

import StacksApp from '@routes/StacksApp';
import TabsBottom from '@routes/TabsBottom';

const Stack = createNativeStackNavigator();


const StacksUsers = () =>{
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
                name='TabsBottom'
                component={TabsBottom}
            />
            <Stack.Screen
                name='StacksApp'
                component={StacksApp}
            />
        </Stack.Navigator>
    )
};

export default StacksUsers;