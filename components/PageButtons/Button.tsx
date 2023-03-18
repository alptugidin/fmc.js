import React from 'react';
import { Text, View } from 'react-native';
interface IButton {
    text: string
}
const Button: React.FC<IButton> = ({ text }) => {
  let line1, line2;
  if (text.indexOf(' ') > 0) {
    line1 = text.split(' ')[0];
    line2 = text.split(' ')[1];
  } else {
    line1 = text;
  }
  return (
    <View className={'bg-black w-16 flex justify-center items-center rounded-lg py-1'}>
      <Text className={'color-white'}>
        {line1}
      </Text>
      {line2 &&
      <Text className={'color-white'}>
        {line2}
      </Text>
      }
    </View>
  );
};

export default Button;
