import React from "react";
import Welcome from "./Welcome";
import Login from './Login';
import Register from './Register';
import Congz from './Congratulation';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ForgetPW from "./ForgetPW";
import ResetPW from "./ResetPW";
import Verify from "./Verify";
import Fundraising from "./Fundraising";
import Profile from "./Profile";
import Started from "./GetStarted";

const Stack = createNativeStackNavigator();

export const StackNav = () => {
  return (
    <Stack.Navigator initialRouteName="start">
      <Stack.Screen name="start" component={Started} options={{ headerShown: false }}/>
      <Stack.Screen name="welcome" component={Welcome} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="register" component={Register} />
      <Stack.Screen name="congratulation" component={Congz} />
      <Stack.Screen name="forget" component={ForgetPW} />
      <Stack.Screen name="profile" component={Profile} />
      <Stack.Screen name="Verify Password" component={ResetPW} />
      <Stack.Screen name="Forgot Password" component={Verify} />
      <Stack.Screen name="fundraising" component={Fundraising} />
    </Stack.Navigator>
  );
};
