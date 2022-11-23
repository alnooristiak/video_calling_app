import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from '../contactScreen/Index';


const Navigator = () => {

    const Stack = createNativeStackNavigator();

    return (
        <>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Contacts" component={Index} options={{headerShown: false}} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

export default Navigator

const styles = StyleSheet.create({})