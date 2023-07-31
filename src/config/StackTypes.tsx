import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type StackNavigation = {
    StacksApp: undefined,
    Loading: undefined,
    Welcome: undefined,
    Signin: undefined,
    RecoverUsers: undefined,
    CreateUsers: undefined,
    Home: undefined
    Profiler: undefined,
    TabsBottom: undefined,
    DataUsers: undefined,
    DataAge: undefined | {name: string},
    DataDetail: undefined,
    DataInfor: undefined,
}

export type StackTypes = NativeStackNavigationProp<StackNavigation>