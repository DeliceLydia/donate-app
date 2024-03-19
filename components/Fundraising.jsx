import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { View,Text, TouchableOpacity, Image, Dimensions, ScrollView } from "react-native";
import { TextInput, IconButton } from "react-native-paper";


const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function  Fundraising({navigation}){
  return (
    <View style={{height:height,width:width,paddingHorizontal:10}}>
      <ScrollView>

    <View  >
    <Image
      source={require('../assets/kids.jpg')}
      style={{ borderRadius:30, width: "100%",marginTop:30,height:200}}
    />
    </View>

    <View  style={{display:'flex',flexDirection:'row',gap:16}}>
      
    <Image
      source={require('../assets/kids.jpg')}
      style={{ justifyContent:'center',alignItems:'center',borderRadius:10,marginTop:30,width:80,height:100}}
    />
     <Image
      source={require('../assets/kids.jpg')}
      style={{ borderRadius:10,marginTop:30,width:80,height:100}}
    />
     <Image
      source={require('../assets/kids.jpg')}
      style={{ borderRadius:10,marginTop:30,width:80,height:100}}
    />
     <Image
      source={require('../assets/kids.jpg')}
      style={{ borderRadius:10,marginTop:30,width:80,height:100}}
    />
    </View>

    <View>
    <Text style={{fontSize:18,fontWeight:'bold',marginTop:10}}>Fundraising Details</Text>

    <Text style={{fontSize:16,fontWeight:'bold',marginTop:10,marginBottom:10,marginLeft:30}}>Title<Text style={{color:'red'}}>*</Text></Text>

    <TextInput
    mode="offline"
         label="Help African Children's Education"
         underlineColor="transparent"
         style={{borderColor:"#25c067",height: 40,
         borderWidth:2,borderTopLeftRadius:50,borderTopRightRadius:50,borderBottomLeftRadius:50,borderBottomRightRadius:50,backgroundColor:"white",textColor:"black",fontWeight:'bold'}}
         theme={{colors:{primary:'white'}}}
         textColor='white'
         />

<Text style={{fontSize:16,fontWeight:'bold',marginTop:10,marginBottom:10,marginLeft:30}}>Category<Text style={{color:'red'}}>*</Text></Text>

<TextInput
mode="offline"
     label="Education"
     underlineColor="transparent"
     style={{borderColor:"#25c067", height: 40,
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
     style={{borderColor:"#25c067",height: 40,
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
        >{<TextInput.Icon icon={'arrow-right-bold'} color={'#25c067'} />}Draft</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{backgroundColor:'#25c067',
        
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
      </ScrollView>
    </View>
  )
}

