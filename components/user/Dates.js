import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Logo from '../Logo'
import futbol2 from '../../assets/futbol2.png'
import MostrarDatos from '../MostrarDatos';


const Dates = ({dates}) => {
    return ( 
        <View>
           <View style={{flex:1}}>
           </View>
           <View style={{top:-60}}> 
            <Logo />
            </View>

            <View style={styles.containTitle}>
                <Text style={styles.Text}>Hola <Text style={{color:'green'}}>{dates.name}</Text></Text>
            </View >
                
            <View style={styles.contentUser}>
            <Image source={futbol2} style={styles.user} />
            </View>

            <View style={styles.containTitle}>
                <Text style={styles.Text}>Confirma los datos de tu</Text>
                <Text style={styles.Text2}>jugador</Text>
            </View>

            <View style={styles.dateContainer}>
                <MostrarDatos label="Nombre" info={dates.name} />
                <MostrarDatos label="Correo" info={dates.email} />
                <MostrarDatos label="Ciudad" info={dates.selectedOption} />
                <MostrarDatos label="Barrio" info={dates.barrio} />
            </View>

            <View style={styles.contenB}>
                <TouchableOpacity style={styles.button}
                >
                    <Text style={styles.buttonText}>Ok</Text>
                </TouchableOpacity>
            </View>
            
        </View>
     );
}
 
export default Dates;

const styles = StyleSheet.create({

    containTitle:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        top:-90
        
    },
  
    Text:{
        fontSize:25,
        color: '#000531'
    },

    contentUser:{
        
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginTop:30,
        top:-90
    },
    user:{
        width:300,
        height:300,
     
    },

    Text2:{
        fontSize:25,
        color: 'green',
        paddingBottom:20
    },

    dateContainer:{
        width: 300,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        marginLeft:40,
        top:-70
        
    },

    button: {
        backgroundColor: "green",
        padding: 15,
        borderRadius:10,
        width:300,
        display:'flex',
        alignItems:'center',
        marginTop:40
      },
      buttonText: {
        fontSize: 20,
        color: '#fff',
      }, 

    contenB:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        top:-105
    },

  
   
   
  });
  