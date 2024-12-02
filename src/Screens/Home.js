import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import DefaultTemplate from '@templates/default';
import Header from '@components/header';

//import { Footer, TopHeader, Sidebar, Education, Experience } from "@components";
import Footer from '@components/footer';
import resume from '@data/profile';

export default function Home({ data }) {


  return (
    <DefaultTemplate>
        <Header />

{/*
      <View className="printColor max-w-screen-pdf relative mx-auto lg:flex">
        <TopHeader data={{ text: resume.header }} />
        <View className="bg-gray px-8 lg:w-2/5">
          <Sidebar
            className="mt-5 pb-10 pt-16 print:pt-56 sm:pt-56"
            skills={resume.skills}
            summary={resume.summary}
            contacts={resume.contact}
          />
        </View>

        <View className="printColor bg-white px-8 lg:w-3/5">
          <View className="py-10 lg:pt-56 lg:mt-5">
            <Experience
              className="bi-avoid bb-always"
              data={resume.experience}
            />
            <Education
              className="bi-avoid bb-always mt-28 mb-11"
              data={resume.education}
            />
          </View>
        </View>
      </View> */}

      <Footer social={resume.social} />
    </DefaultTemplate>
  );
}
