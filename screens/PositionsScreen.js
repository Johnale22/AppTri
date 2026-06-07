import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const PositionRow = ({ position, team, plusIcon }) => (
  <View style={styles.row}>
    <Text style={styles.posText}>{position}</Text>
    <Text style={styles.teamText}>{team}</Text>
    {plusIcon && <Text style={styles.plusIcon}>+</Text>}
  </View>
);

export default function PositionsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.pageTitle}>Tabla de Posiciones</Text>
      
      <View style={styles.tableHeader}>
        <Text style={styles.headerPos}>#</Text>
        <Text style={styles.headerTeam}>Equipo</Text>
      </View>
      
      <PositionRow position="1" team="ECUADOR" plusIcon />
      <PositionRow position="2" team="ALEMANIA" plusIcon />
      <PositionRow position="3" team="COSTA DE MARFIL" plusIcon />
      <PositionRow position="4" team="CURAZAO" plusIcon />
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
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#0B2046',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  headerPos: {
    color: '#94A3B8',
    fontWeight: 'bold',
    width: 40,
    textAlign: 'center',
  },
  headerTeam: {
    color: '#94A3B8',
    fontWeight: 'bold',
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    backgroundColor: '#0B2046',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  posText: {
    color: '#FFC700',
    fontWeight: 'bold',
    fontSize: 16,
    width: 40,
    textAlign: 'center',
  },
  teamText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
    flex: 1,
  },
  plusIcon: {
    color: '#FFC700',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 10,
  },
});