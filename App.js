import { StatusBar } from 'expo-status-bar';
import { 
  SafeAreaView, 
  StyleSheet, 
  Text, 
  View 
} from 'react-native';
import CallingScreen from './screens/callingScreen/CallingScreen.js';
import Index from './screens/contactScreen/Index.js';

export default function App() {

  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />
        {/* <Index></Index> */}
        <CallingScreen></CallingScreen>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});
