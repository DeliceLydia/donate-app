import React from "react";
import Started from "./GetStarted";
import Welcome from "./Welcome";
import Login from './Login';
import Register from './Register';
import Congz from './Congratulation';
import ComingToAnEnd from "./ComingToEnd";
import Icon from "react-native-vector-icons/FontAwesome";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export const StackNav = () => {
  return (
    <Stack.Navigator initialRouteName="login">
      <Stack.Screen name="start" component={Started} options={{ headerShown: false }}/>
      <Stack.Screen name="welcome" component={Welcome} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="register" component={Register} />
      <Stack.Screen name="congratulation" component={Congz} />
      <Stack.Screen name="Dashboard" component={ComingToAnEnd} options={{
          headerLeft: () => (
            <Icon
              name="arrow-left"
              size={20}
              color="#15b257"
              style={{ marginLeft: 10, marginRight: 10 }}
            />
          ),
        }}
        />
    </Stack.Navigator>
  );
};
