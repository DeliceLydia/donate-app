import React, { useEffect, useState } from "react";
import { View, Text, Image, StatusBar, Dimensions, StyleSheet } from 'react-native'
import { CheckBox } from "react-native-elements";

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export const Card = ({ Cimg, Name, Abbr }) => {

    const [checked, setChecked] = useState(false);
    const [data, setData] = useState({ Name: "", Abbr: "", cimg: "" });
    const toggleChecked = () => {
        setChecked(!checked);
    }
    return (
       
        <View style={{ paddingVertical: 10, width: width }}>
            <View style={{
                flexDirection: "row",
                height: 80,
                height: 80,
                width: '90%',
                borderWidth: 2,
                borderRadius: 20,
                borderColor: '#1ebb61',
                borderColor: '#1ebb61',
                paddingLeft: 10,
                alignItems: 'center',

            }}>
                <Image source={{ uri: Cimg }} style={{ width: "30%", height: 60, marginRight: 10 }} />
                <Text style={{ fontSize: 17, fontWeight: '200', }}>{Abbr}</Text>
                <Text style={{ fontSize: 19, fontWeight: '600', marginLeft: 10 }}>{Name}</Text>

                <CheckBox
                    checked={checked}
                    onPress={toggleChecked}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    checkedColor="#1ebb61"
                    containerStyle={{ marginLeft: 'auto' }}
                />
            </View>
            <StatusBar />
        </View>
    )
}
export const Countries = ({ img, small, big }) => {

    const [search, setSearch] = useState([])

    const handleSearch = () => {
        fetch(`https://restcountries.com/v3.1/all`)
            .then(response => response.json())
            .then(response => {
                setSearch(response)
                // console.log(response[0].flags.png)
            })
            .catch(err => console.error(err));
    }

    useEffect(() => {
        handleSearch()

    }, [])
    return (
        <View style={{ width: width, height: height }}>

            {search.map((item, index) => (
                <View key={index} style={styles.card}>
                    <Image source={{ uri: `${item.flags.png}` }} style={styles.image} />
                    <Text style={styles.text}>{item.cca2}</Text>
                    <Text style={styles.text1}>{item.name.common}</Text>
                    <CheckBox
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                        checkedColor="#1ebb61"
                        containerStyle={{ marginLeft: 'auto' }}
                    />
                </View>
            ))}
            <StatusBar />
        </View>
    )
}
const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        height: 90,
        width: '90%',
        borderWidth: 2,
        borderRadius: 20,
        borderColor: 'whitesmoke',
        paddingLeft: 5,
        alignItems: 'center',
        marginBottom: 10,
    },
    image: {
        width: "30%",
        height: 60,
        marginRight: 10,
    },
    text: {
        fontSize: 17,
        fontWeight: '200',
        marginLeft: 10,
    },
    text1: {
        fontSize: 17,
        fontWeight: '600',
        marginLeft: 10,
    },
})