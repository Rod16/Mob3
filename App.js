import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './source/HomeScreen';
import Drawing from './source/Lab2';
import Lab4 from './source/Lab4'
import Lab5 from './source/Lab5'
import Lab6 from './source/Lab6'
import {NavigationContainer} from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

function App() {
  return (
    
    <NavigationContainer >
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: () => {
            let myIcon;
            if (route.name == "Home") {
              myIcon = "home";
            }
            else if (route.name == "Lab2"){
              myIcon = "edit";
            }
            else if (route.name == "Lab4"){
              myIcon = "playcircleo";
            }
            else if (route.name == "Lab5"){
              myIcon = "picture";
            }
            else if (route.name == "Lab6"){
              myIcon = "videocamera";
            }
            return <AntDesign name={myIcon} size={24} color="black" />
          }
        })}  
      >
        
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Lab2" component={Drawing} />
        <Tab.Screen name="Lab4" component={Lab4} />
        <Tab.Screen name="Lab5" component={Lab5} />
        <Tab.Screen name="Lab6" component={Lab6} />
      </Tab.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backy: {
    color: 'black',
}
});

export default App;