import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Started from './components/GetStarted';
import Welcome from './components/Welcome';
import SignUp from './components/Register';

export default function App() {
  return (
    <View >

      {/* <Started/> */}
      {/* <Welcome/> */}
      <SignUp/>

      <StatusBar style="auto" />

    </View>
  );
}


