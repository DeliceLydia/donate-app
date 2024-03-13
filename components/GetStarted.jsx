import React from "react";
import { Image, Text, Pressable, View, Dimensions } from "react-native";
import Button from "./Button";

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

export default Started;
