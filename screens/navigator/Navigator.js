import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from '../contactScreen/Index';
import CallScreen from '../callScreen/CallScreen';
import CallingScreen from '../callingScreen/CallingScreen';
import IncomingCallSceen from '../IncomingCallSceen/IncomingCallSceen';


const Navigator = () => {

    const Stack = createNativeStackNavigator();

    return (
        <>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Contacts" component={Index} options={{headerShown: false}} />
                    {/* call screen */}
                    <Stack.Screen name="Call" component={CallScreen} options={{headerShown: false}} />
                    {/* calling screen */}
                    <Stack.Screen name="Contacts" component={CallingScreen} options={{headerShown: false}} />
                    {/* main incoming call screen */}
                    <Stack.Screen name="Contacts" component={IncomingCallSceen} options={{headerShown: false}} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

export default Navigator

const styles = StyleSheet.create({})