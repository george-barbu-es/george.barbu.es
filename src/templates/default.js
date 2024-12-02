import React from "react";
import { SafeAreaView, ScrollView, StatusBar, Text, View } from "react-native";

const DefaultTemplate = (props) => {
  return (
    <SafeAreaView className="flex-1 ">
      <StatusBar barStyle="auto" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        className="w-full text-gray bg-[#525659] min-h-screen"
      >
        {props.children}
      </ScrollView>
    </SafeAreaView>
  );
};

export default DefaultTemplate;
