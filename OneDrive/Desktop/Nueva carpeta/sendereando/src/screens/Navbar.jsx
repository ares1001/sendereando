import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Componente de barra de navegación (navbar)
const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.navbarText}>Sendereando</Text>
    </View>
  );
};

// Componente de pie de página (footer)
const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>Sendereando© 2024 Todos los derechos reservados</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: 'white',
    height: 80,
    paddingTop:10,
    marginBottom:200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navbarText: {
    color: 'grey',
    fontSize:40,
  },
  footer: {
    backgroundColor: 'white',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: 'grey',
    fontSize: 14,
  },
});

export { Navbar, Footer };
