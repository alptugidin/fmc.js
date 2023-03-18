import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';

interface IButton {
    label: string
    disableMt?: boolean
}
export const Button: React.FC<IButton> = ({ label, disableMt }) => {
  return (
    <TouchableWithoutFeedback>

      <View className={`h-11 w-11 rounded-full bg-black flex items-center justify-center ${!disableMt ? 'mt-[8px]' : ''}`}>
        <Text className={'color-white text-xl'}>
          {label}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Button;
