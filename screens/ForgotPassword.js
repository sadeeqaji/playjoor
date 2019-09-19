import React from 'react';

import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';

import {colors} from '../assests/DefaultColors';

class ForgetPassword extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require('../assests/img/background.png')}
        style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
          <View style={{margin: 10}}>
            <Text style={styles.TextHeader}>PlayJoor</Text>
            <Text
              style={{
                fontSize: 24,
                fontFamily: 'martelSans',
                fontStyle: 'normal',
                fontWeight: 'bold',
                color: '#FFFFFF',
              }}>
              Forgot your password?
            </Text>
            <Text style={styles.TextFooter}>
              Just enter your email address below, and we’ll send you a link to
              reset your password
            </Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Input
              IconName="md-person"
              inputUnderlineColor="#D5D5D5"
              IconColor="#F7DADB"
              InputBgColor="#1B1B39"
              InputWidth="100%"
              PlaceholderText="email"
            />

            <Button BtnColor={colors.pink} BtnText="Send a reset link" />
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  TextHeader: {
    fontSize: 16,
    fontFamily: 'Roboto',
    fontWeight: 'normal',
    fontStyle: 'normal',
    color: '#F2A423',
  },
  TextFooter: {
    fontFamily: 'martelSans',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: '#FBEDED',
  },
});

export default ForgetPassword;
