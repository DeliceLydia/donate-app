import React from "react";
import { View, Text, Image, TouchableOpacity, StatusBar, Dimensions } from 'react-native'
import { CheckBox } from "react-native-elements";


const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export const Card = () => {
    return (
        <View style={{ paddingVertical: 30, paddingHorizontal: 10, width: width, height: height, }}>
            <View style={{
                display: 'flex',
                flexDirection: "row",
                // justifyContent: "space-between",
                // alignContent: 'center',
                height: 90,
                borderWidth: 2,
                borderRadius: 10,
                borderColor: '#1ebb61',
                gap:15,
                paddingLeft:10
               
            }}>

                <Image source={require("../assets/logo.png")} style={{ width: "20%", height: 70 }} />
                <Text style={{marginTop:30,fontSize:15,fontWeight:'200',}}>Abbr</Text>
                <Text style={{marginTop:30,fontSize:15,fontWeight:'600',}}>Name</Text>
                <View>
                     <TouchableOpacity style={{marginTop:16,fontSize:15,fontWeight:'200', left:110}}>

                    <CheckBox
                    />

                </TouchableOpacity>

                </View>
               

            </View>
            <StatusBar />
        </View>

    )
}