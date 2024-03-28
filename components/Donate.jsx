import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Pressable,
} from "react-native";
import { TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";
import Button from "./Button";
import styles from "../styles/LoginStyle";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const Donate = ({ navigation }) => {
  return (
    <View
      style={{
        height: height,
        width: width,
        paddingHorizontal: 10,
        paddingVertical: 20,
        flex: 1,
        
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 15,
          marginTop: 30,
        }}
      >
        <Icon
          name="arrow-back"
          style={{ color: "white", color: "#25c067", fontSize: 20 }}
        />
        <Text style={{ color: "black", fontSize: 18, fontWeight: "bold" }}>
          Donate
        </Text>
      </View>
      <View style={{justifyContent:'center',alignContent:'center',paddingVertical:30}}>

      <ScrollView >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            marginTop: 15,
            marginBottom: 15,
            textAlign: "center",
          }}
        >
          Enter the Amount
        </Text>
        <View style={{width: '90%', marginLeft:'auto',
          marginRight:'auto'}}>
          <TextInput
          style={styles.donateinput}
          placeholder='18$'
          keyboardType="numeric"
          multiline={true}
          numberOfLines={4} 
          width= "100%"
          height={150}
          backgroundColor="#fff"
          borderColor= "#25c067"
          borderWidth= {2}
          color= "#25c067"
          fontSize= {18}
          fontWeight= "bold"
          textAlign="center"
          />
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: 'center',
            gap: 10,
            marginBottom: 15,
            paddingHorizontal: 10,
          }}
        >
          <TouchableOpacity
            style={{
              borderColor: "#25c067",
              borderWidth: 2,
              borderTopLeftRadius: 50,
              borderTopRightRadius: 50,
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              width: 110,
              marginTop: 15,
              textAlign: "center",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 18,
                fontWeight: "400",
                color: "#25c067",
                padding: 10,
              }}
            >
              $5
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderColor: "#25c067",
              borderWidth: 2,
              borderTopLeftRadius: 50,
              borderTopRightRadius: 50,
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              width: 110,
              marginTop: 15,
              textAlign: "center",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 18,
                fontWeight: "400",
                color: "#25c067",
                padding: 10,
              }}
            >
              $10
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              borderColor: "#25c067",
              borderWidth: 2,
              borderTopLeftRadius: 50,
              borderTopRightRadius: 50,
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              width: 110,
              marginTop: 15,
              textAlign: "center",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 18,
                fontWeight: "400",
                color: "#25c067",
                padding: 10,
              }}
            >
              $25
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: 'center',
            gap: 10,
            marginBottom: 15,
            paddingHorizontal: 10,
          }}
        >
          <TouchableOpacity
            style={{
              borderColor: "#25c067",
              borderWidth: 2,
              borderTopLeftRadius: 50,
              borderTopRightRadius: 50,
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              width: 110,
              marginTop: 10,
              textAlign: "center",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 18,
                fontWeight: "400",
                color: "#25c067",
                padding: 10,
              }}
            >
              $5
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderColor: "#25c067",
              borderWidth: 2,
              borderTopLeftRadius: 50,
              borderTopRightRadius: 50,
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              width: 110,
              marginTop: 10,
              textAlign: "center",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 18,
                fontWeight: "400",
                color: "#25c067",
                padding: 10,
              }}
            >
              $10
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              borderColor: "#25c067",
              borderWidth: 2,
              borderTopLeftRadius: 50,
              borderTopRightRadius: 50,
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              width: 110,
              marginTop: 10,
              textAlign: "center",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 18,
                fontWeight: "400",
                color: "#25c067",
                padding: 10,
              }}
            >
              $25
            </Text>
          </TouchableOpacity>
        </View>
        <Pressable onPress={()=> navigation.navigate("congratulation")}>
        <Button title={"Continue"}/>
        </Pressable>
        
      </ScrollView>
      </View>
     
    </View>
  );
}

export default Donate;

