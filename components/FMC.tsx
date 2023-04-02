import React, { createContext, useContext, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import Screen from './Screen/Screen';
import PageButtons from './PageButtons/PageButtons';
import Numpad from './Numpad/Numpad';
import Keypad from './Keypad/Keypad';
import { init } from '../socket';
interface IFmcContext {
    socket: any
}
interface ProviderProps {
    children: React.ReactNode
}
const FmcContext = createContext<IFmcContext>({} as IFmcContext);
export const useFmc = (): any => useContext(FmcContext);

const FMC: React.FC = () => {
  const { socket } = init();

  const FmcProvider: React.FC<ProviderProps> = ({ children }) => {
    return (
      <FmcContext.Provider value={socket}>
        {children}
      </FmcContext.Provider>
    );
  };

  return (
    <View className={'bg-[#565656] flex-1'}>
      <FmcProvider>
        <Screen/>
        <PageButtons/>
        <View className={'flex flex-row'}>
          <Numpad/>
          <Keypad/>
        </View>
      </FmcProvider>
    </View>
  );
};

export default FMC;
