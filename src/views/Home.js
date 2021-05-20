import React from 'react';
import Slider from '../components/Slider/Slider';
import WelcomeText from '../components/WelcomeText/WelcomeText';
import GetNews from '../components/GetNews/GetNews';
import BasicLayout from '../Layouts/BasicLayout';

const Home = () => {
  return (
    <BasicLayout>
      <Slider />
      <WelcomeText />
      <GetNews />
    </BasicLayout>
  );
};

export default Home;
