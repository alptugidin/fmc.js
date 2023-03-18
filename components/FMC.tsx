import React from 'react';
import { View, Text, Image } from 'react-native';
import Screen from './Screen/Screen';
import PageButtons from './PageButtons/PageButtons';
import Numpad from './Numpad/Numpad';
import Keypad from './Keypad/Keypad';

const FMC: React.FC = () => {
  return (
    <View className={'bg-[#565656] flex-1'}>
      <Screen/>
      <PageButtons/>
      <Numpad/>
      <Keypad/>
    </View>
  );
};

export default FMC;
