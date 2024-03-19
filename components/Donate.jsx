import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { View,Text, TouchableOpacity, Image, Dimensions, ScrollView } from "react-native";
import { TextInput, IconButton } from "react-native-paper";
import Button from "./Button";

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function  Donate({navigation}){
  return (
    <View style={{height:height,width:width,paddingHorizontal:10,backgroundColor:'white'}}>
        <ScrollView> 

    <Text style={{fontSize:18,fontWeight:'bold',marginTop:15,textAlign:'center'}}>Enter the Amount</Text>
    <View >
    <Text                                                                                                                                                  
    style={{ width: "100%",marginTop:30,height:200,borderColor:'#25c067',borderTopLeftRadius:30,borderTopRightRadius:30,borderBottomLeftRadius:30,borderBottomRightRadius:30
    ,borderTopLeftRadius:30,borderTopRightRadius:30,borderBottomLeftRadius:30,borderBottomRightRadius:30,borderWidth:2,color:'#25c067',fontSize:18,fontWeight:'bold',textAlign:'center',padding:85}}>
    $18
    </Text>

    
    </View>
    
    <View style={{display:'flex',flexDirection:'row',gap:10,marginBottom:15,paddingHorizontal:10}}>
    <TouchableOpacity style={{borderColor:"#25c067",
     borderWidth:2,borderTopLeftRadius:50,borderTopRightRadius:50,borderBottomLeftRadius:50,borderBottomRightRadius:50,width:110,marginTop:15,textAlign:'center'}} >
            <Text style={{ textAlign:'center',
        fontSize: 18, 
        fontWeight: '400',
        color:'#25c067',
        padding:10}}
        >$5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{borderColor:"#25c067",
     borderWidth:2,borderTopLeftRadius:50,borderTopRightRadius:50,borderBottomLeftRadius:50,borderBottomRightRadius:50,width:110,marginTop:15,textAlign:'center'}} >
            <Text style={{ textAlign:'center',
        fontSize: 18, 
        fontWeight: '400',
        color:'#25c067',
        padding:10}}
        >$10</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{borderColor:"#25c067",
     borderWidth:2,borderTopLeftRadius:50,borderTopRightRadius:50,borderBottomLeftRadius:50,borderBottomRightRadius:50,width:110,marginTop:15,textAlign:'center'}} >
            <Text style={{ textAlign:'center',
        fontSize: 18, 
        fontWeight: '400',
        color:'#25c067',
        padding:10}}
        >$25</Text>
        </TouchableOpacity>

        </View>

        <View style={{display:'flex',flexDirection:'row',gap:10,marginBottom:15,paddingHorizontal:10}}>
    <TouchableOpacity style={{borderColor:"#25c067",
     borderWidth:2,borderTopLeftRadius:50,borderTopRightRadius:50,borderBottomLeftRadius:50,borderBottomRightRadius:50,width:110,marginTop:10,textAlign:'center'}} >
            <Text style={{ textAlign:'center',
        fontSize: 18, 
        fontWeight: '400',
        color:'#25c067',
        padding:10}}
        >$5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{borderColor:"#25c067",
     borderWidth:2,borderTopLeftRadius:50,borderTopRightRadius:50,borderBottomLeftRadius:50,borderBottomRightRadius:50,width:110,marginTop:10,textAlign:'center'}} >
            <Text style={{ textAlign:'center',
        fontSize: 18, 
        fontWeight: '400',
        color:'#25c067',
        padding:10}}
        >$10</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{borderColor:"#25c067",
     borderWidth:2,borderTopLeftRadius:50,borderTopRightRadius:50,borderBottomLeftRadius:50,borderBottomRightRadius:50
     ,width:110,marginTop:10,textAlign:'center'}} >
            <Text style={{ textAlign:'center',
        fontSize: 18, 
        fontWeight: '400',
        color:'#25c067',
        padding:10}}
        >$25</Text>
        </TouchableOpacity>

        </View>
        <Button title={"Continue"} />
      
        <TextInput
  keyboardType="numeric"
 
  style={{
    height: 40, // Set the height
    borderColor: 'gray', // Border color
    borderWidth: 1, // Border width
    borderRadius: 5, // Border radius for rounded corners
    paddingLeft: 10, // Inner left padding
    paddingRight: 10, // Inner right padding
    margin: 10, // Outer margin
    fontSize: 18, // Text size
  }}
  placeholder="Enter a number" // Placeholder text to display when empty
  placeholderTextColor="rgba(0,0,0,0.6)" // Placeholder text color
  
  />
      </ScrollView>
    </View>
  )
}

