import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Text,
  TouchableOpacity,
} from 'react-native';

export function Rotate() {
  const [rotateValue, setRotateValue] = useState(new Animated.Value(0));
  const [isRotate, setIsRotate] = useState(false);

  useEffect(() => {
    rotate();
  }, []);

  function rotate() {
    setIsRotate(true);
    Animated.timing(rotateValue, {
      toValue: 1,
      duration: 3000,
    }).start(() => {
      setRotateValue(new Animated.Value(0));
      setIsRotate(false);
    });
  }

  const interpolateRotation = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '-7200deg'],
  });

  const animatedStyle = {
    transform: [{ rotate: interpolateRotation }],
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyle]}>
        <Text style={styles.text}>ROTATE</Text>
      </Animated.View>

      <TouchableOpacity style={styles.button} onPress={rotate}>
        <Text style={styles.buttonText}>{isRotate ? 'Stop' : 'Start'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 70,
  },
  text: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  button: {
    marginBottom: 10,
    backgroundColor: 'red',
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
