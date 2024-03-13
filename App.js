import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Started from './components/GetStarted';
import Welcome from './components/Welcome';
import Congz from './components/Congratulation';
import { StackNav } from './components/Navigation';
import { NavigationContainer } from "@react-navigation/native";



export default function App() {
  return (
    <View >
      {/* <NavigationContainer>
        <StackNav />
      </NavigationContainer> */}


      <Started/>
      {/* <Welcome/> */}
      {/* <Congz/> */}

      <StatusBar style="auto" />

    </View>
  );
}


