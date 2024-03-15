import { StatusBar } from "expo-status-bar";
import { StackNav } from "./components/Navigation";
import { NavigationContainer } from "@react-navigation/native";
import ResetPW from "./components/ResetPW";
import CountryDropdown from "./components/countryPicker";

export default function App() {
  return (
    <NavigationContainer>
      <StackNav />
      <StatusBar style="auto" />
    </NavigationContainer>
    // <FirstScree/>
    // <CountryDropdown/>
    // <ResetPW/>

  );
}
