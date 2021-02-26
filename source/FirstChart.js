import React from 'react';
import { Dimensions } from 'react-native';
import { LineChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const chartConfig = {
    
    backgroundGradientFromOpacity: 0,
    
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 0.5) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
};

const data = {
    labels: ["-5", "-4", "-3", "-2", "-1", "0", "1", "2", "3", "4", "5"],
    datasets: [
      {
        data: ["25", "16", "9", "4", "1", "0", "1", "4", "9", "16", "25"],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ],
    legend: ["Variant 5, x^2"] // optional
  };
function FirstChart() {
    return(<LineChart
        data={data}
        width={screenWidth}
        height={screenHeight/3.45}
        chartConfig={chartConfig}
    />)
    
}

export default FirstChart;




