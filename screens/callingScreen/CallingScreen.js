import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const CallingScreen = () => {
    return (
        <View style={styles.mainPagea}>
            <View style={styles.cameraPriview}>
                <Text style={styles.name}>Istak</Text>
                <Text style={styles.contactNo}>+880 1710335722</Text>
            </View>
            {/* button container section */}
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
        </View>

    )
}

export default CallingScreen

const styles = StyleSheet.create({
    mainPagea: {
        marginTop: 35,
        height: '100%',
    },
    cameraPriview: {
        backgroundColor: 'brown',
        flex: 1,
        alignItems: 'center',
        padding: 50,
    },
    name: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
    },
    contactNo: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 10,
    },
    // button container sec css
    buttonContainer: {
        backgroundColor: 'black',
        // width: '100%',
        padding: 35,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        // marginTop: 'auto',
        marginBottom: 60,
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
    }
})