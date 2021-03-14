import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
  TextInput,
  ActivityIndicator,
} from 'react-native'
import { AntDesign} from '@expo/vector-icons'
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar'

const Item = ({ poster, title, plot, year, rated, released, runtime, genre, director, writer, actors, language, country, awards, imdbRating, imdbVotes, imdbID, type, production }) => {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <>
      <Modal animationType="slide" transparent={false} visible={modalVisible}>
        <View style={styles.modal}>
          <ScrollView>
          <Text style={styles.inputField}>{title}</Text>
          <Image source={poster} style={styles.poster} />
          <View style={{ flexDirection: 'column', paddingTop: 20 }}>
            <Text style={styles.keyText}>Year: <Text style={styles.text}>{year}{'\n'}</Text></Text>
            <Text style={styles.keyText}>Rated: <Text style={styles.text}>{rated}{'\n'}</Text></Text>
            <Text style={styles.keyText}>Released: <Text style={styles.text}>{released}{'\n'}</Text></Text>
            <Text style={styles.keyText}>Runtime: <Text style={styles.text}>{runtime}{'\n'}</Text></Text>
            <Text style={styles.keyText}>Genre: <Text style={styles.text}>{genre}{'\n'}</Text></Text>
            <Text style={styles.keyText}>Director: <Text style={styles.text}>{director}{'\n'}</Text></Text>
            <Text style={styles.keyText}>Writer: <Text style={styles.text}>{writer}{'\n'}</Text></Text>
            <Text style={styles.keyText}>Actors: <Text style={styles.text}>{actors}{'\n'}</Text></Text>
            <Text style={styles.keyText}>Language: <Text style={styles.text}>{language}{'\n'}</Text></Text>
            <Text style={styles.keyText}>Country: <Text style={styles.text}>{country}{'\n'}</Text></Text>
            <Text style={styles.keyText}>Awards: <Text style={styles.text}>{awards}{'\n'}</Text></Text>
            <Text style={styles.keyText}>imdbRating: <Text style={styles.text}>{imdbRating}{'\n'}</Text></Text>
            <Text style={styles.keyText}>imdbVotes: <Text style={styles.text}>{imdbVotes}{'\n'}</Text></Text>
            <Text style={styles.keyText}>imdbID: <Text style={styles.text}>{imdbID}{'\n'}</Text></Text>
            <Text style={styles.keyText}>Type: <Text style={styles.text}>{type}{'\n'}</Text></Text>
            <Text style={styles.keyText}>Production: <Text style={styles.text}>{production}{'\n'}</Text></Text>
            <Text style={styles.text}>{plot}</Text>
            
          </View>
          </ScrollView>

          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            style={styles.close}
          >
            <AntDesign name="closecircleo" size={30} color="white"/>
          </TouchableOpacity>
        </View>
      </Modal>
      <TouchableOpacity
        style={styles.block}
        onPress={() => setModalVisible(true)}
      >
        <Image style={styles.img} source={poster} />
        <View style={{ flexDirection: 'column', width: '70%' }}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.secondary}>{year}</Text>
          <Text style={styles.secondary}>{type}</Text>
        </View>
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '2%',
    marginBottom: '2%',
  },
  block: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#00B672',
    borderRadius: 5,
    marginTop: 5,
    padding: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: '#000',
    color: '#fff',
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    color: '#00B672'
  },
  text: {
    fontSize: 20,
    color: '#fff'
  },
  keyText: {
    fontSize: 20,
    color: '#00B672'
  },
  secondary: {
    color: '#fff',
  },
  img: { height: 120, width: 120 },
  close: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  modal: {
    padding: 20,
    flex: 1,
    backgroundColor: '#000'
  },
  inputField: {
    fontSize: 24,
    backgroundColor: '#000',
    color: '#00B672',
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Item