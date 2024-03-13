import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Started from './components/GetStarted';
import Login from './components/Login';
import Register from './components/Register';
import Welcome from './components/Welcome';

export default function App() {
  return (
    <View >

      <Started/>
      {/* <Welcome/> */}
      {/* <Register /> */}
      {/* <Login /> */}
      <StatusBar style="auto" />

    </View>
  );
}


