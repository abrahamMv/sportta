import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import trofeo from '../assets/trofeo.png'
import Logo from './Logo'

const Home = ({ navigation}) => {
   

    return ( 
        <View>
           <Logo />

            <View style={styles.text} >
                <Text style={styles.textPerfil } >La mejor opcion para {'\n'} reservas de canchas </Text>
                <Text style={styles.textP}>Lorem ipsum dolor sit amet, consectetur  </Text> 
                    <Text style={styles.textP}>adipiscing elit. Donec aliquam maximus.</Text>
            </View>

            
            <View  style={styles.contentUser}>
                <Image source={trofeo} style={styles.user} />
           </View>

           <View style={styles.contenB}>
                <TouchableOpacity style={styles.button}
                    onPress={() => navigation.navigate('Register')}
                >
                    <Text style={styles.buttonText}>Ingresar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.textC}>
                <Text style={{color:'#000531'}}>Ya tengo una cuenta</Text>
            </View>
          
        </View>
     );
}
 
export default Home;

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
        paddingTop:100
        
    },
    textP:{
        color:'#CDC6C6',
    
    },

    contentUser:{
        
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginTop:80
    },
    user:{
        width:250,
        height:250,
        marginTop:30
    },

    button: {
        backgroundColor: "#000531",
        padding: 15,
        borderRadius:10,
        width:300,
        display:'flex',
        alignItems:'center',
        marginTop:60
      },
      buttonText: {
        fontSize: 20,
        color: '#fff',
      }, 

    contenB:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },

    textC:{
        display:'flex',
        alignItems:'center',
        paddingTop:20,
        
    }


  
  
   
   
  });
  