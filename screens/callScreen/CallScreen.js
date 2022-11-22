import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CallAction from '../components/callAction/CallAction';

const CallScreen = () => {
  return (
    <View style={styles.mainContainer}>
        {/* camera priview section */}
        <View style={styles.cameraPriview}></View>
        <View style={styles.sectondTextC}>
            <Text style={styles.nameText}>Istiak</Text>
            <Text style={styles.numberText}>my number</Text>
        </View>
        {/* Call action Button section */}
        <CallAction></CallAction>
    </View>
  )
}

export default CallScreen

const styles = StyleSheet.create({
    mainContainer: {
        // marginTop: 40,
        // flex: 1,
        height: '100%',
        backgroundColor: 'red',
    },
    sectondTextC: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 50,
        paddingHorizontal: 50,
    },
    cameraPriview: {
        width: 140,
        height: 170,
        backgroundColor: 'white',
        position: 'absolute',
        right: 10,
        top: 110,
    },
    nameText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white'
    },
    numberText: {
        fontSize: 19,
    },
})