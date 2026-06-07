import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const MatchCard = ({ date, time, teamA, teamB, score, location }) => (
  <View style={styles.card}>
    <View style={styles.cardHeader}>
      <Text style={styles.matchDate}>{date}</Text>
      <Text style={styles.matchTime}>{time}</Text>
    </View>
    
    <View style={styles.teamsContainer}>
      <Text style={styles.teamText}>{teamA}</Text>
      <Text style={styles.vsText}>{score ? score : 'VS'}</Text>
      <Text style={styles.teamText}>{teamB}</Text>
    </View>
    
    <Text style={styles.matchLocation}>{location}</Text>
  </View>
);

export default function CalendarScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.pageTitle}>Calendario de Partidos</Text>
      
      {/* Equipo A y Equipo B separados correctamente */}
      <MatchCard 
        date="14 Jun 2026"
        time="18:00"
        teamA="Ecuador"
        teamB="Costa de Marfil"
        score="VS"
        location="Philadelphia Stadium"
      />
      
      <MatchCard 
        date="20 Jun 2026"
        time="19:00"
        teamA="Ecuador"
        teamB="Curazao"
        score="VS"
        location="GEHA Field at Arrowhead Stadium"
      />
      
      <MatchCard 
        date="25 Jun 2026"
        time="15:00"
        teamA="Ecuador"
        teamB="Alemania"
        score="VS"
        location="MetLife Stadium"
      />
    </ScrollView>
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
    backgroundColor: '#0B2046', // Azul FEF
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#475569',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#475569',
    paddingBottom: 10,
  },
  matchDate: {
    color: '#94A3B8',
    fontSize: 14,
  },
  matchTime: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  teamsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 10,
  },
  teamText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  vsText: {
    color: '#FFC700',
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  matchLocation: {
    color: '#94A3B8',
    fontSize: 12,
    textAlign: 'center',
  },
});