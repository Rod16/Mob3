import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Image, ScrollView } from 'react-native';

const Poster = (num) => {
    if (num.num == 2) {
      return <Image source={require('./Poster_01.jpg')} style={styles.img} />
    } else if (num.num == 3) {
      return <Image source={require('./Poster_02.jpg')} style={styles.img} />
    } else if (num.num == 4) {
      return <Image source={require('./Poster_03.jpg')} style={styles.img} />
    } else if (num.num == 6) {
      return <Image source={require('./Poster_05.jpg')} style={styles.img} />
    } else if (num.num == 7) {
      return <Image source={require('./Poster_06.jpg')} style={styles.img} />
    } else if (num.num == 8) {
        return <Image source={require('./Poster_07.jpg')} style={styles.img} />
    } else if (num.num == 9) {
        return <Image source={require('./Poster_08.jpg')} style={styles.img} />
    } else if (num.num == 11) {
        return <Image source={require('./Poster_10.jpg')} style={styles.img} />
    } else {
        return <Image source={require('./empty.jpg')} style={styles.img} />
    }
}
const Item = ({ numb, title, year, type }) => (
    <View style={styles.block}>
      <Poster num={numb} />
      <View style={{ flexDirection: 'column', width: '70%' }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.year}>{year}</Text>
        <Text style={styles.type}>{type}</Text>
      </View>
    </View>
)


function Movie() {
    const movieData=[
        {
            id: '1',
            title: "Long title that want to break your layout. Long title that want to break your layout. Long title that want to break your layout. Long title that want to break your layout",
            year:"2020",
            imdbID: "noid",
            type: "test",
            poster: ""
        },
        {
            id: '2',
            title: "Star Wars: Episode IV - A New Hope",
            year:"1977",
            imdbID: "tt0076759",
            type: "movie",
            poster: "Poster_01.jpg" 
        },
        {
            id: '3',
            title: "Star Wars: Episode V - The Empire Strikes Back",
            year:"1980",
            imdbID: "tt0080684",
            type: "movie",
            poster: "Poster_02.jpg"  
        },
        {
            id: '4',
            title: "Star Wars: Episode VI - Return of the Jedi",
            year:"1983",
            imdbID: "tt0086190",
            type: "movie",
            poster: "Poster_03.jpg"  
        },
        {
            id: '5',
            title: "Star Wars: Episode VII - The Force Awakens",
            year:"",
            imdbID: "tt2488496",
            type: "movie",
            poster: "" 
        },
        {
            id: '6',
            title: "Star Wars: Episode I - The Phantom Menace",
            year:"1999",
            imdbID: "tt0120915",
            type: "movie",
            poster: "Poster_05.jpg" 
        },
        {
            id: '7',
            title: "Star Wars: Episode III - Revenge of the Sith",
            year:"2005",
            imdbID: "tt0121766",
            type: "movie",
            poster: "Poster_06.jpg" 
        },
        {
            id: '8',
            title: "Star Wars: Episode II - Attack of the Clones",
            year:"2002",
            imdbID: "tt0121765",
            type: "movie",
            poster: "Poster_07.jpg" 
        },
        {
            id: '9',
            title: "Star Trek",
            year:"2009",
            imdbID: "tt0796366",
            type: "movie",
            poster: "Poster_08.jpg" 
        },
        {
            id: '10',
            title: "Star Wars: Episode VIII - The Last Jedi",
            year:"2017",
            imdbID: "tt2527336",
            type: "",
            poster: ""
        },
        {
            id: '11',
            title: "Rogue One: A Star Wars Story",
            year:"2016",
            imdbID: "tt3748528",
            type: "movie",
            poster: "Poster_10.jpg" 
        }
    ]
    const renderItem = ({ item }) => (
        <Item
          numb={item.id}
          title={item.title}
          year={item.year}
          type={item.type}
        />
      )
    return (<View style={styles.container}>
        <Text>lab 3</Text>
  
        <ScrollView>
          <FlatList
            data={movieData}
            renderItem={ renderItem}
            keyExtractor={(item) => item.id}
          />
        </ScrollView>
      </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        textAlignVertical: 'center',
        marginBottom: '2%',
        marginBottom: '2%'
    },
    block: {
      width: '90%',
      borderWidth: 1,
      borderColor: '#00B672',
      borderRadius: 5,
      marginTop: 5,
      marginBottom: 10,
      marginLeft: 5,
      padding: 10,
      alignSelf: 'center',
      flexDirection: 'row',
    },
    title: {
      fontSize: 22,
      color: '#fff',
      
    },
    year: {
      fontSize: 16,
      color: '#fff'
    },
    type: {
      color: '#63FF44',
    },
    img: { height: 70, width: 70 },
  })
  
export default Movie