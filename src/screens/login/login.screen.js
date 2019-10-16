import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import Styles from './login.style';

export function LoginScreen() {
  return (
    <View style={Styles.container}>
      <TextInput
        style={Styles.input}
        placeholder="Username"
        placeholderTextColor="#999"
        autoCorrect={false}
      />
      <TextInput
        style={Styles.input}
        placeholder="Password"
        placeholderTextColor="#999"
        autoCompleteType="password"
        secureTextEntry={true}
        autoCorrect={false}
      />
      <TouchableOpacity style={Styles.button}>
        <Text style={Styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}
