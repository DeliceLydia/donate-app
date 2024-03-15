import React from "react";
import { Image, Text, TouchableOpacity, View, Dimensions, Pressable,KeyboardAvoidingView } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TextInput } from "react-native-paper";
import Button from "./Button";
import Reset from "../styles/ResetStyle"
import { CheckBox } from "react-native-elements";
import { FIREBASE_AUTH } from "../FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import FlashMessage, { showMessage } from "react-native-flash-message";

export const height = Dimensions.get("window").height
const width = Dimensions.get("window").width
const ResetPW = ({ navigation }) => {
    return (
        <View behavior='position' style={Reset.container}>
            <View style={Reset.bar}>

                <MaterialIcons name="arrow-back" size={25} color={"#1ebb61"} />
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Reset Password</Text>

            </View>
            <View style={Reset.Viewimg}>
                <Image source={require('../assets/reset.png')} style={Reset.img} />
            </View>

            <Text style={Reset.text}>Create a new password</Text>

            <KeyboardAvoidingView behavior="position">
                <View style={Reset.label}>
                    <Text style={Reset.text2}>New password</Text>
                    <Text style={Reset.text1}> *</Text>
                </View>
                <TextInput
                    style={Reset.input}
                    textColor="#eceeef"
                    placeholder="New password"
                    placeholderTextColor="gray"
                    secureTextEntry={true}
                    underlineColor="#fcfcfc"
                    right={<TextInput.Icon icon={'eye-off'} />}
                />

                <View style={Reset.label}>
                    <Text style={Reset.text2}>Confirm password</Text>
                    <Text style={Reset.text1}> *</Text>
                </View>
                <TextInput
                    style={Reset.input}
                    textColor="#eceeef"
                    placeholder="Confirm password"
                    placeholderTextColor="gray"
                    secureTextEntry={true}
                    underlineColor="#fcfcfc"
                    right={<TextInput.Icon icon={'eye-off'} />}
                />

            </KeyboardAvoidingView>
            <View style={{ flexDirection: 'row', }}>
                <CheckBox style={{ borderColor: "#1ebb61", borderWidth: 1 }} color={"#1ebb61"} />
                <Text style={{ marginTop: 15, }}>Remember me</Text>
            </View>
            <Pressable style={{paddingVertical:50}} >
                <Button title={'Save'} />
            </Pressable>

        </View>
    );
};

export default ResetPW;
