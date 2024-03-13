import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
  Button,
} from "react-native";
import { TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import axios from "axios";
import * as SecureStore from 'expo-secure-store'

export default function LoginScreen() {
  const dismissKeyboard = () => {
    // Keyboard.dismiss();
  };


  async function save(key, value) {
    await SecureStore.setItemAsync(key, value);
  }


  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);


  async function signInWithEmail() {
    setLoading(true);
    const login = await axios
      .post(
        "https://c16-120-m-reactnative-back-dev.up.railway.app/api/auth/login",
        {
          email,
          pass: password,
        }
      )
      .then((response) => response)
      .then(
        (data) => data
        
        // navigation.push("Success")
      )
      .catch((error) => console.error(error));
    if (login.data.status === 200) {
       
      
       save("token", login.data.body);
     
      // const miToken=await getValueFor("token")
     

      navigation.push("Populares");
    }


  }
  
  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
       <View style={styles.containerImage}>
          <Image style={styles.img} source={require('../../assets/Logo.png')}/>
        </View>
        <View style={styles.titleText}>
          <Text style={styles.titleFonts}>Iniciar Sesión</Text>
        </View>
      <View style={styles.formContainerUser}>
         <TextInput
              label="Usuario"
              onChangeText={(text) => setEmail(text)}
              value={email}
              placeholder="email@address.com"
              autoCapitalize={"none"}
            /></View>
            <View style={styles.formContainerPass}>
          <TextInput
              label="Contraseña"
              onChangeText={(text) => setPassword(text)}
              value={password}
              secureTextEntry={true}
              placeholder="Password"
              autoCapitalize={"none"}
            />
         
                </View>
                <View style ={styles.containerButton}>
            <TouchableOpacity  onPress={()=> signInWithEmail()}>
                        <Text style={styles.TextButton}>Iniciar sesion</Text>
                    </TouchableOpacity>
          </View>
          <View style={styles.forgetContainer}>
            <Text style={styles.forgetAWText}>¿Aún no tienes cuenta?   </Text>
            <TouchableOpacity onPress={() => navigation.push("SignUp")}>
              <Text style={styles.forgetText}>Registrate</Text>
            </TouchableOpacity>
          </View>

      
      <View style={styles.forgottenContainer}>
        <TouchableOpacity onPress={() => navigation.push("Forget")}>
          <Text style={styles.forgottenText}>¿Olvidaste tu Contraseña?</Text>
        </TouchableOpacity>
      </View>
      
                        </View>
                        </TouchableWithoutFeedback>
      
                                            
  )}
    


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal:20,
    backgroundColor: "rgb(255 255 255 )",
    
  },

  img:{ 
width:360,
height:150,
marginBottom:100,
marginLeft:50
  },

  titleText: {
    marginBottom:20
  },


  titleFonts: {
    color: "grey",
    fontWeight: "700",
    fontSize: 28,
  },
  formContainerUser: {
    width:"100%",
    fontWeight: "400",
    fontSize: 16,
    padding: 10,
    gap:8
  },

  formContainerPass: {
    width:"100%",
    fontWeight: "400",
    fontSize: 16,
    padding: 10,
    gap:8
  },

  containerButton: {
    height:40,
    width:134,
    margin:10,
    borderRadius:100,
    borderColor:"black",
    backgroundColor:"rgb(52 136 136)",
    alignItems: "center",
    justifyContent: "center",
    
    
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
    padding:5,
    fontWeight:400,
    
  },
  forgetContainer: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  forgetAWText: {
    color: "black",
    fontSize: 14,
  },
  forgetText: {
    textDecorationLine: "underline",
    color: "rgb(52 136 136)",
    fontSize: 14,
  },
  forgottenContainer: {
    flex: 0,
    alignContent: "center",
    justifyContent: "center",
  },
  forgottenText: {
    textAlign: "center",
    color: "grey",
    textDecorationLine: "underline",
  },



});


