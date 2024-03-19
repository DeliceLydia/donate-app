import { StatusBar } from "expo-status-bar";
import { AppRegistry } from 'react-native';
import { StackNav } from "./components/Navigation";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "./context/AuthContext"
import ForgetPW from "./components/ForgetPW";
import ResetPW from "./components/ResetPW";
import Fundraising from "./components/Fundraising";
import Search from "./components/Search";
import { Card } from "./components/SearchCard";
import Started from "./components/GetStarted";
import Welcome from "./components/Welcome";



export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <StackNav />
        <StatusBar style="auto" />
      </NavigationContainer>
   </ThemeProvider>
  );
}
