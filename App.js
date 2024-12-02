import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import NetInfo from "@react-native-community/netinfo";

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
