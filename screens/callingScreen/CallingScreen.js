import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CallingScreen = () => {
    return (
        <View style={styles.mainPagea}>
            <View style={styles.cameraPriview}>
                <Text style={styles.name}>Istak</Text>
                <Text style={styles.contactNo}>+880 1710335722</Text>
            </View>
            {/* button container section */}
            <View style={styles.buttonContainer}>
                <Text>icon</Text>
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
        padding: 15,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        // marginTop: 'auto',
        marginBottom: 50,
    }
})