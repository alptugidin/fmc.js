import React, { useState } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
interface IButton {
    label: string
    disableMt?: boolean
}
const Button: React.FC<IButton> = ({ label, disableMt }) => {
  let line1, line2;
  if (label.indexOf(' ') > 0) {
    line1 = label.split(' ')[0];
    line2 = label.split(' ')[1];
  } else {
    line1 = label;
  }
  return (
    <TouchableWithoutFeedback>
      <View className={`bg-black w-16 flex justify-center items-center rounded-lg h-10 ml-[3px] ${!disableMt ? 'mt-[3px]' : ''}`}>
        <Text className={'color-white'}>
          {line1}
        </Text>
        {line2 &&
      <Text className={'color-white'}>
        {line2}
      </Text>
        }
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Button;
