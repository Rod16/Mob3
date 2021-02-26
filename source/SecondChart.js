import React from 'react';
import { Dimensions } from 'react-native';
import { PieChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 0) => `rgba(255, 255, 146, ${opacity})`,
    strokeWidth: 2, 
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
    backgroundColor: "white"
};

const data = [
    {
      name: "Green",
      ratio: 35,
      color: "green",
      legendFontColor: "#15CC75",
      legendFontSize: 15
    },
    {
      name: "Yellow",
      ratio: 40,
      color: "yellow",
      legendFontColor: "#15CC75",
      legendFontSize: 15
    },
    {
      name: "Red",
      ratio: 25,
      color: "red",
      legendFontColor: "#15CC75",
      legendFontSize: 15
    },
    
    
  ];

  function SecondChart() {
    return(
    <PieChart
    data={data}
    width={screenWidth*1.2}
    height={screenHeight/3}
    //backgroundColor={"white"}
    chartConfig={chartConfig}
    accessor={"ratio"}
    paddingLeft={"55"}
    radius={"1000%"}
    center={[20, 20]}
    absolute
  />) 
  }
  
  export default SecondChart;