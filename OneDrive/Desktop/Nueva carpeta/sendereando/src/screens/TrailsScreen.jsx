
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import * as SecureStore from 'expo-secure-store'




const Trails =  () => {

  async function getValueFor(key) {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
      return result
    } else {
      alert('No values stored under that key.');
    }
  }
  const [provincia, setProvincia] = useState("");
  const [localidad, setLocalidad] = useState("");
  const [nombreRuta, setNombreRuta] = useState("");
  const [distancia, setDistanciaRecorrido] = useState("");
  const [dificultad, setDificultad] = useState("");
  const [ascensoTotal, setAscensoTotal] = useState("");
  const navigation = useNavigation();
 
  const sendRoutes = async () => {
    try {
      const token = await  getValueFor("token")
      console.log(token)
      const response = await axios.post(
        "https://c16-120-m-reactnative-back-dev.up.railway.app/api/trails",{
       
        
          provincia: provincia,
          localidad: localidad,
          nombreRuta: nombreRuta,
          distancia,
          dificultad,
          ascenso: ascensoTotal,
      },
        {headers:{Authorization:token}}
      
      )
     if (response.data.status === 201) {
      // Puedes redirigir a otra pantalla después de enviar los datos si es necesario
      navigation.push("OkRuta")}
    } catch (error) {
      console.error("Error al enviar los datos al backend:", error);
    }
  };

  // const dismissKeyboard = () => {
  //   Keyboard.dismiss();
  // };

  return (
    // <TouchableWithoutFeedback onPress={dismissKeyboard}>
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image style={styles.img} source={require("../../assets/Logo.png")} />
      </View>
      <View style={styles.titleText}>
        <Text style={styles.titleFonts}>Agregar Sendero</Text>
      </View>
      <Text>Provincia:</Text>
      <TextInput
        style={styles.input}
        value={provincia}
        onChangeText={(text) => setProvincia(text)}
      />
      <Text>Localidad:</Text>
      <TextInput
        style={styles.input}
        value={localidad}
        onChangeText={(text) => setLocalidad(text)}
      />
      <Text>Nombre del sendero:</Text>
      <TextInput
        style={styles.input}
        value={nombreRuta}
        onChangeText={(text) => setNombreRuta(text)}
      />
      <Text>Distancia del recorrido:</Text>
      <TextInput
        style={styles.input}
        value={distancia}
        onChangeText={(text) => setDistanciaRecorrido(text)}
      />
      <Text>Dificultad:</Text>
      <TextInput
        style={styles.input}
        value={dificultad}
        onChangeText={(text) => setDificultad(text)}
      />
      <Text>Ascenso total:</Text>
      <TextInput
        style={styles.input}
        value={ascensoTotal}
        onChangeText={(text) => setAscensoTotal(text)}
      />
      <TouchableOpacity style={styles.button} onPress={sendRoutes}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.push("Populares")}
      >
        <Text style={styles.buttonText}>Volver</Text>
      </TouchableOpacity>
    </View>
    // </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "rgb(255 255 255 )",
  },
  containerImage: {
    alignItems: "center",
    paddingLeft: 50,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  titleText: {
    marginBottom: 20,
    alignItems: "center",
  },
  titleFonts: {
    color: "grey",
    fontWeight: "700",
    fontSize: 28,
  },
  button: {
    backgroundColor: "rgb(52 136 136)",
    borderRadius: 20,
    alignItems: "center",
    paddingVertical: 15,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Trails;
