import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* Sección del Logo FEF */}
      <View style={styles.logoContainer}>
        <Image 
          source={require('../assets/images/logo-fef.png')} // Asegúrate de que esta ruta sigue siendo correcta
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.titleText}>FEF</Text>
      </View>

      {/* Sección de Texto de Bienvenida */}
      <View style={styles.welcomeTextContainer}>
        <Text style={styles.welcomeText}>
          Vive el Mundial junto a <Text style={styles.highlightText}>Ecuador</Text>
        </Text>
      </View>

      {/* Sección de Botones */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonMain} onPress={() => navigation.navigate('Main')}>
          <Text style={styles.buttonTextDark}>INGRESAR</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.buttonSecondary}>
          <Text style={styles.buttonTextDark}>SALIR</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E293B', // Azul oscuro de fondo (aproximado)
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  logo: {
    width: 150,
    height: 150,
  },
  titleText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: -20,
  },
  welcomeTextContainer: {
    marginBottom: 80,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  highlightText: {
    color: '#FFC700', // Amarillo FEF
  },
  buttonContainer: {
    width: '100%',
  },
  buttonMain: {
    backgroundColor: '#FFC700', // Amarillo FEF
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonSecondary: {
    backgroundColor: '#FFC700', // Mismo color en el diseño
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonTextDark: {
    color: '#0B2046', // Azul FEF
    fontSize: 18,
    fontWeight: 'bold',
  },
});