import React from 'react';
import { Text, View } from 'react-native';
import Button from './Button';

export const PageButtons: React.FC = () => {
  return (
    <View className={'bg-[#565656] h-20 w-[95%] ml-[2.5%] top-[325px] shadow-xl shadow-black rounded-lg'}>
      <Button text={'INIT REF'}/>
    </View>
  );
};

export default PageButtons;
