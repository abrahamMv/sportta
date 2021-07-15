import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
const MostrarDatos = ({label,info}) => {
    return (  
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.info}>{info}</Text>
        </View>
    );
}
 
export default MostrarDatos ;

const styles = StyleSheet.create({
    container: {
     display:'flex',
     justifyContent:'center',
     alignItems:'center',
     paddingBottom:10
    },
  
    label:{
        fontSize:20,
      

    },
    info:{
        fontSize:15,
        color:'green'
    }
   
   
  });
  