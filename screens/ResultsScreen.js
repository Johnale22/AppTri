import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResultCard = ({ date, teamA, teamB, score }) => (
  <View style={styles.card}>
    <View style={styles.cardHeader}>
      <Text style={styles.resultDate}>{date}</Text>
    </View>
    
    <View style={styles.teamsContainer}>
      <View style={styles.teamInfo}>
        <Text style={styles.teamText}>{teamA}</Text>
      </View>
      <Text style={styles.scoreText}>{score}</Text>
      <View style={styles.teamInfo}>
        <Text style={styles.teamText}>{teamB}</Text>
      </View>
    </View>
  </View>
);

export default function ResultsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Resultados</Text>
      
      <ResultCard 
        date="14 Jun 2026"
        teamA="Ecuador"
        teamB="Costa de Marfil"
        score="2 - 1"
      />
      
      <ResultCard 
        date="20 Jun 2026"
        teamA="Ecuador"
        teamB="Curazao"
        score="en espera"
      />

      <ResultCard 
        date="25 Jun 2026"
        teamA="Ecuador"
        teamB="Alemania"
        score="en espera"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E293B',
    padding: 20,
  },
  pageTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFC700',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#0B2046',
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    borderLeftWidth: 5,
    borderLeftColor: '#ED1C24', // Rojo bandera para resaltar el resultado
  },
  cardHeader: {
    marginBottom: 10,
  },
  resultDate: {
    color: '#94A3B8',
    fontSize: 14,
  },
  teamsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  teamInfo: {
    flex: 1,
    alignItems: 'center',
  },
  teamText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  scoreText: {
    color: '#FFC700',
    fontSize: 22,
    fontWeight: 'bold',
    marginHorizontal: 15,
  },
});