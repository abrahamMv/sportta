import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React,{useState} from 'react';
import { StyleSheet, View} from 'react-native';
import { NavigationContainer, DefaultTheme  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Perfil from './components/user/Perfil'
import Home from './components/Home'
import Register from './components/user/Register'
import Dates from './components/user/Dates'
import Camara from './components/camera'


const Stack = createStackNavigator();
export default function App() {
 
    const [dates, setDates] = useState({})
  console.log(dates);

  const MyTheme = {
    ...DefaultTheme,
  colors:{
    backgroundColor:'white'
  }
  };
   
  return (

      <View style={styles.container}>
        <NavigationContainer theme={MyTheme}>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Camara" component={Camara}  />
            <Stack.Screen name="Home" component={Home}  />
            <Stack.Screen name="Perfil" component={()=> <Perfil dates={dates} />}  options={{ title: 'Volver'}} />
            <Stack.Screen name="Register" component={() => <Register dates={dates}  setDates={setDates} /> } options={{ title: 'Volver'  }}  />
            <Stack.Screen name="Dates" component={()=> <Dates dates={dates} />} options={{ title: 'Volver' }} />
        </Stack.Navigator>
        </NavigationContainer>
     </View>
          
     
  );
}

const styles = StyleSheet.create({
  container: {
   flex:1,
   backgroundColor:'white'
  },

 
 
});
