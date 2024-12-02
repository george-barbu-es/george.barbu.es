import React from "react";
import { View, Text } from "react-native";

const Contact = ({ data, className }) => (
  <View className={className}>
    <Text className="uppercase font-norwester text-xl text-primary-light mb-4">
      {data.label}
    </Text>
    <View className="text-[0.70rem] font-lato">
      <ul>
        {data && (
          <>
            {data.items.map((contact, index) => (
              <li className="py-2" key={index}>
                {contact.service === "location" && <span>{contact.value}</span>}
                {contact.service === "phone" && (
                  <a href={`tel:${contact.value}`} title="phone">
                    {contact.value}
                  </a>
                )}
                {contact.service === "homephone" && (
                  <a href={`tel:${contact.value}`} title="phone">
                    {contact.value}
                  </a>
                )}
                {contact.service === "website" && (
                  <a
                    target="_blank"
                    href={contact.value}
                    rel="noopener noreferrer"
                    title="website"
                  >
                    {contact.value}
                  </a>
                )}
                {contact.service === "email" && (
                  <a href={`mailto:${contact.value}`} title="email">
                    {contact.value}
                  </a>
                )}
              </li>
            ))}
          </>
        )}
      </ul>
    </View>
  </View>
);

export default Contact;
