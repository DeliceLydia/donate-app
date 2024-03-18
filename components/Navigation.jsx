import React from "react";
import Started from "./GetStarted";
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
import { Icon } from "react-native-paper";
import Donate from "./Donate"
import { View } from "react-native";

const Stack = createNativeStackNavigator();

export const StackNav = () => {
  return (
    <Stack.Navigator initialRouteName="Create New Fundraising">
      <Stack.Screen name="start" component={Started} options={{ headerShown: false }}/>
      <Stack.Screen name="welcome" component={Welcome} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="register" component={Register} />
      <Stack.Screen name="congratulation" component={Congz} />
      <Stack.Screen name="forget" component={ForgetPW} />
      <Stack.Screen name="profile" component={Profile} />
      <Stack.Screen name="reset" component={ResetPW} />
      <Stack.Screen name="verify" component={Verify} />
      <Stack.Screen name="Create New Fundraising" component={Fundraising} options={{headerBackTitle: "jjjj",headerBackTitleStyle: {fontSize: 20,marginLeft:20},headerBackVisible: true, headerLeft: ()=> <View style={{paddingRight:20}}><Icon source='arrow-left' size={20} color="#25c067"/></View>}}/>
      <Stack.Screen name="Donate" component={Donate} options={{headerBackTitle: "jjjj",headerBackTitleStyle: {fontSize: 20,marginLeft:20,backgroundColor:'whitesmokes'},headerBackVisible: true, headerLeft: ()=> <View style={{paddingRight:20}}><Icon source='arrow-left' size={20} color="#25c067"/></View>}}/>
    </Stack.Navigator>
  );
};
