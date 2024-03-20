import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import { TextInput } from "react-native-paper";
import {launchImageLibrary} from 'react-native-image-picker'
import Button from "./Button";
import { writeData } from "./firebase";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export default function Fundraising({ navigation }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [tdonation, setTdonation] = useState("");
  const [image, setImage] = useState(null);

  const selectImage = () => {
    const options = {
      mediaType: 'photo',
      title: "Select Image",
      quality: 1,
    };
  
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        // Set the selected image
        setImage(response.uri);
      }
    });
  };

  return (
    <View style={{ height: height, width: width, paddingHorizontal: 10 }}>
      <ScrollView>
        <View>
          <Image
            source={require("../assets/kids.jpg")}
            style={{
              borderRadius: 30,
              width: "100%",
              marginTop: 30,
              height: 200,
            }}
          />
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 16,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
    <View>
    <Text style={{fontSize:18,fontWeight:'bold',marginTop:10}}>Fundraising Details</Text>

    <Text style={{fontSize:16,fontWeight:'bold',marginTop:10,marginBottom:10,marginLeft:30}}>Title<Text style={{color:'red'}}>*</Text></Text>

    <TextInput
    mode="offline"
         label="Help African Children's Education"
         underlineColor="transparent"
         style={{borderColor:"#25c067",
         borderWidth:2,borderTopLeftRadius:50,borderTopRightRadius:50,borderBottomLeftRadius:50,borderBottomRightRadius:50,backgroundColor:"white",textColor:"black",fontWeight:'bold'}}
         theme={{colors:{primary:'white'}}}
         textColor='white'
         />

<Text style={{fontSize:16,fontWeight:'bold',marginTop:10,marginBottom:10,marginLeft:30}}>Category<Text style={{color:'red'}}>*</Text></Text>

<TextInput
mode="offline"
     label="Education"
     underlineColor="transparent"
     style={{borderColor:"#25c067",
     borderWidth:2,borderTopLeftRadius:50,borderTopRightRadius:50,borderBottomLeftRadius:50,borderBottomRightRadius:50,backgroundColor:"white",textColor:"black",fontWeight:'bold'}}
     theme={{colors:{primary:'white'}}}
     textColor='white'
     right={<TextInput.Icon icon={'map-marker'} color='#cdcdcd' />}
     />

<Text style={{fontSize:16,fontWeight:'bold',marginTop:10,marginBottom:10,marginLeft:30}}>Total Donation Required<Text style={{color:'red'}}>*</Text></Text>

<TextInput
mode="offline"
     label="8200"
     underlineColor="transparent"
     style={{borderColor:"#25c067",
     borderWidth:2,borderTopLeftRadius:50,borderTopRightRadius:50,borderBottomLeftRadius:50,borderBottomRightRadius:50,backgroundColor:"white",textColor:"black",fontWeight:'bold'}}
     theme={{colors:{primary:'white'}}}
     textColor='white'
     right={<TextInput.Icon icon={'currency-usd'} color='#cdcdcd' />}
     />
    </View>
    
    <View style={{display:'flex',flexDirection:'row',gap:20,marginBottom:15}}>
      <TouchableOpacity style={{borderColor:"#25c067",
        borderWidth:2,borderTopLeftRadius:50,borderTopRightRadius:50,borderBottomLeftRadius:50,borderBottomRightRadius:50,backgroundColor:"white",width:100,marginTop:15,textAlign:'center'}} >
        <Text style={{ textAlign:'center',
          fontSize: 18, 
          fontWeight: '400',
          color:'#25c067',
          padding:10}}
        >{<TextInput.Icon icon={'arrow-right-bold'} color={'#25c067'} />}Draft
        </Text>
      </TouchableOpacity>
        <TouchableOpacity style={{
        backgroundColor:'#25c067',
        width:250,
        borderRadius:30,
        marginTop:15
        }} >
            <Text style={{textAlign:'center',
        fontSize: 18, 
        fontWeight: '400',
        color:'whitesmoke',
        paddingTop:10}}>Create & Submit</Text>
        </TouchableOpacity>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', gap: 16 ,justifyContent: 'center', alignItems: 'center'}}>

          <Image
            source={require("../assets/kids.jpg")}
            style={{ borderRadius: 10, marginTop: 30, width: 80, height: 100 }}
          />
          <Image
            source={require("../assets/kids.jpg")}
            style={{ borderRadius: 10, marginTop: 30, width: 80, height: 100 }}
          />
          <Image
            source={require("../assets/kids.jpg")}
            style={{ borderRadius: 10, marginTop: 30, width: 80, height: 100 }}
          />
          <Image
            source={require("../assets/kids.jpg")}
            style={{ borderRadius: 10, marginTop: 30, width: 80, height: 100 }}
          />
        </View>

        <View>
          <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 10 }}>
            Fundraising Details
          </Text>

          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              marginTop: 10,
              marginBottom: 10,
              marginLeft: 30,
            }}
          >
            Title<Text style={{ color: "red" }}>*</Text>
          </Text>

          <TextInput
            mode="offline"
            value={title}
            onChangeText={setTitle}
            placeholder="Help African Children's Education"
            underlineColor="transparent"
            style={{
              borderColor: "#25c067",
              height: 40,
              borderWidth: 2,
              borderTopLeftRadius: 50,
              borderTopRightRadius: 50,
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              fontWeight: "bold",
            }}
            theme={{ colors: { primary: "white" } }}
            textColor=""
            black
          />

          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              marginTop: 10,
              marginBottom: 10,
              marginLeft: 30,
            }}
          >
            Category<Text style={{ color: "red" }}>*</Text>
          </Text>

          <TextInput
            mode="offline"
            value={category}
            onChangeText={setCategory}
            placeholder="Education"
            underlineColor="transparent"
            style={{
              borderColor: "#25c067",
              height: 40,
              borderWidth: 2,
              borderTopLeftRadius: 50,
              borderTopRightRadius: 50,
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              fontWeight: "bold",
            }}
            theme={{ colors: { primary: "white" } }}
            textColor="black"
            right={<TextInput.Icon icon={"map-marker"} color="#cdcdcd" />}
          />

          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              marginTop: 10,
              marginBottom: 10,
              marginLeft: 30,
            }}
          >
            Total Donation Required<Text style={{ color: "red" }}>*</Text>
          </Text>

          <TextInput
            mode="offline"
            value={tdonation}
            onChangeText={setTdonation}
            placeholder="8200"
            underlineColor="transparent"
            style={{
              borderColor: "#25c067",
              height: 40,
              borderWidth: 2,
              borderTopLeftRadius: 50,
              borderTopRightRadius: 50,
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              fontWeight: "bold",
            }}
            theme={{ colors: { primary: "white" } }}
            textColor="black"
            right={<TextInput.Icon icon={"currency-usd"} color="#cdcdcd" />}
          />
          <TouchableOpacity onPress={selectImage}>
            <Text>Select Image</Text>
          </TouchableOpacity>

          {/* Display selected image */}
          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: 100, height: 100 }}
            />
          )}
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 20,
            marginBottom: 15,
          }}
        >
          <TouchableOpacity
            onPress={() => writeData(title, category, tdonation, image)}
          >
            <Button title={"Create & Submit"} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}
