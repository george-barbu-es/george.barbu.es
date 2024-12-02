import React from "react";
import { View, Text } from "react-native";

const Summary = ({ data, className }) => (
  <View className={className}>
    <Text className="uppercase font-norwester text-xl text-primary-light mb-4">
      {data.label}
    </Text>
    <Text className="text-[0.70rem] font-thin font-lato">{data.text}</Text>
  </View>
);

export default Summary;
