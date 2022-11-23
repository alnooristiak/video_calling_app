import { StatusBar } from 'expo-status-bar';
// import { 
//   SafeAreaView, 
//   StyleSheet, 
//   Text, 
//   View 
// } from 'react-native';
// import CallingScreen from './screens/callingScreen/CallingScreen.js';
// import CallScreen from './screens/callScreen/CallScreen.js';
import Navigator from './screens/navigator/Navigator.js';
// import Index from './screens/contactScreen/Index.js';
// import IncomingCallSceen from './screens/IncomingCallSceen/IncomingCallSceen.js';

export default function App() {

  return (
    <>
      <StatusBar barStyle={'dark-content'} />
        {/* <Index></Index> */}
        {/* <CallingScreen></CallingScreen> */}
        {/* <IncomingCallSceen></IncomingCallSceen> */}
        {/* <CallScreen></CallScreen> */}
        <Navigator />
    </>
  );
}

// const styles = StyleSheet.create({

// });
