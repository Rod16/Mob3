import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import { Icon } from 'react-native-elements'
import Item from './Movie'

var movie = [
    {
        "Title":"Rogue One: A Star Wars Story",
        "Year":"2016",
        "Rated":"PG-13",
        "Released":"16 Dec 2016",
        "Runtime":"133 min",
        "Genre":"Action, Adventure, Sci-Fi",
        "Director":"Gareth Edwards",
        "Writer":"Chris Weitz (screenplay by), Tony Gilroy (screenplay by), John Knoll (story by), Gary Whitta (story by), George Lucas (based on characters created by)",
        "Actors":"Felicity Jones, Diego Luna, Alan Tudyk, Donnie Yen",
        "Plot":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the plans for the Death Star.",
        "Language":"English",
        "Country":"USA",
        "Awards":"Nominated for 2 Oscars. Another 24 wins & 80 nominations.",
        "Poster": require("./Poster_10.jpg"),
        "imdbRating":"7.8",
        "imdbVotes":"540,185",
        "imdbID":"tt3748528",
        "Type":"movie",
        "Production":"Lucasfilm Ltd.",
      },
      {
        "Title":"Star Wars: Episode VIII - The Last Jedi",
        "Year":"2017",
        "Rated":"PG-13",
        "Released":"15 Dec 2017",
        "Runtime":"152 min",
        "Genre":"Action, Adventure, Fantasy, Sci-Fi",
        "Director":"Rian Johnson",
        "Writer":"Rian Johnson, George Lucas (based on characters created by)",
        "Actors":"Mark Hamill, Carrie Fisher, Adam Driver, Daisy Ridley",
        "Plot":"Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares for battle with the First Order.",
        "Language":"English",
        "Country":"USA",
        "Awards":"Nominated for 4 Oscars. Another 24 wins & 90 nominations.",
        "Poster": require("./empty.jpg"),
        "imdbRating":"7.0",
        "imdbVotes":"550,181",
        "imdbID":"tt2527336",
        "Type":"movie",
        "Production":"Lucasfilm Ltd."
      },
      {
        "Title":"Star Wars: Episode VII - The Force Awakens",
        "Year":"2015",
        "Rated":"PG-13",
        "Released":"18 Dec 2015",
        "Runtime":"138 min",
        "Genre":"Action, Adventure, Sci-Fi",
        "Director":"J.J. Abrams",
        "Writer":"Lawrence Kasdan, J.J. Abrams, Michael Arndt, George Lucas (based on characters created by)",
        "Actors":"Harrison Ford, Mark Hamill, Carrie Fisher, Adam Driver",
        "Plot":"As a new threat to the galaxy rises, Rey, a desert scavenger, and Finn, an ex-stormtrooper, must join Han Solo and Chewbacca to search for the one hope of restoring peace.",
        "Language":"English","Country":"USA","Awards":"Nominated for 5 Oscars. Another 62 wins & 126 nominations.",
        "Poster": require("./empty.jpg"),
        "imdbRating":"7.9",
        "imdbVotes":"847,768",
        "imdbID":"tt2488496",
        "Type":"movie",
        "Production":"Lucasfilm Ltd., Bad Robot"
      },
      {
        "Title":"Star Trek",
        "Year":"2009",
        "Rated":"PG-13",
        "Released":"08 May 2009",
        "Runtime":"127 min",
        "Genre":"Action, Adventure, Sci-Fi",
        "Director":"J.J. Abrams",
        "Writer":"Roberto Orci, Alex Kurtzman, Gene Roddenberry (television series \"Star Trek\")",
        "Actors":"Chris Pine, Zachary Quinto, Leonard Nimoy, Eric Bana",
        "Plot":"The brash James T. Kirk tries to live up to his father's legacy with Mr. Spock keeping him in check as a vengeful Romulan from the future creates black holes to destroy the Federation one planet at a time.",
        "Language":"English",
        "Country":"USA, Germany",
        "Awards":"Won 1 Oscar. Another 24 wins & 93 nominations.",
        "Poster": require("./Poster_08.jpg"),
        "imdbRating":"7.9",
        "imdbVotes":"572,780",
        "imdbID":"tt0796366",
        "Type":"movie",
        "Production":"Bad Robot"
      },
      {
        "Title":"Star Wars: Episode III - Revenge of the Sith",
        "Year":"2005",
        "Rated":"PG-13",
        "Released":"19 May 2005",
        "Runtime":"140 min",
        "Genre":"Action, Adventure, Fantasy, Sci-Fi",
        "Director":"George Lucas","Writer":"George Lucas",
        "Actors":"Ewan McGregor, Natalie Portman, Hayden Christensen, Ian McDiarmid",
        "Plot":"Three years into the Clone Wars, the Jedi rescue Palpatine from Count Dooku. As Obi-Wan pursues a new threat, Anakin acts as a double agent between the Jedi Council and Palpatine and is lured into a sinister plan to rule the galaxy.",
        "Language":"English",
        "Country":"USA",
        "Awards":"Nominated for 1 Oscar. Another 26 wins & 62 nominations.",
        "Poster": require("./Poster_06.jpg"),
        "imdbRating":"7.5",
        "imdbVotes":"696,697",
        "imdbID":"tt0121766",
        "Type":"movie",
        "Production":"Lucasfilm Ltd."
      },
      {
        "Title":"Star Wars: Episode II - Attack of the Clones",
        "Year":"2002",
        "Rated":"PG",
        "Released":"16 May 2002",
        "Runtime":"142 min",
        "Genre":"Action, Adventure, Fantasy, Sci-Fi",
        "Director":"George Lucas",
        "Writer":"George Lucas (screenplay by), Jonathan Hales (screenplay by), George Lucas (story by)",
        "Actors":"Ewan McGregor, Natalie Portman, Hayden Christensen, Christopher Lee",
        "Plot":"Ten years after initially meeting, Anakin Skywalker shares a forbidden romance with Padmé Amidala, while Obi-Wan Kenobi investigates an assassination attempt on the senator and discovers a secret clone army crafted for the Jedi.",
        "Language":"English",
        "Country":"USA",
        "Awards":"Nominated for 1 Oscar. Another 19 wins & 64 nominations.",
        "Poster": require("./Poster_07.jpg"),
        "imdbRating":"6.5",
        "imdbVotes":"628,069",
        "imdbID":"tt0121765",
        "Type":"movie",
        "Production":"Lucasfilm Ltd., Twentieth Century Fox"
      },
      {
        "Title":"Star Wars: Episode I - The Phantom Menace",
        "Year":"1999",
        "Rated":"PG",
        "Released":"19 May 1999",
        "Runtime":"136 min",
        "Genre":"Action, Adventure, Fantasy, Sci-Fi",
        "Director":"George Lucas",
        "Writer":"George Lucas",
        "Actors":"Liam Neeson, Ewan McGregor, Natalie Portman, Jake Lloyd",
        "Plot":"Two Jedi escape a hostile blockade to find allies and come across a young boy who may bring balance to the Force, but the long dormant Sith resurface to claim their original glory.",
        "Language":"English",
        "Country":"USA",
        "Awards":"Nominated for 3 Oscars. Another 26 wins & 66 nominations.",
        "Poster": require("./Poster_05.jpg"),
        "imdbRating":"6.5",
        "imdbVotes":"715,539",
        "imdbID":"tt0120915",
        "Type":"movie",
        "Production":"Lucasfilm Ltd."
      },
      {
        "Title":"Star Wars: Episode VI - Return of the Jedi",
        "Year":"1983",
        "Rated":"PG",
        "Released":"25 May 1983",
        "Runtime":"131 min",
        "Genre":"Action, Adventure, Fantasy, Sci-Fi",
        "Director":"Richard Marquand",
        "Writer":"Lawrence Kasdan (screenplay by), George Lucas (screenplay by), George Lucas (story by)",
        "Actors":"Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams",
        "Plot":"After a daring mission to rescue Han Solo from Jabba the Hutt, the Rebels dispatch to Endor to destroy the second Death Star. Meanwhile, Luke struggles to help Darth Vader back from the dark side without falling into the Emperor's trap.",
        "Language":"English",
        "Country":"USA",
        "Awards":"Nominated for 4 Oscars. Another 22 wins & 16 nominations.",
        "Poster": require("./Poster_03.jpg"),
        "imdbRating":"8.3",
        "imdbVotes":"932,430",
        "imdbID":"tt0086190",
        "Type":"movie",
        "Production":"Lucasfilm Ltd."
      },
      {
        "Title":"Star Wars: Episode V - The Empire Strikes Back",
        "Year":"1980",
        "Rated":"PG",
        "Released":"20 Jun 1980",
        "Runtime":"124 min",
        "Genre":"Action, Adventure, Fantasy, Sci-Fi",
        "Director":"Irvin Kershner",
        "Writer":"Leigh Brackett (screenplay by), Lawrence Kasdan (screenplay by), George Lucas (story by)",
        "Actors":"Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams",
        "Plot":"After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued by Darth Vader and a bounty hunter named Boba Fett all over the galaxy.",
        "Language":"English",
        "Country":"USA",
        "Awards":"Won 1 Oscar. Another 24 wins & 20 nominations.",
        "Poster": require("./Poster_02.jpg"),
        "imdbRating":"8.7",
        "imdbVotes":"1,136,399",
        "imdbID":"tt0080684",
        "Type":"movie",
        "Production":"Lucasfilm Ltd."
      },
      {
        "Title":"Star Wars: Episode IV - A New Hope",
        "Year":"1977",
        "Rated":"PG",
        "Released":"25 May 1977",
        "Runtime":"121 min",
        "Genre":"Action, Adventure, Fantasy, Sci-Fi",
        "Director":"George Lucas",
        "Writer":"George Lucas",
        "Actors":"Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing",
        "Plot":"Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
        "Language":"English",
        "Country":"USA",
        "Awards":"Won 6 Oscars. Another 52 wins & 29 nominations.",
        "Poster": require("./Poster_01.jpg"),
        "imdbRating":"8.6",
        "imdbVotes":"1,208,256",
        "imdbID":"tt0076759",
        "Type":"movie",
        "Production":"Lucasfilm Ltd."
      }
]

