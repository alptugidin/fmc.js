import React from 'react';
import { Text, View, Dimensions, PixelRatio } from 'react-native';
import Button from './Button';
import { type IPageButtons } from '../../types';

export const PageButtons: React.FC<IPageButtons> = ({ socket }) => {
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
  const handleButton = (): void => {
    socket.emit('write', 'L:SSS');
  };
  return (
    <>
      <View
        className={'bg-[#565656] w-full px-1 shadow-xl shadow-black rounded-t-lg rounded-br-lg flex flex-row flex-wrap pb-[3px]'}>

        <View className={'flex flex-row w-full justify-between'}>
          <Button label={'INIT REF'} onPress={handleButton}/>
          <Button label={'RTE'}/>
          <Button label={'CLB'}/>
          <Button label={'CRZ'}/>
          <Button label={'DES'}/>
          <Button label={'BRT'}/>
        </View>

        <View className={'flex flex-row w-full justify-between'}>

          <Button label={'MENU'}/>
          <Button label={'LEGS'}/>
          <Button label={'DEP ARR'}/>
          <Button label={'HOLD'}/>
          <Button label={'PROG'}/>
          <Button label={'EXEC'}/>

        </View>

      </View>
      <View
        className={'bg-[#565656] w-1/3 shadow-xl shadow-black rounded-b-lg flex flex-row flex-wrap pb-[3px] px-1'}>

        <Button label={'N1 LIMIT'} disableMt/>
        <Button label={'FIX'} disableMt customMl/>
        <Button label={'PREV PAGE'}/>
        <Button label={'NEXT PAGE'} customMl/>

      </View>
    </>
  );
};

export default PageButtons;
