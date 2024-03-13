import React from "react";
import { Image, Text, Pressable, View, Dimensions } from "react-native";
import Button from "./Button";
import { Image, Text, TouchableOpacity, View,Dimensions } from "react-native";
import Button from "./Botton";

export const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const Started = ({navigation}) => {
  return (
    <View
      style={{
        paddingHorizontal: 10,
        backfaceVisibility: "#ffffff",
        width: width,
        height: height,
      }}
    >
      <View
        style={{
          paddingVertical: 80,
          paddingHorizontal: 26,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          style={{ width: 300, height: 200 }}
          source={require("../assets/bg.png")}
        />
      </View>
export const height = Dimensions.get("window").height
const width = Dimensions.get("window").width
const Started = () => {
    return (
        <View style={{ paddingHorizontal: 30, paddingVertical: 50,width:width,height:height }}>

            <View style={{ paddingVertical: 50,display:'flex',alignItems: 'center',justifyContent:'center',alignItems:'center'}}>

                <Image style={{ width: 400, height: 270, }} source={require('../assets/getstarted.png')} />

            </View>

      <View style={{ paddingVertical: 10 }}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 23,
            fontWeight: "800",
            color: "#64cd91",
            paddingVertical: 15,
          }}
        >
          Donate easily,quickly,right on target all over the world{" "}
        </Text>
        <Text style={{ textAlign: "center" }}>
          Welcome to Donate, where making a difference is easier than ever. With
          our app, you can donate easily, quickly, and directly to causes that
          matter,no matter where you are in the world. Join us in making an
          impact right on target, one donation at a time.
        </Text>
      </View>
      <View>
        <Pressable>
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              fontWeight: "700",
              color: "#64cd91",
              marginTop: 20,
              marginBottom: 10,
            }}
          >
            Skip
          </Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("welcome")}  >
        <Button title="next"/>
        </Pressable>
        
      </View>
    </View>
  );
};
            <View style={{ paddingVertical: 50 }}>

                <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: '800', color: '#64cd91', paddingVertical: 15, }}>Donate easily,quickly,right on target all over the world </Text>
                <Text style={{ textAlign: 'center',fontSize:16 }}>Welcome to Donate, where making a difference is easier than ever. With our app, you can donate easily,
                    quickly, and directly to causes that matter,no matter where you are in the world.
                    Join us in making an impact right on target, one donation at a time.</Text>

            </View>
            <View style={{ height: 40 }}></View>
            <View >
                <TouchableOpacity>
                    <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: '700', color: '#64cd91', marginBottom: 10 }}>Skip</Text>
                </TouchableOpacity>

                <Button title={'Next'} />
            </View>


        </View>

    )
}

export default Started;
