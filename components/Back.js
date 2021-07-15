import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

const Back = () => {
    return ( 
        <View style={styles.container} >
            <Text style={styles.text}>Volver</Text>
        </View>
     );
}
 
export default Back;

const styles = StyleSheet.create({
    container: {
     flex:1,
     display:'flex',
     justifyContent:'center',
     alignItems:'center'
     

     
    },

    text:{
        fontSize:30
    }
  
   
   
  });
  