
import React from "react";
import { View, Text, Image, TouchableOpacity, StatusBar, Dimensions,StyleSheet } from 'react-native'
import { CheckBox } from "react-native-elements";


const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export const Card = ({Cimg,Name}) => {

    const [checked, setChecked] = useState(false);
    const toggleChecked = () =>{
        setChecked(!checked);
    }
    return (
        <View style={{ paddingVertical: 30, paddingHorizontal: 10, width: width, height: height}}>
            <View style={{
                display: 'flex',
                flexDirection: "row",
                // justifyContent: "space-between",
                // alignContent: 'center',
                height: 90,
                borderWidth: 2,
                borderRadius: 10,
                borderColor: 'whitesmoke',
                gap:15,
                paddingLeft:10
                }}>

                <Image source={{}} style={{ width: "20%", height: 70 }} />
                <Text style={{marginTop:30,fontSize:15,fontWeight:'200',}}>Abbr</Text>
                <Text style={{marginTop:30,fontSize:15,fontWeight:'600',}}>Name</Text>
                <View>
                     <TouchableOpacity onPress={toggleChecked} style={[styles.checkbox, checked && styles.checked]}>
                    <CheckBox
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    checkedColor="#1ebb61"
                    
                    />

                </TouchableOpacity>
                </View>
        
            </View>
            <StatusBar />
        </View>

    )
}
const styles = StyleSheet.create({
    checkbox: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#1ebb61',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:29,
      fontSize:15,
      fontWeight:'200', 
      left:130
      },
      checked: {
        backgroundColor: '#000',
      },
      checkmark: {
        color: '#fff',
        fontSize: 16,
      },
})
