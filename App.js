import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Started from './components/GetStarted';
import Welcome from './components/Welcome';

export default function App() {
  return (
    <View >

      <Started/>
      {/* <Welcome/> */}

      <StatusBar style="auto" />

    </View>
  );
}


