import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import contacts from '../../assets/deta/contacts.json';


const index = () => {
    return (
        <View style={styles.mainContainer}>
            <TextInput style={styles.searchInput} placeholder='Search Name....' />
            {/* Loding Contact List Data */}
            <View style={styles.contactListS}>
                <FlatList
                    data={contacts}
                    renderItem={({ item }) => <Text style={styles.dataItem}>{item.user_display_name}</Text>}
                >
                </FlatList>
            </View>
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    searchInput: {
        backgroundColor: '#95a5a6',
        margin: 15,
        padding: 7,
        borderRadius: 4,
        color: 'white',
    },
    mainContainer: {
        marginTop: 35,
    },
    contactListS: {
        padding: 15,
    },
    dataItem: {
        paddingVertical: 10,
        fontSize: 18,
        borderBottomWidth: 0.5,
        borderBottomColor: '#95a5a6',
    },
})