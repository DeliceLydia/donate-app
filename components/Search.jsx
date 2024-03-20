import React ,{useEffect,useState}from "react";
import { Image, View, Text, TouchableOpacity, StyleSheet,Dimensions, FlatList } from "react-native";
import { Checkbox, TextInput, Icon } from 'react-native-paper';
import { FontAwesome, MaterialIcons, Feather } from '@expo/vector-icons'
import { StatusBar } from "react-native";
import { Card } from "./SearchCard";


const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

const Search = () => {

    const [search,setSearch]= useState([])
    const [searchData,setSearchData]= useState('')

    useEffect(() => {
        if (searchData.length > 0) {
            handleSearch()
        } else {
            setSearch([])
        }
    },[searchData])

    const handleSearch =() => {
        fetch(`https://restcountries.com/v3.1/name/${searchData}`)
        .then(response => response.json())
        .then(response => {
            setSearch(response)
            console.log(response)
        })
        .catch(err => console.error(err));
    }
    
    return (
        <View style={styles.container} >
            <View style={{display:'flex',gap:30}}>
                <TextInput
                    theme={{
                        colors: {
                        primary: "white",
                        },
                    }}
                    underlineColor="white"
                    placeholder="Select your country"
                    mode="flat"
                    value={searchData}
                    onChangeText={setSearchData}
                    right={<TextInput.Icon icon="magnify" size={30} />}
                    style={styles.input}
                />
            </View>
            <Card/>

            <View>
               
                <FlatList
                data={search}
                renderItem={({item} ) => (
                    <Card 
                        Cimg={item.flags.png}
                        Abbr={item.cca2}
                        Name={item.name.common}
                       
                        />
                )}
                keyExtractor={(item, index) => index.toString()}
                />
                
            </View>
            <StatusBar />
        </View>
    )
}
export default Search;

const styles = StyleSheet.create({

    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: height,
        width: width,
        paddingHorizontal: 20,
        paddingVertical: 30,
        backgroundColor:'#FFFFFF',

    },
    input: {
        width: "100%",
        height: 50,
        borderRadius: 25,
        borderWidth: 0.003,
        borderColor: '#f7f9fc',
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        backgroundColor:'#f5f6f8'
        
    }

}

)