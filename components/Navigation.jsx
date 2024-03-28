import React from "react";
import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
// import { Icon } from "react-native-paper";
import { Icon } from "react-native-elements";
import Donate from "./Donate";
import ComingToAnEnd from "./ComingToEnd";
import UrgentFundraising from "./Urgent";
import Search from "./Search";
import DonationTypes from "./DonationTypes";

const Stack = createNativeStackNavigator();
const Bottom = createBottomTabNavigator();

export const StackNav = () => {
  return (
    <Stack.Navigator initialRouteName="start">
      <Stack.Screen
        name="start"
        component={Started}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="welcome" component={Welcome}/>
      <Stack.Screen name="Login" component={Login} options={{ headerBackTitleStyle: { fontSize: 20, marginLeft: 20, backgroundColor: 'whitesmokes' }, headerBackVisible: true, headerLeft: () => <View style={{ paddingRight: 20 }}><Icon source='arrow-left' size={20} color="#25c067" /></View> }} />
      <Stack.Screen name="Register" component={Register} options={{ headerBackTitleStyle: { fontSize: 20, marginLeft: 20, backgroundColor: 'whitesmokes' }, headerBackVisible: true, headerLeft: () => <View style={{ paddingRight: 20 }}><Icon source='arrow-left' size={20} color="#25c067" /></View> }} />
      <Stack.Screen name="congratulation" component={Congz} />
      <Stack.Screen name="profile" component={Profile}/>
      <Stack.Screen name="Verify Password" component={Verify} options={{ headerBackTitleStyle: { fontSize: 20, marginLeft: 20, backgroundColor: 'whitesmokes' }, headerBackVisible: true, headerLeft: () => <View style={{ paddingRight: 20 }}><Icon source='arrow-left' size={20} color="#25c067" /></View> }} />
      <Stack.Screen name="fundraising" component={Fundraising}/>
      <Stack.Screen name="Reset Password" component={ResetPW} options={{  headerBackTitleStyle: { fontSize: 20, marginLeft: 20, backgroundColor: 'whitesmokes' }, headerBackVisible: true, headerLeft: () => <View style={{ paddingRight: 20 }}><Icon source='arrow-left' size={20} color="#25c067" /></View> }} />
      <Stack.Screen name="Forgot Password" component={ForgetPW} options={{ headerBackTitleStyle: { fontSize: 20, marginLeft: 20, backgroundColor: 'whitesmokes' }, headerBackVisible: true, headerLeft: () => <View style={{ paddingRight: 20 }}><Icon source='arrow-left' size={20} color="#25c067" /></View> }} />
      <Stack.Screen name="Coming to an End" component={ComingToAnEnd}/>
      <Stack.Screen name="Urgent Fundraising" component={BottomNav} options={{ headerShown: false }}/>
      <Stack.Screen name="Select your country" component={BottomNav} options={{  headerBackTitleStyle: { fontSize: 20, marginLeft: 20, backgroundColor: 'whitesmokes' }, headerBackVisible: true, headerLeft: () => <View style={{ paddingRight: 20 }}><Icon source='arrow-left' size={20} color="#25c067" /></View> }} />
      <Stack.Screen name="Create New Fundraising" component={Fundraising} options={{ headerBackTitleStyle: { fontSize: 20, marginLeft: 20, backgroundColor: 'whitesmokes' }, headerBackVisible: true, headerLeft: () => <View style={{ paddingRight: 20 }}><Icon source='arrow-left' size={20} color="#25c067" /></View> }}/>
      <Stack.Screen name="Donate" component={BottomNav} options={{  headerBackTitleStyle: { fontSize: 20, marginLeft: 20, backgroundColor: 'whitesmokes' }, headerBackVisible: true, headerLeft: () => <View style={{ paddingRight: 20 }}><Icon source='arrow-left' size={20} color="#25c067" /></View> }}/>
    </Stack.Navigator>
  );
};

export const BottomNav = () => {
  return (
<Bottom.Navigator 
  screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {{
      activeBackgroundColor = "#25c067",
      style = { background:"white"

    }}
      let iconName;""
      if (route.name === "home") {
        iconName = focused ? "home" : "home-outline";
      } else if (route.name === "donate") {
        iconName = focused ? "calendar" : "calendar";
      } else if (route.name === "fundraising") {
        iconName = focused ? "menu" : "menu";
      } else if (route.name === "search") {
        iconName = focused ? "magnify" : "magnify";
      } else if (route.name === "profile") {
        iconName = focused ? "account" : "account-outline";
      }
      return <Icon name={iconName} size={30} color={color} type="material-community"/>;
    },
    tabBarActiveTintColor: '',
    tabBarInactiveTintColor: '#25c067',
    tabBarShowLabel: false,
    tabBarShowIcon: true,
    tabBarStyle: {
      backgroundColor: 'white',
      borderTopWidth: 1,
      borderTopColor: '#25c067',
    }
  })}
>
<Bottom.Screen name="home" component={UrgentFundraising} options={{headerShown:false}}/>
<Bottom.Screen name="donate" component={Donate} options={{headerShown:false}}/>
<Bottom.Screen name="fundraising" component={Fundraising} options={{headerShown:false}}/>
<Bottom.Screen name="search" component={Search} options={{headerShown:false}}/>
<Bottom.Screen name="profile" component={Profile} options={{headerShown:false}}/>
</Bottom.Navigator>
    
  )
}
