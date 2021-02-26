import React, {useState} from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';
import FirstChart from './FirstChart';
import SecondChart from './SecondChart';

function Drawing() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: "#106902", true: "#640069" }}
        thumbColor={isEnabled ? "#CC00B4" : "#8CD700"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        
      />
      {isEnabled ? <SecondChart /> : <FirstChart />}
      
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
      textAlignVertical: 'center',
      marginBottom: '2%'
      
    },
    text: {
        color: 'white',
        marginTop: '5%'
    }
  });

export default Drawing;
