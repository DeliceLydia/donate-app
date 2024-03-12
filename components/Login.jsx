import React, { useState } from "react";
import { View, Image, Text, Pressable } from "react-native";
import styles from "../styles/authentication";
import { TextInput } from "react-native-paper";
import { Icon } from "react-native-elements";
import { FIREBASE_AUTH } from "../FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import FlashMessage, { showMessage } from "react-native-flash-message";
import validateForm from "../validations/validation";

const Signin = ({ navigation }) => {
  <FlashMessage position="top" />;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    if (validateForm()) {
      try {
        await signInWithEmailAndPassword(
          FIREBASE_AUTH,
          email,
          password
        );
        showMessage({
          message: "successful",
          type: "success",
          duration: 1800,
        });
        setTimeout(()=> {
          navigation.navigate("Dashboard");
        }, 3000)
      } catch (error) {
        showMessage({
          message: "Failed",
          type: "danger",
          duration: 1800,
        });
      }
    }
    };

  return (
    <View style={styles.container}>
      <FlashMessage position="top" />
      <Pressable onPress={() => navigation.navigate("Home")} style={styles.img}>
        <Image
          source={require("../assets/lg.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </Pressable>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Please Login to enjoy more benefits and we
        </Text>
        <Text style={styles.text}>won't let You go</Text>
      </View>
      <TextInput
        theme={{
          colors: {
            primary: "#FCD130",
          },
        }}
        style={styles.input}
        mode="flat"
        label="Email Address"
        placeholder="email"
        textColor="#868889"
        right={
          <TextInput.Icon
            icon="email-outline"
            color="#d4b547"
            backgroundColor="#26282c"
          />
        }
        onChangeText={setEmail}
      />
      {emailError ? <Text style={styles.error}>{emailError}</Text> : null}
      <TextInput
        theme={{
          colors: {
            primary: "#FCD130",
          },
        }}
        style={styles.input}
        label="Password"
        textColor="#868889"
        placeholder="password"
        right={
          <TextInput.Icon
            icon="lock-outline"
            color="#d4b547"
            backgroundColor="#26282c"
          />
        }
        onChangeText={setPassword}
      />
      {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}
      <Text style={{ color: "#ae9a53", left: 130 }}>Forgot Password?</Text>
      <Pressable onPress={handleSubmit} style={styles.get}>
        <Text
          style={{
            color: "#000",
            backgroundColor: "#fdd12f",
            textAlign: "center",
            width: "100%",
            borderRadius: 8,
            marginLeft: "auto",
            marginRight: "auto",
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          Get Started
        </Text>
      </Pressable>
      <Text style={{ color: "#8d8e92", marginTop: 20 }}>
        Or simply login with
      </Text>
      <View style={styles.buttonIcon}>
        <Icon
          style={styles.iconStyle}
          name="apple"
          type="font-awesome"
          size={15}
          color="#fff"
        />
        <Text style={{ color: "#fff" }}>Login with Apple</Text>
      </View>
      <View style={styles.bg}>
        <Image source={require("../assets/google.png")} style={styles.google} />
        <Text style={{ color: "#636363" }}>Login with Google</Text>
      </View>
      <View style={styles.link}>
        <Text style={{ color: "#fff" }}>Don't have an account?</Text>
        <Pressable onPress={() => navigation.navigate("Register")}>
          <Text style={{ color: "#eac866" }}>Sign Up</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Signin;