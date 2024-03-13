import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import axios from 'axios';

const Populares = () => {
  const navigation = useNavigation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [trails, setTrails] = useState([]);



  const fetchTrails = async () => {
    try {
      const response = await axios.get('https://c16-120-m-reactnative-back-dev.up.railway.app/api/trails');
      setTrails(response.data.body);
    } catch (error) {
      console.error('Error fetching trails:', error);
    }
  };

  useEffect(() => {
    fetchTrails();
  }, []);
  

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        {/* Navbar */}
        <View><Text style={styles.navbarText}>Bienvenido</Text></View>
        <View style={styles.Burguernavbar}>
          <TouchableOpacity onPress={toggleMenu}>
            <Ionicons name="menu-outline" size={32} color="orange" />
          </TouchableOpacity>
        </View>

        {/* Menú desplegable */}
        {isMenuOpen && (
     <View style={styles.dropdown}>
     <TouchableOpacity style={styles.option} onPress={() => navigation.push('Populares')}>
       <View style={styles.optionContent}>
         <Ionicons name="home" size={16} color="orange" />
         <Text style={styles.optionText}> Inicio</Text>
       </View>
     </TouchableOpacity>
     <TouchableOpacity style={styles.option} onPress={() => navigation.push('Trails')}>
       <View style={styles.optionContent}>
         <Ionicons name="pencil" size={16} color="orange" />
         <Text style={styles.optionText}> Agregar Sendero</Text>
       </View>
     </TouchableOpacity>
     <TouchableOpacity style={styles.option} onPress={() => navigation.push('Pro')}>
       <View style={styles.optionContent}>
         <Ionicons name="person" size={16} color="orange" />
         <Text style={styles.optionText}> Perfil</Text>
       </View>
     </TouchableOpacity>
   </View>
   
        )}

        {/* Título "Senderos Populares" */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Los senderos</Text>
        </View>
        <View style={styles.cardContainer}>
          {/* Mapear los datos de los senderos en las tarjetas */}
          {trails.map((trail, index) => {
            return (
              <View key={index} style={styles.card}>
                <Text style={styles.cardText}>{trail.nombreRuta}</Text>
                <Text style={styles.cardTextProvincia}>{trail.provincia}</Text>

                {/* Aquí agregamos los botones */}
                <View style={styles.buttonContainer}>
                  <TouchableOpacity style={styles.guardarButton} onPress={() => navigation.push('Success')}>
                    <Text style={styles.GuardarbuttonText}>Guardar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.verButton} onPress={() => navigation.navigate('Datos', trail)}>
                     <Text style={styles.VerbuttonText}>Ver más</Text>
                      </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </View>
     
      
        {/* Espacios estilo tarjeta*/}
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
  Burguernavbar: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10, // Mover el navbar hacia abajo
  },
  navbarText: {
    backgroundColor:"rgb(228 228 224)",
    paddingTop:10,
    height:64,
    width:"100%",
    textAlign:"center",
    fontSize: 30,
    marginTop:90
  },
  titleContainer: {
    marginBottom: 10,
    color:"grey"
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color:"grey",
    textAlign:"center"
  },
  dropdown: {
    position:"absolute",
    top: 150, // Ajusta la posición del menú desplegable según sea necesario
    left:60, // Ajusta la posición del menú desplegable según sea necesario
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    zIndex:1,
    textAlign:"left"
    
  },
  option: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    color:"orange",
    fontWeight:"bold"
  },
  cardContainer: {
    marginTop: 50,
    alignContent:"space-between"
  },
  card: {
    marginBottom:20,
    height:139,
    width:"100%",
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
  },
  cardText: {
    fontSize: 16,
    textAlign: 'left',
    marginLeft:40,
    marginTop:10,
    fontWeight:"bold"
  },
  cardTextProvincia: {
    fontSize: 14,
    textAlign: 'left',
    marginLeft:40,
  },
  buttonContainer: {
    marginTop:40,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  guardarButton: {
    backgroundColor: 'rgb(255 255 255)',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 100,
    marginLeft: 10,
    borderWidth:1,
    borderColor:"grey"
  },
  verButton: {
    backgroundColor: 'rgb(52 136 136)',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 100,
    marginLeft: 10,
    borderWidth:1,
    borderColor:"grey"
  },
  VerbuttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  GuardarbuttonText: {
    color: 'rgb(52 136 136)',
    fontWeight: 'bold',
  }
});

export default Populares;

