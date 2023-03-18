import React from 'react';
import { View } from 'react-native';
import Button from './Button';

const Keypad: React.FC = () => {
  return (
    <View className={'absolute top-[414px] w-[66.8%] right-0 flex flex-row flex-wrap justify-evenly mr-1'}>
      <Button label={'A'}/>
      <Button label={'B'}/>
      <Button label={'C'}/>
      <Button label={'D'}/>
      <Button label={'E'}/>
      <Button label={'F'}/>
      <Button label={'G'}/>
      <Button label={'H'}/>
      <Button label={'I'}/>
      <Button label={'J'}/>
      <Button label={'K'}/>
      <Button label={'L'}/>
      <Button label={'M'}/>
      <Button label={'N'}/>
      <Button label={'O'}/>
      <Button label={'P'}/>
      <Button label={'Q'}/>
      <Button label={'R'}/>
      <Button label={'S'}/>
      <Button label={'T'}/>
      <Button label={'U'}/>
      <Button label={'V'}/>
      <Button label={'W'}/>
      <Button label={'X'}/>
      <Button label={'Y'}/>
      <Button label={'Z'}/>
      <Button label={'SP'}/>
      <Button label={'DEL'}/>
      <Button label={'/'}/>
      <Button label={'CLR'}/>
    </View>
  );
};

export default Keypad;
