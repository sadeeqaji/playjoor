import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Register from "./screens/Register"
import Login from "./screens/Login"
import ForgetPassword from "./screens/ForgotPassword"

const App = () => {
  return (
    <View>
      {/* <Register /> */}
      <Login />
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
