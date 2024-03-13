import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Keyboard, TouchableWithoutFeedback,Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from 'react';


const Datos = () => {
  const navigation = useNavigation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const route = useRoute();
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

 
  const trail = route.params;
  console.log(trail)
  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        {/* Navbar */}
        <View style={styles.navbarContainer}>
          <View style={styles.navbar}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={32} color="black" />
            </TouchableOpacity>
            <Text style={styles.navbarText}>   Informacion</Text>
            <View style={{ width: 32 }}></View>
          </View>
        </View>

        {/* Título "Datos" */}
        <View style={styles.titleContainer}>
        
          <Text style={styles.title}>{trail.nombreRuta}</Text>
          <Text style={styles.title2}>{trail.provincia}</Text>
          <Image style={styles.img} source={require('../../assets/1.png')}/>
        </View> 

        <View style={styles.datosRecorrido}>
          {/* Lista de datos de recorrido */}
          <View style={styles.datosRecorrido}>
            <Text style={styles.datosRecorridoText}>Informacion general del sendero</Text>
            <View style={styles.lista}>
              <Ionicons name="arrow-up" size={20} color="orange" />
              <Text style={styles.listaItem}> {trail.ascenso}   </Text>
              <Ionicons name="pulse" size={20} color="orange" />
              <Text style={styles.listaItem}>  {trail.distancia}  </Text>
              <Ionicons name="stats-chart-outline" size={20} color="orange" />
              <Text style={styles.listaItem}> {trail.dificultad}</Text>
            </View>
          </View>

        
        
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  navbarContainer: {
    marginTop: 100, // Ajusta el margen superior del navbar según sea necesario
    backgroundColor:"rgb(228 228 224)",
    paddingTop:10,
    height:64,
    width:"100%",
    fontSize: 30,
    marginTop:90
  },
  navbar: {
    flexDirection: 'row',
  },
  navbarText: {
    fontSize: 22,
  },
  titleContainer: {
    marginTop: 10, // Ajusta el margen superior del título según sea necesario
    color: "grey",
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "grey",
    textAlign: "center",
  },
  title2:{
    fontSize: 18,
    fontWeight: 'bold',
    color: "grey",
    textAlign: "center",
  },
  datosRecorrido: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
  },
  datosRecorridoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'grey',
    textAlign: 'center',
  },
  lista: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  listaItem: {
    fontSize: 15,
    marginBottom: 5,
  },
  mapContainer: {
    marginTop: 30,
    width: '100%',
    height: 300,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    overflow: 'hidden',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default Datos;
