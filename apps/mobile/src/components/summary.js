import React from "react";
import { View, Text } from "react-native";

const Summary = ({ data, className }) => (
  <View className={className}>
    <Text className="uppercase font-['Norwester'] text-xl text-primary-light mb-4">
      {data.label}
    </Text>
    <Text className="text-[0.70rem] font-['Lato'] text-opacity-75 leading-4 text-white">{data.text}</Text>
  </View>
);

export default Summary;
