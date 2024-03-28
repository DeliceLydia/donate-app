
import React,{useState} from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text, TouchableOpacity, Image, Dimensions, ScrollView } from "react-native";
import { TextInput, IconButton } from "react-native-paper";
import Button from "./Button";
import { writeData } from './firebase'

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


    <View style={{ height: height, width: width, paddingHorizontal: 10 ,paddingVertical:20}}>

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
        <Text style={{ color: "black", fontSize: 16, fontWeight: "bold" }}>
          Create New Fundraising
        </Text>
      </View>
      <ScrollView>
        <View>
          <Image
            source={require("../assets/kids.jpg")}
            style={{
              borderRadius: 30,
              width: 380,
              height: 200,
            }}
          />
        </View>
    
        <View style={{ display: 'flex', flexDirection: 'row', gap: 16 ,justifyContent: 'center', alignItems: 'center'}}>

          <Image
            source={require("../assets/kids.jpg")}
            style={{ borderRadius: 10, marginTop: 10, width: 80, height: 80 }}
          />
          <Image
            source={require("../assets/kids.jpg")}
            style={{ borderRadius: 10, marginTop: 10, width: 80, height: 80 }}
          />
          <Image
            source={require("../assets/kids.jpg")}
            style={{ borderRadius: 10, marginTop: 10, width: 80, height: 80 }}
          />
          <Image
            source={require("../assets/kids.jpg")}
            style={{ borderRadius: 10, marginTop: 10, width: 80, height: 80 }}
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
              marginTop: 7,
              marginBottom: 5,
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
              marginTop: 7,
              marginBottom: 5,
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
              marginTop: 7,
              marginBottom: 5,
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
          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: 100, height: 100 }}
            />
          )}
        </View>

      
          <TouchableOpacity
            onPress={() => writeData(title, category, tdonation, image)
            (navigation.navigate(''))}
          >
            <Button title={"Create & Submit"} />
            
          </TouchableOpacity>
        
      </ScrollView>
    </View>
  )
}
