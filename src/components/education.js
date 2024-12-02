import React from "react";
import { View, Text } from "react-native";

const Education = ({ className, data }) => (
  <View className={className}>
    {data.map((education, index) => (
      <View key={index}>
        <h2 className="uppercase font-norwester text-xl text-primary-dark mb-4">
          {education.label}
        </h2>
        {education.items.map((item, index) => (
          <View key={index} className="bi-avoid bb-always mt-11 font-lato">
            <span className="text-seondary uppercase text-sm font-semibold">
              {item.institution}
            </span>
            <View className="text-primary-dark text-xs font-semibold mb-4">
              <Text className="border-r-2 border-solid border-primary-dark mr-1 pr-1">
                {item.degree}
              </Text>
              <Text className="">{item.type}</Text>
            </View>
            <ul className="text-xs ">
              {item.certifications.map((name, index) => (
                <li key={index}>- {name.name}</li>
              ))}
            </ul>
          </View>
        ))}
      </View>
    ))}
  </View>
);

export default Education;
