import React, {useState} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Logo from '../Logo'
import Form from '../Form'


const Register = ({dates, setDates}) => {

     
    return (  
        <View>
            <Logo />

            <View style={styles.text} >
                <Text style={styles.textPerfil} >Datos personales </Text>
                <Text style={styles.textP}>Lorem ipsum dolor sit amet, consectetur  </Text> 
               <Text style={styles.textP}>adipiscing elit. Donec aliquam maximus.</Text>

              
            </View>

            <View>
               <Form
                dates={dates}
                setDates={setDates}

                 />
            </View>
        </View>
    );
}
 
export default Register;

const styles = StyleSheet.create({
   

       text:{
        flex:1,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },

    textPerfil:{
        fontWeight:'bold',
        fontSize:25,
        color:'#000531',
        paddingTop:20
    },
    textP:{
        color:'#CDC6C6',
    
    },

  
  });
  