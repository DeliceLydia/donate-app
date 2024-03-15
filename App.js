import { StatusBar } from "expo-status-bar";
import { StackNav } from "./components/Navigation";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "./context/AuthContext"

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
