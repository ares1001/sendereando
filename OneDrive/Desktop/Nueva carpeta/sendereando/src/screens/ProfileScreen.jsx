import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
    const navigation = useNavigation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const dismissKeyboard = () => {
      Keyboard.dismiss();
    };
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    return (
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
            <View style={styles.container}>
                {/* Logo */}
                <View><Text style={styles.navbarText}>Perfil</Text></View>
        <View style={styles.Burguernavbar}>
          <TouchableOpacity onPress={toggleMenu}>
            <Ionicons name="menu-outline" size={32} color="orange" />
          </TouchableOpacity>
        </View>

        {/* Menú desplegable */}
        {isMenuOpen && (
          <View style={styles.dropdown}>
          <TouchableOpacity style={styles.option} onPress={() => navigation.push('Login')}>
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
          <TouchableOpacity style={styles.option} onPress={() => navigation.push('Profile')}>
            <View style={styles.optionContent}>
              <Ionicons name="person" size={16} color="orange" />
              <Text style={styles.optionText}> Perfil</Text>
            </View>
          </TouchableOpacity>
        </View>
        )}

                {/* Title and Forms */}
                <View style={styles.content}>
                    {/* Title */}
                    <View style={styles.titleContainer}>
          <Text style={styles.title}>Mi perfil</Text>
        </View>

                    {/* Forms */}
                    <View style={styles.formContainer}>
                        <TextInput style={styles.input} label="Email" />
                        <TextInput style={styles.input} label="Usuario" />
                        <TextInput style={styles.input} label="Contraseña" />
                        

                        {/* Button */}
                        <TouchableOpacity style={styles.button} onPress={() => navigation.push('Success')}>
                            <Text style={styles.buttonText}>Editar mis datos</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

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
        fontSize: 18,
        color:"orange"
      },
      
    formContainer: {
        marginTop: 120,
    },
    input: {
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#348888',
        paddingVertical: 12,
        borderRadius: 40,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    
});