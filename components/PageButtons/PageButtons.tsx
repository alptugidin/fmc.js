import React from 'react';
import { Text, View } from 'react-native';
import Button from './Button';

export const PageButtons: React.FC = () => {
  return (
    <>
      <View className={'bg-[#565656] w-[99%] ml-[0.75%] top-[325px] shadow-xl shadow-black rounded-t-lg rounded-br-lg flex flex-row flex-wrap pb-[3px]'}>

        <Button label={'INIT REF'}/>
        <Button label={'RTE'}/>
        <Button label={'CLB'}/>
        <Button label={'CRZ'}/>
        <Button label={'DES'}/>
        <Button label={'BRT'}/>

        <Button label={'MENU'}/>
        <Button label={'LEGS'}/>
        <Button label={'DEP ARR'}/>
        <Button label={'HOLD'}/>
        <Button label={'PROG'}/>
        <Button label={'EXEC'}/>

      </View>
      <View className={'bg-[#565656] w-[33.2%] ml-[0.75%] top-[325px] shadow-xl shadow-black rounded-b-lg flex flex-row flex-wrap pb-[3px]'}>

        <Button label={'N1 LIMIT'} disableMt/>
        <Button label={'FIX'} disableMt/>
        <Button label={'PREV PAGE'} />
        <Button label={'NEXT PAGE'} />

      </View>
    </>
  );
};

export default PageButtons;
