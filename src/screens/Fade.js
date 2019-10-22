import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Animated,
  TouchableOpacity,
} from 'react-native';

export function Fade() {
  const [fadeValue] = useState(new Animated.Value(0));

  useEffect(() => {
    appear();
  }, []);

  function appear() {
    return Animated.timing(fadeValue, {
      toValue: 1,
      duration: 3000,
    }).start(() => {
      alert('Appeared');
    });
  }

  function disappear() {
    return Animated.timing(fadeValue, {
      toValue: 0,
      duration: 3000,
    }).start(() => {
      alert('Disappeared');
    });
  }

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, { opacity: fadeValue }]}>
        <Text style={styles.text}>FADE</Text>
      </Animated.View>

      <TouchableOpacity style={styles.button} onPress={appear}>
        <Text style={styles.buttonText}>APPEAR</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={disappear}>
        <Text style={styles.buttonText}>DESAPEAR</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 200,
    backgroundColor: 'blue',
    marginBottom: 50,
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
