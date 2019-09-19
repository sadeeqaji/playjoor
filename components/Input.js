import React from 'react';
import {StyleSheet} from 'react-native';
import {Input} from 'galio-framework';
import Icon from 'react-native-vector-icons/Ionicons';

const PjInput = ({
  InputWidth,
  InputBgColor,
  PlaceholderText,
  inputUnderlineColor,
  IconName,
  IconColor,
}) => {
  return (
    <Input
      placeholder={PlaceholderText}
      borderless={true}
      underlineColorAndroid={inputUnderlineColor}
      style={{
        width: InputWidth,
        borderWidth: 1,
        backgroundColor: InputBgColor,
        color: '#FFFFFF',
      }}
      iconContent={<Icon size={25} name={IconName} color={IconColor} />}
    />
  );
};

export default PjInput;
