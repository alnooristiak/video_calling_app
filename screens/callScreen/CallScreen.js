import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CallAction from '../components/callAction/callAction'

const CallScreen = () => {
  return (
    <View style={styles.mainContainer}>
        {/* camera priview section */}
        <View style={styles.cameraPriview} />
        <View style={styles.sectondTextC}>
            <Text>Istiak</Text>
            <Text>my number</Text>
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
        backgroundColor: 'white',
        widht: 100,
        height: 100,
        justifyContent: 'flex-end',
        position: 'absolute'
    }
})