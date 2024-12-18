import React from "react";
import { View, Text, Image } from "react-native";

export default function TopHeader({ data }) {
  const cloudinaryUrl = {
    uri: "https://res.cloudinary.com/barbu-es/image/upload/v1732977429/george.barbu.es/profile-picture.jpg",
  };

  return (
    <View className="bg-primary-dark h-44 mt-32 flex flex-col content-center justify-center relative pb-0 z-50 sm:h-32 sm:top-0 sm:w-full sm:justify-center sm:mt-14 sm:absolute  print:pb-0 print:absolute print:justify-center print:h-32 print:mt-0 ">
      <View className="flex relative w-full ">
        <Image
          className="w-[180px] h-[197px] !relative -translate-y-24  left-0 mx-auto z-10 sm:!absolute sm:-translate-y-12 sm:left-8 print:!absolute print:-translate-y-12 print:left-8 "
          source={cloudinaryUrl}
        />
      </View>
      <View className="flex !relative -translate-y-24 flex-col content-center text-center w-full mx-auto sm:w-full sm:-translate-y-0  sm:left-1/3 sm:ml-2 sm:text-left sm:relative sm:justify-center print:w-4/6 print:left-1/3 print:text-left print:relative print:justify-center">
        {data.text &&
          Object.keys(data.text).map((field, index) => (
            <View key={index}>
              {field === "fullname" && (
                <Text className="text-white font-normal text-3xl mb-3 font-['Norwester'] tracking-wider text-center sm:text-left">
                  {data.text[field]}
                </Text>
              )}
              {field === "role" && (
                <Text className="text-white text-[1.2rem] font-semibold font-['MontserratSemiBold'] tracking-widest text-center mb-2 sm:text-left">
                  {data.text[field]}
                </Text>
              )}
              {field === "slogan" && (
                <Text className="text-white text-sm leading-3 font-['MontserratSemiBold'] tracking-wide text-center sm:font-['MontserratLight'] sm:text-left">
                  {data.text[field]}
                </Text>
              )}
            </View>
          ))}
      </View>
    </View>
  );
}
