import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,ScrollView ,Alert } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { useNavigation } from "@react-navigation/native";


const Formulario = ({dates, setDates}) => {
    const navigation = useNavigation();

    const [selectedOption, setselectedOption] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [barrio, setBarrio] = useState('');

    const saveDates = () =>{

        if(name.trim()==='' || email.trim()==='' || barrio.trim()==='' || selectedOption.trim()==='' ){
            Alert.alert(
                'Error',
                'Todos los campos son obligatorios',
                [{
                    text:'Ok'
                }]
            )
            return;
        }

        const info = {name, email,barrio,selectedOption}

        setDates(
            info
        );
        navigation.navigate('Perfil')
    }
     return ( 
        <View>
    <ScrollView>
     <View>
        <View style={styles.container}>
            <View >
                <Text style={styles.label}>Nombre</Text>
                <TextInput  style={styles.input}
                    placeholder='Pedro Ramirez'
                    onChangeText={text =>setName(text)}
                ></TextInput>
            </View>

            <View >
                <Text style={styles.label}>Email</Text>
                <TextInput  style={styles.input}
                    placeholder='Pedro@mail.com'
                    keyboardType='email-address'
                    onChangeText={text =>setEmail(text)}
                ></TextInput>
            </View>

            <View >
                <Text style={styles.label}>Ciudad</Text>
                <Picker style={styles.input}
                    selectedValue={selectedOption}
                    onValueChange={(itemValue, itemIndex) =>
                        setselectedOption(itemValue)
                    }>
                    <Picker.Item label="medellin" value="medellin" />
                    <Picker.Item label="santa marta" value="santa marta" />
                    <Picker.Item label="bogota" value="bogota" />
                </Picker>
            </View>

            <View >
                <Text style={styles.label}>Sector o Barrio</Text>
                <TextInput  style={styles.input}
                    placeholder='Poblado'
                    onChangeText={text =>setBarrio(text)}
                ></TextInput>
            </View>
            <View style={styles.contenB}>
                <TouchableOpacity style={styles.button}
                     onPress={() =>saveDates()}
                >
                    <Text style={styles.buttonText}>Siguiente</Text>
                </TouchableOpacity>
            </View>

        </View>
    </View>
    </ScrollView>
        </View>
     );
}
 
export default Formulario;

const styles = StyleSheet.create({

    container:{
        paddingTop:30,
        paddingHorizontal:40
    },
    label:{
        fontWeight:'bold',
        fontSize:20,
        marginTop:20
    },

    input:{
        marginTop:10,
        height:40,
        borderBottomColor: "#939393",
        borderBottomWidth: 1,
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
        
    },

   
   
  });