import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { type ICells } from '../../types';

const Cells: React.FC<ICells> = ({ cduData }) => {
  // const row: string [] = [];
  useEffect(() => {
    // for (let i = 0; i < 14; i++) {
    //   row[i] = [...cduData[i]];
    // }

  }, [cduData]);

  return (
    <View>
    </View>
  );
};

export default Cells;
