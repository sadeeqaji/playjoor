import React from 'react';

import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';

import {colors} from '../assests/DefaultColors';

class Login extends React.Component {
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
              Log Into your Account
            </Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Input
              IconName="md-person"
              inputUnderlineColor="#D5D5D5"
              IconColor="#F7DADB"
              InputBgColor="#1B1B39"
              InputWidth="100%"
              PlaceholderText="username"
            />

            <Input
              IconName="md-person"
              inputUnderlineColor="#D5D5D5"
              IconColor="#F7DADB"
              InputBgColor="#1B1B39"
              InputWidth="100%"
              PlaceholderText="Password"
            />
            <Text style={styles.TextForget}>Forgot Password</Text>
            <Button BtnColor={colors.pink} BtnText="Create Account" />
          </View>
          <View>
            <Text
              style={{
                fontFamily: 'martelSans',
                fontSize: 14,
                fontStyle: 'normal',
                fontWeight: 'normal',
                textAlign: 'center',
                color: '#FFFFFF',
              }}>
              Don’t have an account?{' '}
              <Text style={{color: '#F2A423'}}>Create one</Text>
            </Text>
            <View>
              <View style={{alignItems: 'center'}}>
                <Text style={styles.TextFooter}>
                  Terms of Use
                  <Text style={styles.TextFooter}> and </Text>
                  <Text style={styles.TextFooter}> privacy Policy </Text>
                </Text>
              </View>
            </View>
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
    textAlign: 'center',
    color: '#FFFFFF',
  },
  TextForget: {
    fontFamily: 'martelSans',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'center',
    color: '#F2A423',
    margin: 10,
  },
});

export default Login;
