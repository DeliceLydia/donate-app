import React from "react";
import { Image, Text, View, Dimensions, Pressable } from "react-native";
import Button from "./Button";

export const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const Congz = ({navigation}) => {
  return (
    <View
      style={{
        paddingHorizontal: 10,
        paddingVertical: 160,
        width: width,
        height: height,
      }}
    >
      <View style={{ paddingVertical: 50, paddingHorizontal: 26 }}>
        <Image
          style={{ width: 300, height: 200, alignItems: "center" }}
          source={require("../assets/logo.png")}
        />
      </View>

      <Text
        style={{
          fontSize: 31,
          textAlign: "center",
          fontWeight: "bold",
          paddingVertical: 20,
          color: "#64cd91",
        }}
      >
        {" "}
        Congratulations!
      </Text>
      <Text style={{ fontSize: 15, textAlign: "center" }}>
        Your account is ready to use
      </Text>
      <View style={{ height: 140 }}></View>
      <Pressable onPress={() => navigation.navigate("fundraising")}>
      <Button title={"Go to Home Page"}/>
      </Pressable>
     
      <View></View>
    </View>
  );
};

export default Congz;
