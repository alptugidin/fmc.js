import React from 'react';
import { View } from 'react-native';
import Button from './Button';

export const Numpad: React.FC = () => {
  return (
    <View className={'w-1/3 rounded-b-lg flex flex-row flex-wrap pb-[3px] justify-between mt-[3.5%] pl-0.5'}>
      <Button label={'1'}/>
      <Button label={'2'}/>
      <Button label={'3'}/>
      <Button label={'4'}/>
      <Button label={'5'}/>
      <Button label={'6'}/>
      <Button label={'7'}/>
      <Button label={'8'}/>
      <Button label={'9'}/>
      <Button label={'.'}/>
      <Button label={'0'}/>
      <Button label={'+/-'}/>
    </View>
  );
};

export default Numpad;
