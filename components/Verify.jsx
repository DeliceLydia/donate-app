import React from "react";
import { View, Text, Pressable, TextInput,Dimensions, KeyboardAvoidingView } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Button from "./Button";


const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width
const Verify = () => {
    return (
        <View style={{ paddingHorizontal: 20, paddingVertical: 70, backgroundColor: 'witesmoke', height: height, width: width }}>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 15 }}>
                <MaterialIcons name="arrow-back" size={25} color={"#1ebb61"} />
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Forgot Password</Text>

            </View>
            <KeyboardAvoidingView behavior="height" style={{flex:1,justifyContent:"center",alignItems:'center'}}>
            <Text style={{ fontSize: 15, paddingVertical: 50 ,fontWeight:'400'}}>Code have been sent to exp*********gmail.com</Text>
            <View style={{ display: "flex", flexDirection: 'row', gap: 10 }}>
                <TextInput style={{ width:70,height:60,borderWidth: 1, borderRadius: 10,borderColor:'#1ebb61' }} />
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

            <Pressable>
            <Button title={'Verify'} />
            </Pressable>

        </View>

    )
}
export default  Verify;