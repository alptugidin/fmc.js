import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
interface IButton {
    label: string
    disableMl?: boolean
}
const Button: React.FC<IButton> = ({ label ,disableMl}) => {
  return (
    <TouchableWithoutFeedback>
      <View className={`w-10 h-10 rounded-lg bg-black flex justify-center items-center mt-[12px] ${disableMl ? '' : 'ml-[12px]'}`}>
        <Text className={'color-white text-xl'}>
          {label}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Button;
