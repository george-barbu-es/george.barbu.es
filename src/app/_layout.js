// app/_layout.js
import React from 'react';
import { View, Text } from 'react-native';
import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import Offline from '@screens/Offline';

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Norwester: require('@fonts/Norwester/Norwester.otf'),
    Montserrat: require('@fonts/Montserrat/Montserrat-Black.ttf'),
    MontserratLight: require('@fonts/Montserrat/Montserrat-Light.ttf'),
    MontserratSemiBold: require('@fonts/Montserrat/Montserrat-SemiBold.ttf'),
    Lato: require('@fonts/Lato/Lato-Regular.ttf'),
    LatoBlack: require('@fonts/Lato/Lato-Black.ttf'),
    LatoThin: require('@fonts/Lato/Lato-Thin.ttf'),
  });

  if (!fontsLoaded) {
    return <Text>Loading Fonts...</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="offline" />
    </View>
  );
}
