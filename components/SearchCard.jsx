import React, { useEffect, useState } from "react";
import { View, Text, Image, StatusBar, Dimensions, StyleSheet } from 'react-native'
import { CheckBox } from "react-native-elements";

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export const Card = ({ Cimg, Name, Abbr }) => {

    const [checked, setChecked] = useState(false);
    const [data, setData] = useState({ name: "", abbr: "", cimg: "" });
    const toggleChecked = () => {
        setChecked(!checked);
    }

    useEffect(() => {
        console.log(Name, "name", Abbr, Cimg);
        setData({ name: Name, abbr: Abbr, cimg: Cimg })
    }, [Name])

    return (
        <View style={{ paddingVertical: 30, width: width, height: height }}>
            <View style={{
                flexDirection: "row",
                height: 90,
                width: '90%',
                borderWidth: 2,
                borderRadius: 20,
                borderColor: '#1ebb61',
                paddingLeft: 10,
                alignItems: 'center',
                // backgroundColor: "red"

            }}>
            <Image source={{ uri: Cimg }} style={{ width: "20%", height: 70 }} />
            <Text style={{ fontSize: 15, fontWeight: '200', color: "red" }}>{data.abbr}</Text>
            <Text style={{ fontSize: 15, fontWeight: '600', marginLeft: 10 }}>{data.name}</Text>
            <Text>{data.cimg}</Text>
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
