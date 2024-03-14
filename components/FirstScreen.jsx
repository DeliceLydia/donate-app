import React from "react";
import { Image, Text, Pressable, View, Dimensions , TouchableOpacity} from "react-native";
import Button from "./Button";


export const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const FirstScreen = ({ navigation }) => {

    return (
        <View style={{ paddingHorizontal: 30, paddingVertical: 20, width: width, height: height }}>

            <View style={{ paddingVertical: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', alignItems: 'center' }}>

                <Image style={{ width: 300, height: 250, }} source={require('../assets/first.png')} />

            </View>
            <View style={{ paddingVertical: 30 }}>

                <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: '800', color: '#64cd91', paddingVertical: 15, }}>Trust,Transparent and effective in sharing kindness  </Text>
                <Text style={{ textAlign: 'center', fontSize: 16 }}>Welcome to Donate, where making a difference is easier than ever. With our app, you can donate easily,
                    quickly, and directly to causes that matter,no matter where you are in the world.
                    Join us in making an impact right on target, one donation at a time.</Text>

            </View>
            <View style={{ height: 20 }}></View>
            <View >
                <TouchableOpacity>
                    <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: '700', color: '#64cd91', marginBottom: 10 }}>Skip</Text>
                </TouchableOpacity>

                <Pressable >
                    <Button title="next" />
                </Pressable>
            </View>


        </View>

    )
}

export default FirstScreen;
