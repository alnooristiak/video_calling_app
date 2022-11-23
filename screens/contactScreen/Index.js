import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import dumyContacts from '../../assets/deta/contacts.json';
import { useNavigation } from '@react-navigation/native';


const index = () => {

    const navigation = useNavigation();

    const [searchName, setSearchName] = useState('');
    const [filteredContacted, setFilteredContacted] = useState(dumyContacts);

    useEffect(() => {
        const newContact = dumyContacts.filter(contact => contact.user_display_name.toLocaleLowerCase().includes(searchName.toLocaleLowerCase()), );
        setFilteredContacted(newContact);
    }, [searchName]);

    // call user hendeler
    const callUser = (user) => {
        // console.warn(user, "user call");
        navigation.navigate("CallingScreen");
    }

    return (
        <View style={styles.mainContainer}>
            {/* search input section */}
            <TextInput 
            value={searchName}
            onChangeText={setSearchName}
            style={styles.searchInput} 
            placeholder='Search Name....' 
            />
            {/* Loding Contact List Data */}
            <View style={styles.contactListS}>
                <FlatList
                    data={filteredContacted}
                    renderItem={({ item }) => <Pressable onPress={() => callUser(item)}>
                        <Text style={styles.dataItem}>{item.user_display_name}</Text>
                    </Pressable>
                    }
                    > 
                </FlatList>
            </View>
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    mainContainer: {
        marginTop: 35,
    },
    searchInput: {
        backgroundColor: '#95a5a6',
        margin: 15,
        padding: 7,
        borderRadius: 4,
        color: 'white',
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