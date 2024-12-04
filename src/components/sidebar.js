import React from "react";
import { View, Text } from "react-native";
import  Summary from "@components/summary";
import  Skills from "@components/skills";
import  Contact  from "@components/contact";

const Sidebar = ({ className, summary, contacts, skills }) => (
  <View className={className}>
    <Summary data={summary} className="text-white text-opacity-75 leading-3 lg:mt-8" />
    <Skills data={skills} />
    <Contact
      data={contacts}
      className="mt-10 text-white text-opacity-75 leading-4 font-thin"
    />
  </View>
);

export default Sidebar;
