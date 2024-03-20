import React from "react";
import { View, Text, Pressable, TextInput,Dimensions, KeyboardAvoidingView } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Button from "./Button";


const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width
const Verify = () => {
    return (
        <View style={{ flex:1,justifyContent:'space-between',alignContent:'center',paddingHorizontal: 20, paddingVertical: 40, height: height, width: width }}>
           
            <KeyboardAvoidingView behavior="height" style={{display:'flex',justifyContent:"center",alignItems:'center'}}>
            <Text style={{ fontSize: 15, paddingVertical: 50 ,fontWeight:'400'}}>Code have been sent to exp*********gmail.com</Text>
            <View style={{ display: "flex", flexDirection: 'row', gap: 10 }}>
                <TextInput style={{width:70,height:60,borderWidth: 1, borderRadius: 10,borderColor:'#1ebb61' }} />
                <TextInput style={{width:70,height:60, borderWidth: 1, borderRadius: 10,borderColor:'#1ebb61' }} />
                <TextInput style={{width:70,height:60, borderWidth: 1, borderRadius: 10,borderColor:'#1ebb61' }} />
                <TextInput style={{width:70,height:60, borderWidth: 1, borderRadius: 10,borderColor:'#1ebb61'}} />
            </View>
            <View  style={{ display: 'flex', flexDirection: 'row' }}>
            <Text style={{ fontSize: 15, paddingVertical: 50 ,fontWeight:'400'}}>Resend the code in</Text>
            <Text style={{ fontSize: 15, paddingVertical: 50 ,fontWeight:'400',color:"#1ebb61"}}> 56</Text>
            <Text style={{ fontSize: 15, paddingVertical: 50 ,fontWeight:'400'}}> s</Text>
                
            </View>
            </KeyboardAvoidingView>

            <Pressable onPress={() => navigation.navigate("Verify Password")}>
            <Button title={'Verify'} />
            </Pressable>

        </View>

    )
}
export default  Verify;