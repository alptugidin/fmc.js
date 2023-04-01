import React, { useEffect, useState } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
interface IButton {
    label: string
    disableMt?: boolean
    customMl?: boolean
    onPress?: () => void
}
const Button: React.FC<IButton> = ({ label, disableMt, customMl, onPress }) => {
  let line1, line2;
  if (label.indexOf(' ') > 0) {
    line1 = label.split(' ')[0];
    line2 = label.split(' ')[1];
  } else {
    line1 = label;
  }
  const [customW, setCustomW] = useState(false);

  useEffect(() => {
    if (
      label === 'N1 LIMIT' ||
      label === 'FIX' ||
      label === 'PREV PAGE' ||
      label === 'NEXT PAGE'
    ) {
      setCustomW(true);
    }
  }, []);

  const handle = (): void => {
    if (onPress) {
      onPress();
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handle}>
      <View className={`bg-black flex justify-center items-center rounded-lg h-10 ${!disableMt ? 'mt-[3px]' : ''} ${customW ? 'w-[47%]' : 'w-[15%]'} ${!customMl ? '' : 'ml-[7px]'}`}>
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
