import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


export default function ForgetScreen() {
    const dismissKeyboard = () => {
        Keyboard.dismiss();
        
    };
    const [email, setEmail] = useState("");
    const navigation = useNavigation();

    return (
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
            <View style={styles.container}>
                {/* Logo */}
                <View style={styles.containerImage}>
                    <Image style={styles.img} source={require('../../assets/Logo.png')} />
                </View>

                {/* Title and Forms */}
                <View style={styles.content}>
                    {/* Title */}
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>
                          Recuperar Contraseña
                        </Text>
                    </View>

                    {/* Forms */}
                    <View style={styles.formContainer}>
         <TextInput
              label="Ingrese su direccion de correo"
              onChangeText={(text) => setEmail(text)}
              value={email}
              placeholder="email@address.com"
              autoCapitalize={"none"}
            />
               {/* Button */}
               <TouchableOpacity style={styles.button} onPress={() => navigation.push('Send')}>
                            <Text style={styles.buttonText}>Reenviar contraseña</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={styles.button} onPress={() => navigation.push('Login')}>
                            <Text style={styles.buttonText}>Volver</Text>
                        </TouchableOpacity></View>
                  
                    </View>
                </View>
            
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal:20,
        backgroundColor: "rgb(255 255 255 )",
        
      },
    content: {
        flex: 1,
        justifyContent: 'center',
    },
    containerImage: {
        alignItems: 'center',
        marginTop: 150,
        marginLeft:30
    },
    titleContainer: {
        alignItems: 'center',
        marginTop:100
   
    },
    titleText: {
        color: '#4C4B4B',
        fontWeight: '700',
        fontSize: 28,
    },
    formContainer: {
        marginBottom:300
    },
    input: {
        marginTop:100
    },
    button: {
        backgroundColor: '#348888',
        paddingVertical: 12,
        borderRadius: 40,
        alignItems: 'center',
        marginTop:20
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
});
