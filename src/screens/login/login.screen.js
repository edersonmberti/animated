import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';

import Styles from './login.style';

export function LoginScreen() {
  const [fadeAnim] = useState(new Animated.Value(0));
  const [RotateValueHolder] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
    }).start();
    StartImageRotateFunction();
  }, []);

  function StartImageRotateFunction() {
    Animated.timing(RotateValueHolder, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
    }).start();
  }

  const RotateData = RotateValueHolder.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Animated.View
      style={[
        Styles.container,
        { opacity: fadeAnim, transform: [{ rotate: RotateData }] },
      ]}>
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
    </Animated.View>
  );
}
