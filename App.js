import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import NetInfo from "@react-native-community/netinfo";

import { useFonts } from 'expo-font';

import Offline from "@screens/Offline";
import Home from "@screens/Home";

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

    const [fontsLoaded] = useFonts({
        Norwester: require('@fonts/Norwester/Norwester.otf'),
        Montserrat: require('@fonts/Montserrat/Montserrat-Black.ttf'),
        MontserratLight: require('@fonts/Montserrat/Montserrat-Light.ttf'),
        MontserratSemiBold: require('@fonts/Montserrat/Montserrat-SemiBold.ttf'),
        Lato: require('@fonts/Lato/Lato-Regular.ttf'),
        LatoBlack: require('@fonts/Lato/Lato-Black.ttf'),
        LatoThin: require('@fonts/Lato/Lato-Thin.ttf'),
    });

  return (
    <View className="flex-1 justify-center">
      {isConnected ? (
        <View className="flex-1">
          <Home />
        </View>
      ) : (
        <Offline />
      )}
    </View>
  );

};

export default App;
