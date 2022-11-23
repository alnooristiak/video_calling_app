import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CallAction = () => {

    const [isCemeraOn, setIsCemeraOn] = useState(true);
    const [isVideoOn, setIsVideoOn] = useState(true);
    const [isMicroPon, setIsMicroPon] = useState(true);
    const [isPhoneOn, setIsPhoneOn] = useState(true);

    // on cemera hendeler 
    const onOpenCemera = () => {
        // console.warn("onOpenCemera");
        setIsCemeraOn(!isCemeraOn);
    }

    // on Video cemera hendeler 
    const onOpenVideo = () => {
        // console.warn("onOpenVideo");
        setIsVideoOn(!isVideoOn);
    }

    // on MicroPhone hendeler 
    const onOpenMicroPhone = () => {
        setIsMicroPon(!isMicroPon);
    }

    // on Phone Call hendeler 
    const onPhoneClose = () => {
        setIsPhoneOn(!isPhoneOn);
    }

    return (
        <View style={styles.buttonContainer}>
            <Pressable
            onPress={onOpenCemera}
            style={styles.iconContainer}>
                <Feather name={isCemeraOn ? "camera-off" : "camera"} size={24} color="white" />
            </Pressable>
            <Pressable
            onPress={onOpenVideo}
            style={styles.iconContainer}>
                <Feather name={isVideoOn ? "video-off" : "video"} size={24} color="white" />
                {/* <Feather name="video-off" size={24} color="black" /> */}
            </Pressable>
            <Pressable 
            onPress={onOpenMicroPhone}
            style={styles.iconContainer}>
                <MaterialCommunityIcons 
                name={isMicroPon ? "microphone-off" : "microphone"} size={24} color="white" />
            </Pressable>
            <Pressable 
            onPress={onPhoneClose}
            style={styles.iconContainer}>
                <SimpleLineIcons name={isPhoneOn ? "phone-off" : "call-end"} size={24} color="white" />
            </Pressable>
        </View>
    )
}

export default CallAction;

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: 'black',
        width: '100%',
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