import React from 'react';
import { View } from 'react-native';
import Button from './Button';

const Keypad: React.FC = () => {
  return (
    // <View className={'w-2/3 flex flex-row flex-wrap absolute right-0 -top-[28%]'}>
    <View className={'w-2/3 flex flex-row flex-wrap absolute right-0 -top-[90px]'}>
      <View className={'flex flex-row justify-evenly w-full'}>
        <Button label={'A'}/>
        <Button label={'B'}/>
        <Button label={'C'}/>
        <Button label={'D'}/>
        <Button label={'E'}/>
      </View>
      <View className={'flex flex-row justify-evenly w-full'}>
        <Button label={'F'}/>
        <Button label={'G'}/>
        <Button label={'H'}/>
        <Button label={'I'}/>
        <Button label={'J'}/>
      </View>
      <View className={'flex flex-row justify-evenly w-full'}>
        <Button label={'K'}/>
        <Button label={'L'}/>
        <Button label={'M'}/>
        <Button label={'N'}/>
        <Button label={'O'}/>
      </View>
      <View className={'flex flex-row justify-evenly w-full'}>
        <Button label={'P'}/>
        <Button label={'Q'}/>
        <Button label={'R'}/>
        <Button label={'S'}/>
        <Button label={'T'}/>
      </View>
      <View className={'flex flex-row justify-evenly w-full'}>
        <Button label={'U'}/>
        <Button label={'V'}/>
        <Button label={'W'}/>
        <Button label={'X'}/>
        <Button label={'Y'}/>
      </View>
      <View className={'flex flex-row justify-evenly w-full'}>
        <Button label={'Z'}/>
        <Button label={'SP'}/>
        <Button label={'DEL'}/>
        <Button label={'/'}/>
        <Button label={'CLR'}/>
      </View>
    </View>
  );
};

export default Keypad;
