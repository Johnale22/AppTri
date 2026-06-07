import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

export default function SplashScreen({ navigation }) {
  // Inicializamos la escala del logo en 1 (tamaño original)
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Secuencia de animación: agrandar y achicar en bucle
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.2, // Crece un 20%
          duration: 800, // En 0.8 segundos
          useNativeDriver: true, // Mejora el rendimiento
        }),
        Animated.timing(scaleAnim, {
          toValue: 1, // Vuelve a su tamaño normal
          duration: 800,
          useNativeDriver: true,
        })
      ])
    ).start();

    // Cronómetro de 3.5 segundos para ir a la pantalla 'Home'
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 3500);

    return () => clearTimeout(timer);
  }, [navigation, scaleAnim]);

  return (
    <View style={styles.container}>
      {/* Usamos Animated.Image en lugar de Image para poder animarla */}
      <Animated.Image 
        source={require('../assets/images/logo-fef.png')} 
        style={[styles.logo, { transform: [{ scale: scaleAnim }] }]} 
        resizeMode="contain" 
      />
      <Text style={styles.text}>Cargando...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B2046', // Azul La Tri
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
  },
  text: {
    color: '#FFD100', // Amarillo La Tri
    marginTop: 30,
    fontSize: 18,
    fontWeight: 'bold',
  }
});