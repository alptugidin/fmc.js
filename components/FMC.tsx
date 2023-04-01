import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import Screen from './Screen/Screen';
import PageButtons from './PageButtons/PageButtons';
import Numpad from './Numpad/Numpad';
import Keypad from './Keypad/Keypad';
import { init } from '../socket';
const FMC: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
  const { socket } = init();

  return (
    <View className={'bg-[#565656] flex-1'}>
      <Screen socket={socket}/>
      <PageButtons socket={socket}/>
      <View className={'flex flex-row'}>
        <Numpad/>
        <Keypad/>
      </View>
    </View>
  );
};

export default FMC;
