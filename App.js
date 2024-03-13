import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Started from './components/GetStarted';
import Welcome from './components/Welcome';
import SignUp from './components/Register';
import Congz from './components/Congratulation';

export default function App() {
  return (
    <View >

      {/* <Started/> */}
      {/* <Welcome/> */}
      <Congz/>

      <StatusBar style="auto" />

    </View>
  );
}


