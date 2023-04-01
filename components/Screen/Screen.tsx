import { Image, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import MenuButton from './MenuButton';
import { type IScreen } from '../../types';
import Cells from './Cells';
export const Screen: React.FC<IScreen> = ({ socket }) => {
  const [cdu, setCdu] = useState<string[]>([]);
  const [line1, setLine1] = useState<string[]>([]);
  useEffect(() => {
    socket.on('cdu', (data: string[]) => {
      setCdu(data);
    });
  }, []);

  return (
    <View className={'flex flex-row h-[43%] items-center'}>
      <Text className={'h-10 rotate-180 absolute top-2'}>
        <Image source={require('../Extras/screw.png')} style={{ width: 30, height: 26 }}/>
      </Text>
      <View className={'w-[10%] flex flex-col items-start justify-end h-[82%] mb-[8.5%]'}>
        {[...Array(6).keys()].map((item, key) => (
          <View key={key} className={'h-[11%] mt-[23%]'}>
            <MenuButton/>
          </View>
        ))}
      </View>
      <View className={'w-[80%] bg-black h-[82%] rounded-2xl px-1'}>
        {[...Array(14).keys()].map((line, key) => (
          <View key={key} className={'flex flex-row h-[7.1%]'}>
            {cdu[line]?.toString().split('').map((char, key) => (
              <Text key={key} className={'text-white w-[4.16%] text-center text-[17px]'}>{char}</Text>
            ))}
          </View>
        ))}
      </View>
      <View className={'w-[10%] flex flex-col items-end justify-end h-[82%] mb-[8.5%]'}>
        {[...Array(6).keys()].map((item, key) => (
          <View key={key} className={'h-[11%] mt-[23%]'}>
            <MenuButton/>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Screen;
