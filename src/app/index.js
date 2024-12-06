// app/index.js
import React from 'react';
import { View } from 'react-native';
import Home from '@screens/Home';
import NetInfo from "@react-native-community/netinfo";

export default function HomePage() {
  const [isConnected, setIsConnected] = React.useState(true);

  React.useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });

    return () => unsubscribe();
  }, []);

  return (
    <View className="flex-1">
      {isConnected ? <Home /> : <Offline />}
    </View>
  );
}
