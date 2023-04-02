import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { useFmc } from '../FMC';
interface IButton {
    label: string
    disableMl?: boolean
}
const Button: React.FC<IButton> = ({ label, disableMl }) => {
  const socket = useFmc();
  const handleKeyDown = (): void => {
    socket.emit('write', 'L:switch_573_73X');
  };
  return (
    <TouchableWithoutFeedback onPress={handleKeyDown}>
      <View className={'w-[16%] h-[40px] rounded-lg bg-black flex justify-center items-center mt-[12px]'}>
        <Text className={'color-white text-xl'}>
          {label}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Button;
