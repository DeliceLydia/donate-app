import React from "react";
import Started from "./GetStarted";
import Welcome from "./Welcome";
import Login from './Login';
import Register from './Register';
import Congz from './Congratulation';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ForgetPW from "./ForgetPW";

const Stack = createNativeStackNavigator();

export const StackNav = () => {
  return (
    <Stack.Navigator initialRouteName="start">
      <Stack.Screen name="start" component={Started} options={{ headerShown: false }}/>
      <Stack.Screen name="welcome" component={Welcome} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="register" component={Register} />
      <Stack.Screen name="congratulation" component={Congz} />
    </Stack.Navigator>
  );
};
