import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import { cssInterop } from 'nativewind';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { OpenURLButton } from '@utility/functions';

const Footer = ({ social }) => {

cssInterop(Icon, {
  className: {
    target: "style",
    nativeStyleToProp: { size: true},
  },
});

return (
  <View
    data-exclude="true"
    className="max-w-screen-pdf py-6 mx-auto items-center justify-between md:flex"
  >
    <View className="flex-row items-center tracking-wide mb-5 md:mb-0 justify-center ml-2 text-gray">
      <Text className="text-gray text-2xl mr-1 md:text-sm">
        © {new Date().getFullYear()} | Developed with
      </Text>

      <TouchableOpacity
        onPress={() => Linking.openURL('https://reactnative.dev')}
        className=" mr-1"
      >
        <Icon name="react" color="#58c4dc" size={12} />
      </TouchableOpacity>

      <Text className="text-gray text-2xl mr-1 md:text-sm">by</Text>

      <TouchableOpacity onPress={() => Linking.openURL(process.env.EXPO_PUBLIC_SITE_URL)}>
        <Text className="text-primary-dark text-2xl hover:text-primary font-bold md:text-sm">
          George Barbu
        </Text>
      </TouchableOpacity>
    </View>

    {social && (
      <Text className="flex items-center justify-center mr-2 md:ml-2">
        {social.map((item) => (
          <TouchableOpacity
            key={item.service}
            onPress={() => Linking.openURL(item.url)}
          >
            <Text className="text-gray mr-4 hover:text-gray">
              <Icon name={item.service} className="text-[40px] md:!text-[27px]"  />
            </Text>
          </TouchableOpacity>
        ))}
      </Text>
    )}
  </View>
)};

export default Footer;
