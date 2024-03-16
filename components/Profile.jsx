import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { View, Text, Image, Dimensions } from "react-native";
import { TextInput } from "react-native-paper";
import Button from "./Button";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export default function Profile({ navigation }) {
  return (
    <View
      style={{
        height: height,
        width: width,
        paddingHorizontal: 10,
        paddingVertical: 30,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 15,
          marginTop: 10,
        }}
      >
        <Icon
          name="arrow-back"
          style={{ color: "white", color: "#25c067", fontSize: 20 }}
        />
        <Text style={{ color: "black", fontSize: 16, fontWeight: "bold" }}>
          Fill Your Profile
        </Text>
      </View>

      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/user.png")}
          style={{ width: 150, height: 150, borderRadius: 100 }}
        />
      </View>

      <Text
        style={{
          fontSize: 16,
          fontWeight: "bold",
          marginBottom: 10,
          marginLeft: 30,
        }}
      >
        Full Name<Text style={{ color: "red" }}>*</Text>
      </Text>

      <TextInput
        mode="offline"
        label="Full Name"
        underlineColor="transparent"
        style={{
          borderColor: "#cdcdcd",
          borderWidth: 1,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
          backgroundColor: "white",
          textColor: "#cdcdcd",
        }}
        theme={{ colors: { primary: "white" } }}
        textColor="white"
      />

      <Text
        style={{
          fontSize: 16,
          fontWeight: "bold",
          marginBottom: 10,
          marginLeft: 30,
        }}
      >
        Email<Text style={{ color: "red" }}>*</Text>
      </Text>

      <TextInput
        mode="offline"
        label="Email"
        underlineColor="transparent"
        style={{
          borderColor: "#cdcdcd",
          borderWidth: 1,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
          backgroundColor: "white",
          textColor: "#cdcdcd",
        }}
        theme={{ colors: { primary: "white" } }}
        textColor="white"
        right={<TextInput.Icon icon={"email-outline"} color="#cdcdcd" />}
      />

      <Text
        style={{
          fontSize: 16,
          fontWeight: "bold",
          marginBottom: 10,
          marginLeft: 30,
        }}
      >
        Phone Number<Text style={{ color: "red" }}>*</Text>
      </Text>

      <TextInput
        mode="offline"
        label="Phone Number"
        underlineColor="transparent"
        style={{
          borderColor: "#cdcdcd",
          borderWidth: 1,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
          backgroundColor: "white",
          textColor: "#cdcdcd",
        }}
        theme={{ colors: { primary: "white" } }}
        textColor="white"
        right={<TextInput.Icon icon={"phone"} color="#cdcdcd" />}
      />

      <Text
        style={{
          fontSize: 16,
          fontWeight: "bold",
          marginBottom: 10,
          marginLeft: 30,
        }}
      >
        Gender<Text style={{ color: "red" }}>*</Text>
      </Text>

      <TextInput
        mode="offline"
        label="Gender"
        underlineColor="transparent"
        style={{
          borderColor: "#cdcdcd",
          borderWidth: 1,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
          backgroundColor: "white",
          textColor: "#cdcdcd",
        }}
        theme={{ colors: { primary: "white" } }}
        textColor="white"
        right={<TextInput.Icon icon={"menu-down"} color="#cdcdcd" />}
      />
      <Text
        style={{
          fontSize: 16,
          fontWeight: "bold",
          marginBottom: 10,
          marginLeft: 30,
        }}
      >
        City<Text style={{ color: "red" }}>*</Text>
      </Text>

      <TextInput
        mode="offline"
        label="City"
        underlineColor="transparent"
        style={{
          borderColor: "#cdcdcd",
          borderWidth: 1,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
          backgroundColor: "white",
          textColor: "#cdcdcd",
        }}
        theme={{ colors: { primary: "white" } }}
        textColor="white"
        right={<TextInput.Icon icon={"map-marker"} color="#cdcdcd" />}
      />

      <Button title={"Continue"} />
    </View>
  );
}
