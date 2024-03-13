import React from "react";
import Started from './GetStarted';
import Welcome from './Welcome';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();

export const StackNav = () => {
    return (
        <Stack.Navigator  initialRouteName='GetStarted'>

            <Stack.Screen name="started" component={Started} />
            <Stack.Screen name="welcome" component={Welcome} />

        </Stack.Navigator>
    );
}
