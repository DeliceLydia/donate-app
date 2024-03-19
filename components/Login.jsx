import React, { useState, useContext } from "react";
import { View, Image, Text, Pressable } from "react-native";
import styles from "../styles/LoginStyle";
import { TextInput } from "react-native-paper";
import { Icon } from "react-native-elements";
import { AuthContext } from "../context/AuthContext";
import FlashMessage, { showMessage } from "react-native-flash-message";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useContext(AuthContext);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateForm = () => {
    let valid = true;

    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    if (!email.trim()) {
      setEmailError("Email is required");
      valid = false;
    } else if (!isValidEmail(email)) {
      setEmailError("Invalid email format");
      valid = false;
    } else {
      setEmailError("");
    }

    if (!password.trim()) {
      setPasswordError("Password is required");
      valid = false;
    } else {
      setPasswordError("");
    }
    return valid;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      try {
        login(email, password);
        setTimeout(() => {
          navigation.navigate("Urgent Fundraising");
        }, 3000);
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
      <Pressable onPress={() => navigation.navigate("home")} style={styles.img}>
        <Image
          source={require("../assets/wecare.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </Pressable>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Sign in to your account</Text>
      </View>
      <TextInput
        theme={{
          roundness: 20,
          colors: {
            primary: "#29c46b",
          },
        }}
        style={styles.input}
        mode="flat"
        placeholder="email"
        placeholderTextColor="gray"
        underlineColor="#fcfcfc"
        textColor="red"
        onChangeText={setEmail}
        error={emailError}
      />
      {emailError ? <Text style={styles.error}>{emailError}</Text> : null}
      <TextInput
        theme={{
          roundness: 20,
          colors: {
            primary: "#29c46b",
          },
        }}
        style={styles.input}
        textColor="red"
        placeholder="password"
        placeholderTextColor="gray"
        secureTextEntry={!showPassword}
        value={password}
        underlineColor="#fcfcfc"
        right={
          <TextInput.Icon
            icon={showPassword ? "eye-off-outline" : "eye-outline"}
            onPress={togglePasswordVisibility}
            color="#90959d"
          />
        }
        onChangeText={setPassword}
        error={passwordError}
      />
      {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}
      
      <Pressable onPress={handleSubmit} style={styles.get}>
        <Text
          style={{
            color: "#b7e1c9",
            backgroundColor: "#54ae7a",
            textAlign: "center",
            width: "100%",
            borderRadius: 20,
            marginLeft: "auto",
            marginRight: "auto",
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          Sign In
        </Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("forget")}>
        <Text style={{ color: "#71d19a", marginTop: 20, marginBottom: 20 }}>
          Forgot password?
        </Text>
      </Pressable>
      <Text style={{ color: "#8a8e95", fontWeight: "500" }}>
        Or continue with
      </Text>
      <View style={styles.icon}>
        <View style={styles.bg}>
          <Icon
            style={styles.iconStyle}
            name="facebook"
            type="font-awesome"
            size={25}
            backgroundColor="#277eff"
            color="#fff"
            padding={5}
            borderRadius={50}
          />
        </View>
        <View style={styles.bg}>
          <Image
            source={require("../assets/google.png")}
            style={styles.google}
          />
        </View>
        <View style={styles.bg}>
          <Icon
            style={styles.iconStyle}
            name="apple"
            type="font-awesome"
            size={25}
            color="#000"
          />
        </View>
      </View>

      <View style={styles.link}>
        <Text style={{ color: "#d6d7da" }}>Don't have an account?</Text>
        <Pressable onPress={() => navigation.navigate("register")}>
          <Text style={{ color: "#66ce92" }}>Sign Up</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;
