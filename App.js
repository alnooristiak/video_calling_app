import { StatusBar } from 'expo-status-bar';
import { 
  SafeAreaView, 
  ScrollView, 
  StyleSheet, 
  Text, 
  View 
} from 'react-native';
import Index from './screens/contactScreen/Index.js';

export default function App() {

  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />
      <ScrollView>
        <Index></Index>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});
