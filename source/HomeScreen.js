import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
function HomeScreen() {
    return (<View style={styles.container}><Text style={styles.text}>Литвиненко Родіон {'\n'} Група ІО-81 {'\n'} ЗК ІО-8116</Text></View>)
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
      textAlignVertical: 'center',
      
    },
    text: {
        color: 'white',
    }
  });

export default HomeScreen;

