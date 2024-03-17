import React from "react";
import { Image, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Checkbox, TextInput, Icon } from 'react-native-paper';
import { FontAwesome, MaterialIcons, Feather } from '@expo/vector-icons'
import { StatusBar } from "react-native";

const Search = () => {
    return (
        <View style={styles.container} >
            <View style={{display:'flex',gap:30}}>
                <View style={{ display: 'flex', flexDirection: 'row', gap: 15 }}>

                    <MaterialIcons name="arrow-back" size={25} color={"#1ebb61"} />
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Select your country</Text>

                </View>
                <TextInput
                    theme={{
                        colors: {
                            primary: "white",
                        },
                    }}
                    underlineColor="white"
                    placeholder="Select your country"
                    mode="flat"
                    left={<TextInput.Icon icon="" size={25} />}
                    style={styles.input}
                />

            </View>



            <StatusBar />
        </View>
    )
}
export default Search;

const styles = StyleSheet.create({

    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        // height: height,
        // width: width
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    input: {
        width: "100%",
        height: 30,
        borderRadius: 25,
        borderWidth: 0.003,
        borderColor: '#f7f9fc',
        padding: 10,
        marginBottom: 20,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25
    }

}

)