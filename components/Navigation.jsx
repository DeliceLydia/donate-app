import React from "react";
import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./Welcome";
import Login from "./Login";
import Register from "./Register";
import Congz from "./Congratulation";
import ForgetPW from "./ForgetPW";
import ResetPW from "./ResetPW";
import Verify from "./Verify";
import Fundraising from "./Fundraising";
import Profile from "./Profile";
import Started from "./GetStarted";
import { Icon } from "react-native-paper";
import Donate from "./Donate";
import ComingToAnEnd from "./ComingToEnd";
import UrgentFundraising from "./Urgent";
import Search from "./Search";

const Stack = createNativeStackNavigator();

export const StackNav = () => {
  return (
    <Stack.Navigator initialRouteName="Create New Fundraising">
   
      <Stack.Screen
        name="start"
        component={Started}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} options={{headerBackTitle: "jjjj",headerBackTitleStyle: {fontSize: 20,marginLeft:20,backgroundColor:'whitesmokes'},headerBackVisible: true, headerLeft: ()=> <View style={{paddingRight:20}}><Icon source='arrow-left' size={20} color="#25c067"/></View>}}/>
      <Stack.Screen name="Register" component={Register} options={{headerBackTitle: "jjjj",headerBackTitleStyle: {fontSize: 20,marginLeft:20,backgroundColor:'whitesmokes'},headerBackVisible: true, headerLeft: ()=> <View style={{paddingRight:20}}><Icon source='arrow-left' size={20} color="#25c067"/></View>}}/>
      <Stack.Screen name="congratulation" component={Congz} />
      <Stack.Screen name="profile" component={Profile} />
      <Stack.Screen name="Verify Password" component={Verify} options={{headerBackTitle: "jjjj",headerBackTitleStyle: {fontSize: 20,marginLeft:20,backgroundColor:'whitesmokes'},headerBackVisible: true, headerLeft: ()=> <View style={{paddingRight:20}}><Icon source='arrow-left' size={20} color="#25c067"/></View>}}/>
      <Stack.Screen name="fundraising" component={Fundraising} />
      <Stack.Screen name="Reset Password" component={ResetPW} options={{headerBackTitle: "jjjj",headerBackTitleStyle: {fontSize: 20,marginLeft:20,backgroundColor:'whitesmokes'},headerBackVisible: true, headerLeft: ()=> <View style={{paddingRight:20}}><Icon source='arrow-left' size={20} color="#25c067"/></View>}} />
      <Stack.Screen name="Forgot Password" component={ForgetPW} options={{headerBackTitle: "jjjj",headerBackTitleStyle: {fontSize: 20,marginLeft:20,backgroundColor:'whitesmokes'},headerBackVisible: true, headerLeft: ()=> <View style={{paddingRight:20}}><Icon source='arrow-left' size={20} color="#25c067"/></View>}} />
      <Stack.Screen name="Coming to an End" component={ComingToAnEnd} />
      <Stack.Screen name="Urgent Fundraising" component={UrgentFundraising} options={{headerBackTitle: "jjjj",headerBackTitleStyle: {fontSize: 20,marginLeft:20,backgroundColor:'whitesmokes'},headerBackVisible: true, headerLeft: ()=> <View style={{paddingRight:20}}><Icon source='arrow-left' size={20} color="#25c067"/></View>}} />
      <Stack.Screen name="Select your country" component={Search} options={{headerBackTitle: "jjjj",headerBackTitleStyle: {fontSize: 20,marginLeft:20,backgroundColor:'whitesmokes'},headerBackVisible: true, headerLeft: ()=> <View style={{paddingRight:20}}><Icon source='arrow-left' size={20} color="#25c067"/></View>}}/>
      <Stack.Screen
        name="Create New Fundraising"
        component={Fundraising}
        options={{
          headerBackTitle: "jjjj",
          headerBackTitleStyle: { fontSize: 20, marginLeft: 20 },
          headerBackVisible: true,
          headerLeft: () => (
            <View style={{ paddingRight: 20 }}>
              <Icon source="arrow-left" size={20} color="#25c067" />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="Donate"
        component={Donate}
        options={{
          headerBackTitle: "jjjj",
          headerBackTitleStyle: {
            fontSize: 20,
            marginLeft: 20,
            backgroundColor: "whitesmokes",
          },
          headerBackVisible: true,
          headerLeft: () => (
            <View style={{ paddingRight: 20 }}>
              <Icon source="arrow-left" size={20} color="#25c067" />
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
};
