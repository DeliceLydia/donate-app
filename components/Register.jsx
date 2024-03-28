import React, { useState, useContext } from "react";
import { View, Image, Text, Pressable } from "react-native";
import styles from "../styles/LoginStyle";
import { TextInput } from "react-native-paper";
import { Icon, CheckBox } from "react-native-elements";
import { AuthContext } from "../context/AuthContext";
import FlashMessage, { showMessage } from "react-native-flash-message";

const Register = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setChecked] = useState(false);
  const {register} = useContext(AuthContext)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleCheckbox = () => {
    setChecked(!isChecked);
  };
  const validateForm = () => {
    let valid = true;

    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    // Validate email
    if (!email.trim()) {
      setEmailError("Email is required");
      valid = false;
    } else if (!isValidEmail(email)) {
      setEmailError("Invalid email format");
      valid = false;
    } else {
      setEmailError("");
    }
    // Validate password
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
        await register(email, password);
        setTimeout(()=> {
          navigation.navigate("Login");
        }, 3000)
        showMessage({
          message: "Registration successful!",
          type: "success",
          duration: 3600
        });
      } catch (error) {
        showMessage({
          message: "Registration failed. Please try again.",
          type: "danger",
          duration: 3600
        });
      }
    }
  };
  return (
    <View style={styles.container}>
      <FlashMessage position="top" />
      <Pressable style={styles.img}>
        <Image
          source={require("../assets/wecare.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </Pressable>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Sign up for free</Text>
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
        secureTextEntry={!showPassword}
        value={password}
        placeholderTextColor="gray"
        underlineColor="#fcfcfc"
        right={
          <TextInput.Icon
            icon={showPassword ? "eye-off-outline" : "eye-outline"}
            onPress={togglePasswordVisibility}
            color="#90959d"
          />
        }
        onChangeText={(text) => {
          setPassword(text);
          setPasswordError('');
        }}
        error={passwordError}
      />
       {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}
      <View style={{flexDirection: 'row', marginRight: 130}}>
        <CheckBox value={isChecked} onValueChange={toggleCheckbox} />
        <Text style={{marginTop: 15}}>Remember me</Text>
      </View>
      <Pressable onPress={handleSubmit} style={styles.get}>
        <Text
          style={{
            color: "#c3ebd5",
            backgroundColor: "#27c36a",
            textAlign: "center",
            width: "100%",
            borderRadius: 20,
            marginLeft: "auto",
            marginRight: "auto",
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          Sign up
        </Text>
      </Pressable>
      <Text style={{ color: "#8a8e95", fontWeight: "500", marginTop: 30 }}>
        Or continue with
      </Text>
      <View style={styles.icon}>
        <View style={styles.bg}>
          <Icon
            style={styles.iconStyle}
            name="facebook"
            type="font-awesome"
            size={20}
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
        <Text style={{ color: "#d6d7da" }}>Already have an account?</Text>
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text style={{ color: "#66ce92" }}>Sign In</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Register;
