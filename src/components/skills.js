import React from "react";
import { View, Text } from "react-native";

const Skills = ({ data }) => (
  <View>
    {data.map((skill, index) => (
      <View
        key={index}
        className="mt-10 text-white text-opacity-75  leading-4 font-thin"
      >
        <Text className="uppercase font-norwester text-xl text-primary-light mb-4">
          {skill.title}
        </Text>
        <View className="text-[0.70rem] font-lato">
          <View
            key={skill.title}
            className={`${skill.type === "tag" ? "flex flex-wrap" : ""}`}
          >
            {skill.items.map((subskill, index) => (
              <Text key={subskill.name} className="mx-1">
                {skill.type === "tag" && (
                  <Text>
                    {subskill.name}
                    {skill.items.length - 1 !== index ? "," : ""}
                  </Text>
                )}
                {skill.type === "list" && <>- {subskill.name}</>}
              </Text>
            ))}
          </View>
        </View>
      </View>
    ))}
  </View>
);

export default Skills;
