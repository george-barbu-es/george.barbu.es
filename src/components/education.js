import React from "react";
import { View, Text } from "react-native";

const Education = ({ className, data }) => (
  <View className={className}>
    {data.map((education, index) => (
      <View key={index}>
        <Text className="uppercase font-['Norwester'] text-xl text-primary-dark mb-4">
          {education.label}
        </Text>
        {education.items.map((item, index) => (
          <View key={index} className="bi-avoid bb-always mt-11 font-['Lato'] ">
            <Text className="text-secondary font-['LatoBlack'] uppercase text-sm font-semibold">
              {item.institution}
            </Text>
            <View className="text-primary-dark text-xs font-semibold mb-4 flex flex-row">
              <Text className="border-r-2 border-solid border-primary-dark mr-1 pr-1 font-['LatoBlack'] text-primary-dark text-xs">
                {item.degree}
              </Text>
              <Text className="font-['LatoBlack'] text-primary-dark text-xs">{item.type}</Text>
            </View>
            <View className="text-xs flex flex-col">
              {item.certifications.map((name, index) => (
                <Text key={index}>- {name.name}</Text>
              ))}
            </View>
          </View>
        ))}
      </View>
    ))}
  </View>
);

export default Education;
