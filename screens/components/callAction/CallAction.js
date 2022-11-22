import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CallAction = () => {
    return (
        <View style={styles.buttonContainer}>
            <View style={styles.iconContainer}>
                <Feather name="camera" size={24} color="white" />
            </View>
            <View style={styles.iconContainer}>
                <Feather name="video" size={24} color="white" />
                {/* <Feather name="video-off" size={24} color="black" /> */}
            </View>
            <View style={styles.iconContainer}>
                <MaterialCommunityIcons name="microphone-off" size={24} color="white" />
            </View>
            <View style={styles.iconContainer}>
                <SimpleLineIcons name="call-end" size={24} color="white" />
            </View>
        </View>
    )
}

export default CallAction

const styles = StyleSheet.create({
    buttonContainer: {
        // backgroundColor: 'black',
        // width: '100%',
        padding: 35,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        marginTop: 'auto',
        marginBottom: 40,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    iconContainer: {
        backgroundColor: '#535c68',
        padding: 8,
        width: 45,
        height: 45,
        borderRadius: 22,
        alignItems: 'center',
        justifyContent: 'center'
    },
})