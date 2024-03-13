import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function SendScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image style={styles.img} source={require('../../assets/Logo.png')} />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.containerText}>
          <Text style={styles.SuccessText}>Te hemos enviando un link para recuperar tu contraseña</Text>
         
        </View>
      
        <TouchableOpacity style={styles.button} onPress={() => navigation.push("Login")}>
          <Text style={styles.buttonText}>Ir al inicio de sesion</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(255 255 255)",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  containerImage: {
    marginBottom: 60,
    alignItems: "center", // Centra horizontalmente la imagen y el icono
  },
  img: {
    width: 400,
    height: 200,
    marginBottom: 10, // Aumenta el espacio entre la imagen y el icono
  },
  checkIcon: {
    marginBottom: 20, // Aumenta el espacio entre el icono y el texto
  },
  contentContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  containerText: {
    alignItems: "center",
    marginBottom: 30,
  },
  SuccessText: {
    fontSize: 36,
    color: "grey",
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  AdventureText: {
    fontSize: 18,
    textAlign: "center",
  },
  button: {
    marginTop: 20, // Aumenta la separación entre los botones
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: "rgb(52 136 136)",
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
  },
});
