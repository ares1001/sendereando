import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";
import { TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import axios from "axios";

export default function SignUpScreen() {
  const dismissKeyboard = () => {
    // Keyboard.dismiss();
  };
  const navigation = useNavigation();
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const createUser = async () => {
    
      const response = await axios.post(
        "https://c16-120-m-reactnative-back-dev.up.railway.app/api/usuarios",
        {
          nombre: nombre,
          email: email,
          pass: pass,
          activo:1
        }
      );
      if (response.data.status === 201) {
        // Puedes redirigir a otra pantalla después de enviar los datos si es necesario
        //   navigation.push("OkRuta")
      console.log
      }
    } 
    
  

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        {/* Logo */}
        <View style={styles.containerImage}>
          <Image style={styles.img} source={require("../../assets/Logo.png")} />
        </View>

        {/* Title and Forms */}
        <View style={styles.content}>
          {/* Title */}
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>
              <Text style={styles.titleFonts}>Registro</Text>
            </Text>
          </View>

          {/* Forms */}
          <View style={styles.formContainer}>
            <Text>Nombre</Text>
            <TextInput
              style={styles.input}
              value={nombre}
              onChangeText={(text) => setNombre(text)}
            />
            <Text>Email</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />

            <Text>Contraseña</Text>
            <TextInput
              style={styles.input}
              value={pass}
              onChangeText={(text) => setPass(text)}
            />

            {/* Button */}
            <View style={styles.containerButton}>
              <TouchableOpacity onPress={createUser}>
                <Text style={styles.TextButton}>Crear cuenta</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
  img: {
    width: 360,
    height: 150,
    marginTop: 200,
    marginLeft:35
  },

  titleContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  titleFonts: {
    color: "grey",
    fontWeight: "700",
    fontSize: 28,
  },
  formContainer: {
    marginTop: 20,
  },
  input: {
    marginBottom: 20,
  },
  containerButton: {
    height: 40,
    width: 134,
    margin: 10,
    borderRadius: 100,
    borderColor: "black",
    backgroundColor: "rgb(52 136 136)",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 120,
  },
  opacityButton: {
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "green",
    backgroundColor: "#348888",
  },
  TextButton: {
    fontSize: 18,
    alignItems: "center",
    color: "white",
    padding: 5,
    fontWeight: 400,
  },
});