export default function Lab6() {
  const [searchText, setSearchText] = useState('')
  const [movies, setmovies] = useState([])
  const [filteredmovies, setFilteredmovies] = useState([])
  useEffect(() => {
    setmovies(movie)
  }, [])
  return (
    <View style={{ flex: 1, paddingTop: 30 }}>
      <View style={styles.container}>
        <Text style={styles.labText}>Lab 6</Text>
        <View style={styles.searchView}>
          <View style={styles.inputView}>
            <TextInput
              defaultValue={searchText}
              style={styles.input}
              placeholder="Find what you are looking for:"
              placeholderTextColor="#fff"
              textContentType="name"
              onChangeText={(text) => {
                setSearchText(text)
                if (text === '') {
                  return setFilteredmovies([])
                }
                const filtered_movies = movies.filter((data) =>
                  data.Title.toLowerCase().startsWith(text.toLowerCase())
                )
                setFilteredmovies(filtered_movies)
              }}
              returnKeyType="search"
            />
            {searchText.length === 0 ? (
              <TouchableOpacity>
                <Icon name="search" size={24} color="#00B672" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  setSearchText('')
                  setFilteredmovies([])
                }}
              >
                <Icon name="cancel" size={24} color="#00B672" />
              </TouchableOpacity>
            )}
          </View>
        </View>
        {filteredmovies.length > 0 ? (
          <ScrollView>
            {filteredmovies.map((movie) => (
              <TouchableOpacity>
                <Item
                  poster={movie.Poster}
                  title={movie.Title}
                  plot={movie.Plot}
                  year={movie.Year}
                  rated={movie.Rated}
                  released={movie.Released}
                  runtime={movie.Runtime}
                  genre={movie.Genre}
                  director={movie.Director}
                  writer={movie.Writer}
                  actors={movie.Actors}
                  language={movie.Language}
                  country={movie.Country}
                  awards={movie.Awards}
                  imdbRating={movie.imdbRating}
                  imdbVotes={movie.imdbVotes}
                  imdbID={movie.imdbID}
                  type={movie.Type}
                  production={movie.Production}
                />
              </TouchableOpacity>
            ))}
            <View style={{ height: 50 }}></View>
          </ScrollView>
        ) : searchText.length > 0 ? (
          <View style={styles.messageBox}>
            <Text style={styles.messageBoxText}>No items</Text>
          </View>
        ) : (
          <View style={styles.messageBox}>
            <Text style={styles.messageBoxText}>Find what you are looking for</Text>
          </View>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    paddingTop: 10,
    backgroundColor: '#000'
  },
  searchView: {
    display: 'flex',
    flexDirection: 'row',
  },
  inputView: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 6,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    backgroundColor: 'grey',
    borderColor: '#00B672',
    color: '#fff',
  },
  labText: {
    paddingLeft: 150,
    color: '#00B672',
    fontSize: 25,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 15,
    color: '#fff'
  },
  userCard: {
    backgroundColor: '#000',
    paddingVertical: 6,
    paddingHorizontal: 6,
    borderRadius: 10,
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  userCardRight: {
    paddingHorizontal: 10,
  },
  messageBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff'
  },
  messageBoxText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#fff'
  },
})