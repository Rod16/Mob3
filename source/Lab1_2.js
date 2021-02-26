import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
const customH1 = 7
const customM1 = 40
const customS1 = 6
const customH2 = 5
const customM2 = 10
const customS2 = 20
let txtPartS1 = 0
let txtPartD1 = 0
let txtPartS2 = 0
let txtPartD2 = 0
function TimeRL() {
  let hours = new Date().getHours()
  let minutes = new Date().getMinutes()
  let seconds = new Date().getSeconds()
  let sumH1 = Number(hours) + Number(customH1)
  let sumM1 = Number(minutes) + Number(customM1)
  let sumS1 = Number(seconds) + Number(customS1)
  let difH1 = Number(hours) - Number(customH1)
  let difM1 = Number(minutes) - Number(customM1)
  let difS1 = Number(seconds) - Number(customS1)

  let sumH2 = Number(customH1) + Number(customH2)
  let sumM2 = Number(customM1) + Number(customM2)
  let sumS2 = Number(customS1) + Number(customS2)
  let difH2 = Number(customH1) - Number(customH2)
  let difM2 = Number(customM1) - Number(customM2)
  let difS2 = Number(customS1) - Number(customS2)
  if (sumS1 >= 59) {
    let dif = Math.floor(sumS1/60)
    let rem = sumS1%60
    sumS1=rem
    sumM1+=dif

  }
  if (sumM1 >= 59) {
    let dif = Math.floor(sumM1/60)
    let rem = sumM1%60
    sumM1=rem
    sumH1+=dif

  }
  if (sumH1 >= 23) {
    let rem = sumH1%24
    sumH1=rem
  }

  if (difS1 <= 0) {
    let dif = Math.floor((-difS1+60)/60)
    let doing = -(difS1-60)
    let rem = doing%60
    difS1=60-rem
    difM1-=dif

  }
  if (difM1 <= 0) {
    let dif = Math.floor((-difM1+60)/60)
    let doing = -(difM1-60)
    let rem = doing%60
    difM1=60-rem
    difH1-=dif

  }
  if (difH1 <= 0) {
    let dif = Math.floor((-difS1+24)/24)
    let doing = -(difS1-24)
    let rem = doing%24
    difS1=24-rem
    difM1 = 24 -dif
  }

  if (sumH1 <12) {
    txtPartS1 = 'AM'
  } else {
    sumH1 = sumH1-12
    txtPartS1 = 'PM'
  }

  if (difH1 <12) {
    txtPartD1 = 'AM'
  } else {
    difH1 = difH1-12
    txtPartD1 = 'PM'
  }

  if (sumS2 >= 59) {
    let dif = Math.floor(sumS2/60)
    let rem = sumS2%60
    sumS2=rem
    sumM2+=dif

  }
  if (sumM2 >= 59) {
    let dif = Math.floor(sumM2/60)
    let rem = sumM2%60
    sumM2=rem
    sumH2+=dif

  }
  if (sumH2 >= 23) {
    let dif = Math.floor(sumH2/24)
    let rem = sumH2%24
    sumH2=rem
  }

  if (difS2 <= 0) {
    let dif = Math.floor((-difS2+60)/60)
    let doing = -(difS2-60)
    let rem = doing%60
    difS2=60-rem
    difM2-=dif

  }
  if (difM2 <= 0) {
    let dif = Math.floor((-difM2+60)/60)
    let doing = -(difM2-60)
    let rem = doing%60
    difM2=60-rem
    difH2-=dif

  }
  if (difH2 <= 0) {
    let dif = Math.floor((-difS2+24)/24)
    let doing = -(difS2-24)
    let rem = doing%24
    difS2=24-rem
    difM2 = 24 -dif
  }

  if (sumH2 <12) {
    txtPartS2 = 'AM'
  } else {
    sumH2 = sumH2-12
    txtPartS2 = 'PM'
  }

  if (difH2 <12) {
    txtPartD2 = 'AM'
  } else {
    difH2 = difH2-12
    txtPartD2 = 'PM'
  }
  
  return (<View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.text}>Operating with current time and 1 custom</Text>
        <Text style={styles.text}></Text>
        <Text style={styles.text}></Text>
        <Text style={styles.text}>{hours}:{minutes}:{seconds}</Text>
        <Text style={styles.text}>+</Text>
        <Text style={styles.text}>{customH1}:{customM1}:{customS1}</Text>
        <Text style={styles.text}>==========</Text>
        <Text style={styles.text}>{sumH1}:{sumM1}:{sumS1} {txtPartS1}</Text>
        <Text style={styles.text}></Text>
        <Text style={styles.text}></Text>
        <Text style={styles.text}>{hours}:{minutes}:{seconds}</Text>
        <Text style={styles.text}>-</Text>
        <Text style={styles.text}>{customH1}:{customM1}:{customS1}</Text>
        <Text style={styles.text}>==========</Text>
        <Text style={styles.text}>{difH1}:{difM1}:{difS1} {txtPartD1}</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Operating with 2 custom times</Text>
        <Text style={styles.text}></Text>
        <Text style={styles.text}></Text>
        <Text style={styles.text}>{customH1}:{customM1}:{customS1}</Text>
        <Text style={styles.text}>+</Text>
        <Text style={styles.text}>{customH2}:{customM2}:{customS2}</Text>
        <Text style={styles.text}>==========</Text>
        <Text style={styles.text}>{sumH2}:{sumM2}:{sumS2} {txtPartS2}</Text>
        <Text style={styles.text}></Text>
        <Text style={styles.text}></Text>
        <Text style={styles.text}>{customH1}:{customM1}:{customS1}</Text>
        <Text style={styles.text}>-</Text>
        <Text style={styles.text}>{customH2}:{customM2}:{customS2}</Text>
        <Text style={styles.text}>==========</Text>
        <Text style={styles.text}>{difH2}:{difM2}:{difS2} {txtPartD2}</Text>
      </View>
    </View>)
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
    }
  });

export default TimeRL;