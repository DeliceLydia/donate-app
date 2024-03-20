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
        <View style={{ paddingVertical: 10, width: width, height: height }}>
            <View style={{
                flexDirection: "row",
                height: 80,
                width: '90%',
                borderWidth: 2,
                borderRadius: 20,
                borderColor: '#1ebb61',
                paddingLeft: 10,
                alignItems: 'center',

            }}>
            <Image source={{ uri: Cimg }} style={{ width: "30%", height: 60,marginRight:10 }} />
            <Text style={{ fontSize: 17, fontWeight: '200',}}>{Abbr}</Text>
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

export const Countries = ({img,small,big}) => {

    const Country = [
        {
            img: {uri:  "https://flagcdn.com/w320/bi.png"},
            small: "Bi",
            big: "Burundi"
        },
        {
            img: {uri:  
                "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png"},
            small: "AF",
            big:"Afghanistan"
        },
        {
            img: {uri:  "https://flagcdn.com/w320/tg.png"},
            small: "tg",
            big: "Togo"
        },
        {
            img: {uri:  "https://flagcdn.com/w320/ke.png"},
            small: "Ke",
            big: "kenya"
        },
        {
            img: {uri:  "https://flagcdn.com/w320/pk.png"},
            small: "pk",
            big: "Pakistan"
        },
        {
            img: {uri:  "https://flagcdn.com/w320/ly.png"},
            small: "Li",
            big: "Libya"
        },
    ]

    return(
        <View style={{ width: width, height: height }}>
           
            {Country.map((item, index) => (
            <View key={index} style={styles.card}>
                <Image source={item.img} style={styles.image} />
                <Text style={styles.text}>{item.small}</Text>
                <Text style={styles.text1}>{item.big}</Text>
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