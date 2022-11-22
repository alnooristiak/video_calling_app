import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import bg from '../../assets/images/incoming_bg.png';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const IncomingCallSceen = () => {
  return (
    <View style={styles.incomingCallSceen}>
        <ImageBackground style={styles.bgImage} source={bg} resizeMode='cover'>
            <Text style={styles.name}>Future Wife</Text>
            <Text style={styles.contactNo}>+880 01813762855</Text>
            <View style={styles.iconTop}>
                <View style={styles.iconTextContainer}>
                    <Ionicons name="ios-stopwatch-outline" size={24} color="white" />
                    <Text style={{color: 'white',}}>Reminder Me</Text>
                </View>
                <View style={styles.iconTextContainer}>
                    <AntDesign name="mail" size={24} color="white" />
                    <Text style={{color: 'white',}}>Message</Text>
                </View>
            </View>
            <View style={styles.iconTmainContainer}>
                <View style={styles.iconTextBottom}>
                    <Entypo name="cross" size={24} color="white" />
                    <Text>Delete</Text>
                </View>
                <View style={styles.iconTextBottom}>
                    <FontAwesome5 name="check" size={24} color="white" />
                    <Text>Accept</Text>
                </View>
            </View>
        </ImageBackground>
    </View>
  )
}

export default IncomingCallSceen

const styles = StyleSheet.create({
    incomingCallSceen: {
        marginTop: 35,
        height: '100%'
    },
    bgImage: {
        width: '100%',
        height: '100%', 
        // flex: 1,
        // backgroundColor: 'red',
        alignItems: 'center',
    },
    name: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 50,
        color: 'black',
    },
    contactNo: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 10,
    },
    iconTop:{
        marginTop: '80%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    iconTmainContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 60,
    },
    iconTextBottom:{
        width: 60,
        padding: 5,
        height: 60,
        borderRadius: 30,
        backgroundColor: "green",
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconTextContainer:{
        justifyContent: 'center',
        alignItems: 'center',
    },
})