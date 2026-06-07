import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import CalendarScreen from './screens/CalendarScreen';
import ResultsScreen from './screens/ResultsScreen';
import PositionsScreen from './screens/PositionsScreen';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

// === NAVEGADOR DE PESTAÑAS Y CABECERA ===
// Recibe "navigation" para poder usar el botón de volver
function MainTabNavigator({ navigation }) {
  return (
    <SafeAreaView style={styles.mainContainer}>
      
      {/* CABECERA PERSONALIZADA (Idéntica a tu Figma) */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.backIcon}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Mundial 2026</Text>
      </View>
      
      {/* PESTAÑAS SUPERIORES */}
      <Tab.Navigator
        initialRouteName="Calendar"
        screenOptions={{
          tabBarStyle: { backgroundColor: '#222831', elevation: 0, shadowOpacity: 0 },
          tabBarIndicatorStyle: { backgroundColor: '#026499', height: 3, borderRadius: 5 }, // Línea azul debajo de la pestaña activa
          tabBarActiveTintColor: '#FFFFFF',
          tabBarInactiveTintColor: '#88929E',
          tabBarLabelStyle: { fontSize: 15, fontWeight: 'bold', textTransform: 'capitalize' },
        }}
      >
        <Tab.Screen name="Calendar" component={CalendarScreen} options={{ title: 'Calendario' }} />
        <Tab.Screen name="Results" component={ResultsScreen} options={{ title: 'Resultados' }} />
        <Tab.Screen name="Positions" component={PositionsScreen} options={{ title: 'Posiciones' }} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

// === NAVEGADOR PRINCIPAL ===
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={MainTabNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#222831', // Color de fondo general oscuro del Figma
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40, // Espacio para la barra de estado del celular
    paddingBottom: 20,
    backgroundColor: '#222831',
  },
  backButton: {
    backgroundColor: '#ffffff', // Botón celeste
    width: 45,
    height: 45,
    borderRadius: 12, // Bordes redondeados como en Figma
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#4DA8DA',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 5,
  },
  backIcon: {
    color: '#222831',
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
  },
});