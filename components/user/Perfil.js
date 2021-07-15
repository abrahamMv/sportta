import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity,Alert } from 'react-native';
import user from '../../assets/user.png'
import camera from '../../assets/camera.png'
import Logo from '../Logo'
import { useNavigation } from "@react-navigation/native";
import { Camera } from 'expo-camera';


const Perfil = ({dates}) => {
    const navigation = useNavigation();

    const [picture, setPicture] = useState('');

    const [hasPermission, setHasPermission] = useState(null);

    useEffect(() => {
        (async () => {
          const { status } = await Camera.requestPermissionsAsync();
          setHasPermission(status === 'granted');
        })();
      }, []);
    
      if (hasPermission === null) {
        return <View />;

      }

    
      if (hasPermission === false) {
        return <Text>No access to camera</Text>;
      }

    
    const openCamera = () =>{
        if(hasPermission === false){
            Alert.alert(
                'Error',
                'Se han negado los permisos a la camara',
                [{
                    text:'ok'
                }]
            )
        }else{
            navigation.navigate('Camara', {setPp: setPicture });
        }
    }
  
    return ( 
        <View >
           <View>
               <Logo />
           </View>
            <View style={styles.text} >
                <Text style={styles.textPerfil} >Foto de perfil</Text>
                <Text style={styles.textP}>Usaremos la camara de su </Text> 
                    <Text style={styles.textP}>celular para tomar la foto de perfil</Text>
            </View>

                <View  style={styles.contentUser}>
                <Image source={user} style={styles.user} />
                </View>
          
                <View>
               
                <TouchableOpacity style={styles.contentCa}
                  onPress={()=>openCamera()}
                >
                    <Image source={camera} style={styles.camera} />
                </TouchableOpacity>
               
                </View>

            <View style={styles.contT}>
                <Text>Elige un usuario</Text>
                <Text style={{color:'green', fontSize:18}}>{dates.name}</Text>
            </View>

            <View style={styles.contenB}>
                <TouchableOpacity style={styles.button}
                     onPress={() => navigation.navigate('Dates')}
                >
                    <Text style={styles.buttonText}>Siguiente</Text>
                </TouchableOpacity>
            </View>
            
        </View>
     );
}
 
export default Perfil;


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
        color:'#000531'
    },
    textP:{
        color:'#CDC6C6',
    
    },
    contentUser:{
        
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginTop:50
    },
    user:{
        width:250,
        height:250,
        borderRadius:150,
        marginTop:30
    },

    contT:{
        display:'flex',
        alignItems:'center',
       
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
        alignItems:'center'
    },

    camera:{
        width:50,
        height:50,
        left:20,
        top:20
    },

    contentCa:{
        width:90,
        height:90,
        position:'relative',
        left:155,
        top:-175,
        backgroundColor:'green',
        borderRadius:80
    }
    
    
  
  });
  