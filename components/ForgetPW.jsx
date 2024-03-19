import React from "react";
import { View, Text, Pressable, Image, Dimensions, TextInput, KeyboardAvoidingView } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Button from "./Button";


const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width


const ForgetPW = ({navigation}) => {
    return (
        <View style={{ paddingHorizontal: 20, paddingVertical: 40, height: height, width: width }}>
            <KeyboardAvoidingView behavior="position">
                {/* <View style={{ display: 'flex', flexDirection: 'row', gap: 15 }}>

                    <MaterialIcons name="arrow-back" size={25} color={"#1ebb61"} />
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Forgot Password</Text>

                </View> */}

                <View style={{ paddingVertical: 30, display: 'flex', alignItems: 'center', justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('../assets/reset.png')} style={{ width: 300, height: 250 }} />
                </View>

                <Text style={{ fontSize: 15, fontWeight: '400', paddingVertical: 30 }}>Select which contact details should we use to reset password</Text>

                <View style={{ display: 'flex', flexDirection: 'row', gap: 15, marginBottom: 10, height: 80, borderWidth: 2, borderRadius: 10, borderColor: '#1ebb61' }}>
                    <View style={{ width: 80, marginLeft: 6, height: 80, display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center', borderRadius: 100 }}>
                        <MaterialIcons name="message" color={'#1ebb61'} size={30} />
                    </View>

                    <View style={{ marginTop: 20, }}>
                        <TextInput
                            placeholder="Enter your Email Address"
                        />

                    </View>
                </View>
                <View style={{ height: 100 }}></View>

                <Pressable onPress={() => navigation.navigate("verify")}>
                    <Button title={'Continue'} />
                </Pressable>

            </KeyboardAvoidingView>

        </View>
    )
}

export default ForgetPW;