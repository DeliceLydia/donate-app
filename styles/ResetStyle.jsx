import {StyleSheet} from 'react-native';


const Reset= StyleSheet.create({
    container:{
        paddingHorizontal: 20

    },
bar:{
    display: 'flex', 
    flexDirection: 'row', 
    gap: 15 

},
Viewimg:{
    display: 'flex',
    alignItems: 'center', 
    justifyContent: 'center',
     paddingVertical: 20

},
img:{
    width: 300, 
    height: 250

},
text:{
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 30,
    

},
text2:{
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
    marginLeft:10
    
},
text1:{
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
    color:"red"
},
label:{
    display:'flex',
    flexDirection:'row'

},

    input: {
        
        borderRadius: 20,
        width: "100%",
        color: "black",
        height: 50,
        borderWidth: 1,
        backgroundColor: "#ffffff",
        borderColor: '#ebecee',
        marginBottom: 10,
        paddingLeft:10
      },

})

export default Reset;