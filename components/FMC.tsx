import React from 'react';
import { View, Text } from 'react-native';
import Screen from './Screen';
import PageButtons from './PageButtons/PageButtons';

const FMC: React.FC = () => {
  return (
    <View className={'bg-[#565656] flex-1'}>
      <Screen/>
      <PageButtons/>
    </View>
  );
};

export default FMC;
