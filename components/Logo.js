import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import sportta from '../assets/sportta.png'

const Logo = () => {
    return ( 
        <View>
             <View style={styles.container}>
            <Image source={sportta} style={styles.image} />
            </View>
        </View>
     );
}
 
export default Logo;

const styles = StyleSheet.create({
    container: {
     
        display:'flex',
        alignItems:'center'
       },
   
       image:{
           width:250,
           height:150,
           resizeMode:'contain',
           marginTop:25
       },
   
   
  });
  