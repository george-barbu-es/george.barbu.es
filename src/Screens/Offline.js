import React from "react";
import { SafeAreaView, StatusBar, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const NetworkCheck = ({
  title = "Nu ești conectat la internet",
  tryAgain = "Încearcă din nou",
}) => {
  const handlePress = () => {
    console.log("Attempt to reconnect");
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-100 items-center justify-center">
      <StatusBar barStyle="light-content" />
      <Icon name="wifi-off" size={120} color="black" className="mb-5" />
      <Text className="text-black text-xl font-bold mb-5 mt-20">{title}</Text>
      <TouchableOpacity
        onPress={handlePress}
        className="bg-blue-600 px-6 py-2 rounded-full mt-10"
      >
        <Text className="text-white font-semibold">{tryAgain}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default NetworkCheck;
