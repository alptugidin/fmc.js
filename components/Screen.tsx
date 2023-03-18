import { Text, View } from 'react-native';
import React from 'react';
import MenuButton from './MenuButton';

export const Screen: React.FC = () => {
  return (
    <View>
      <View className={'top-[45px] gap-3 absolute left-0'}>
        {[...Array(6).keys()].map((item, key) => (
          <View key={key}>
            <MenuButton/>
          </View>
        ))}
      </View>
      <View className={'w-9/12 bg-black h-[280px] rounded-2xl absolute top-8 left-[12.5%]'}>
        {/* <Text className={'color-white'}>SCREEN</Text> */}
      </View>
      <View className={'top-[45px] gap-3 absolute right-0'}>
        {[...Array(6).keys()].map((item, key) => (
          <View key={key}>
            <MenuButton/>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Screen;
