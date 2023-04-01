import React from 'react';
import { View } from 'react-native';

export const MenuButton: React.FC = () => {
  return (
    <View className={'bg-black h-full w-9 rounded-md flex items-center justify-center border'}>
      <View className={'w-9/12 h-[1px] bg-white'}>
      </View>
    </View>
  );
};

export default MenuButton;
