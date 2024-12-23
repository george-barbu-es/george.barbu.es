import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import { cssInterop } from 'nativewind';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { OpenURLButton } from '@utils/functions';

const Footer = ({ social }) => {

cssInterop(Icon, {
  className: {
    target: "style",
    nativeStyleToProp: { size: true},
  },
});

return (
  <View
    as="footer"
    data-exclude="true"
    className="max-w-screen-pdf py-6 mx-auto items-center justify-between w-full md:flex lg:flex-row"
  >
    <View className="flex-row items-center tracking-wide mb-5 md:mb-0 justify-center ml-2 text-gray sm:ml-0">
      <Text className="text-gray text-sm mr-1 ">
        © {new Date().getFullYear()} | Developed with
      </Text>

      <TouchableOpacity
        onPress={() => Linking.openURL('https://reactnative.dev')}
        className=" mr-1"
      >
        <Icon name="react" color="#58c4dc" size={12} />
      </TouchableOpacity>

      <Text className="text-gray text-sm">by</Text>

      <TouchableOpacity onPress={() => Linking.openURL(process.env.EXPO_PUBLIC_SITE_URL)}>
        <Text className="text-primary-dark  hover:text-primary font-bold text-sm">
          George Barbu
        </Text>
      </TouchableOpacity>
    </View>

    {social && (
      <Text className="flex items-center justify-center mr-2 last:ml-o sm:mr-0 md:ml-2 lg:justify-between">
        {social.map((item) => (
          <TouchableOpacity
            key={item.service}
            onPress={() => Linking.openURL(item.url)}
          >
            <Text className="text-gray ml-4 last:ml-o hover:text-gray">
              <Icon name={item.service} className="!text-[28px]"  />
            </Text>
          </TouchableOpacity>
        ))}
      </Text>
    )}
  </View>
)};

export default Footer;
