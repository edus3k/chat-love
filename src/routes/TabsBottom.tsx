import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, AntDesign } from '@expo/vector-icons';

import Home from '@views/Home';
import Profiler from '@views/Profiler';

const Tabs = createBottomTabNavigator();

const TabsBottom = () =>{
    return(
        <Tabs.Navigator 
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true
            }}>
                
            <Tabs.Screen
                name='Profiler'
                component={Profiler}
                options={{
                    tabBarIcon: ({ size, color })=><Feather 
                        name='user'
                        size={size}
                        color={color}
                    />
                }}
            />

            <Tabs.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: ({ size, color })=><Feather 
                        name='home'
                        size={size}
                        color={color}
                    />
                }}
            />
        </Tabs.Navigator>
    )
};

export default TabsBottom;