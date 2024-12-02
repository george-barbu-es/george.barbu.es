import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import NetInfo from "@react-native-community/netinfo";

const App = () => {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  if (!isConnected) {
    return (
      <View className="flex-1 justify-center items-center bg-gray-100">
        <Text className="text-center text-lg text-red-500">
          You are offline. Please check your internet connection.
        </Text>
      </View>
    );
  }

  return (
    <View className="flex-1 justify-center items-center bg-gray-50">
      <Text className="text-2xl font-bold text-green-600">
        Welcome to George Barbu CV
      </Text>
    </View>
  );
};

export default App;
