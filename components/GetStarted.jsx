import React,{useEffect, useRef, useState} from "react";
import { Image, Text, Pressable, View, Dimensions, FlatList,TouchableOpacity } from "react-native";
import Button from "./Button";


export const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const Started = ({navigation}) => {

    const FlatListRef = useRef()
    const [activeindex, setActiveIndex] = useState(0)

    useEffect(()=>{
        let interval = setInterval(()=>{
            if(activeindex === OnBoarding.length -1){
                FlatListRef.current.scrollToIndex({
                    index: 0,
                    animated: true

                })
            }else {
                FlatListRef.current.scrollToIndex({
                    index: activeindex + 1,
                    animated: true
            })
    }
},4000);
return()=>clearImmediate(interval)
})

const getItemLayout =(data,index) => ({
    length : width,
    offset: width * index,
    index : index

})

    const OnBoarding = [
        {
            id: 1,
            image: require("../assets/logo.png"),
            title: "Donate easily,quickly,right on target  ",
            text: "Welcome to Donate, where making a difference is easier than ever. ",
            text1:"With our app, you can donate easily quickly, and directly to causes  ",
            text2:"matter where you are in the world.Join us in making an impact right ."
        },
        {
            id: 2,
            image: require("../assets/logo.png"),
            title: "Trust,Transparent and effective ",
            text: "Welcome to Donate, where making a difference is easier than ever. ",
            text1:"With our app, you can donate easily quickly, and directly to causes  ",
            text2:"matter where you are in the world.Join us in making an impact right ."
        },
        {
            id: 3,
            image: require("../assets/logo.png"),
            title: "Create your own fundraising and publish ",
            text: "Welcome to Donate, where making a difference is easier than ever. ",
            text1:"With our app, you can donate easily quickly, and directly to causes ",
            text2:"matter where you are in the world.Join us in making an impact right"
        },
    ]

    const handleScroll =(event) => {
        const scrollPosition = event.nativeEvent.contentOffset.x;
        const index = Math.round(scrollPosition / width)
        setActiveIndex(index)
    }

    const renderDot = () => {
        return OnBoarding.map((dot,index)=> {
            if (activeindex === index){
                return(
                    <View 
                    key={`dot_${index}`}
                    style={{backgroundColor:'#64cd91',
                    height: 15,
                    width: 15,
                    borderRadius: 15,
                }}
                    >
                    </View>

                )
              
            } else {
                return (
                    <View 
                    key={`dot_${index}`}
                    style={{backgroundColor:'whitesmoke',
                    height: 15,
                    width: 15,
                    borderRadius: 15,

                }}
                    >
                    </View>
                )
            }
        })
    }
    const renderItem = ({ item, index }) => {
        return (
            <View style={{  paddingVertical:30}}>
                <View style={{paddingVertical:20,display: 'flex',justifyContent:'center',alignContent:'center',alignItems:'center'}}>

                    <Image style={{ width: 400, height: 270, }} source={item.image} />

                </View>
                <View style={{ paddingVertical:40,paddingRight:23}}>

                    <Text style={{ fontSize: 20, fontWeight: '800', color: '#64cd91',textAlign:'center'}}>{item.title}</Text>
                    <Text style={{ textAlign:'center',fontSize: 12}}>{item.text}</Text>
                    <Text style={{ textAlign:'center',fontSize: 12}}>{item.text1}</Text>
                    <Text style={{ textAlign:'center',fontSize: 11,}}>{item.text2}</Text>

                </View>

            </View>

        )
    }
    return (

        <View style={{  width: width, height: height }}>
            <FlatList
            showsHorizontalScrollIndicator={false}
                 horizontal={true}
                data={OnBoarding}
                renderItem={renderItem}
                onScroll={handleScroll}
                pagingEnabled={true}
                keyExtractor={(item)=> item.id}
                ref={FlatListRef}
                getItemLayout={getItemLayout}
                style={{}}

            />
            <View style={{ display:'flex',flexDirection:'row',gap:10,justifyContent:'center'}}>{renderDot()}</View>
            <View >
                <Pressable>
                    <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: '700', color: '#64cd91', marginBottom: 10 }}>Skip</Text>
                </Pressable>

                <Pressable onPress={() => navigation.navigate("welcome")}  >
                    <Button title="next" />
                </Pressable>
            </View>
        </View>

    )
}

export default Started;
