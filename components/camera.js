import React,{useEffect, useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import { Camera } from 'expo-camera';
import camara2 from '../assets/camara2.png'


 const camara = () => {
    const [type, setType] = useState(Camera.Constants.Type.back);
  
     return ( 
        <View style={styles.container}>

        <Camera style={styles.camera} type={type}>
          <View >
          
            <TouchableOpacity
                style={styles.textC}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}>
               <Text style={{color:'white'}}> <Image source={camara2} style={styles.image}/></Text>
            </TouchableOpacity>
          </View>
        <View style={styles.contentButton}>
          <TouchableOpacity style={styles.button}
            
          >

              <Text></Text>
          </TouchableOpacity>
          </View>
        </Camera>
      </View>
      );
 }
  
 export default camara;

 const styles = StyleSheet.create({
    container: {
     flex:1,
     display:'flex',
     justifyContent:'center',
     alignItems:'center',
     backgroundColor:'green'
     
    },

    camera:{
        width:300,
        height:600,
        borderRadius:100
    },

    textC:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'flex-end',
        color:'#FFFFFF'
    },
    button:{
        width:60,
        height:60,
        borderRadius:100,
        backgroundColor:'skyblue',
        borderColor:'blue',
        borderWidth:2
    },
    contentButton:{
        
        display:'flex',
        flexDirection:'row-reverse',
        justifyContent:'center',
        alignContent:'flex-end',
        top:530
    },
    image:{
        width:50,
        height:50
    }
    
  
   
   
  });
  