import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Button} from 'native-base';

const PjButton = ({BtnType, BtnColor, BtnText}) => {
  return BtnType === 'small' ? (
    <Button
      style={{
        width: 103,
        height: 36,
        backgroundColor: BtnColor,
        borderRadius: 30,
      }}>
      <Text style={styles.ButtonText}>{BtnText}</Text>
    </Button>
  ) : (
    <Button
      style={{
        width: 328,
        height: 42,
        backgroundColor: BtnColor,
        borderRadius: 56,
      }}>
      <Text style={styles.ButtonText}>{BtnText}</Text>
    </Button>
  );
};

export default PjButton;

const styles = StyleSheet.create({
  ButtonText: {
    flex: 1,
    width: 154,
    height: 22,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 22,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
