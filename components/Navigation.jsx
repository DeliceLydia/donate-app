import 'react-native-gesture-handler';
import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Started from './GetStarted';
import Welcome from './Welcome';



const Stack = createNativeStackNavigator();

export const StackNav = () => {
    return (
        <Stack.Navigator  initialRouteName='GetStarted'>
            
            <Stack.Screen name="started" component={Started} />
            <Stack.Screen name="welcome" component={Welcome} />

        </Stack.Navigator>
    );
}
