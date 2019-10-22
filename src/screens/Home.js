import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export function Home(props) {
  function navigate(routeName) {
    const { navigation } = props;

    navigation.navigate(routeName);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigate('Fade')} style={styles.button}>
        <Text style={styles.buttonText}>FADE</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigate('Rotate')}
        style={styles.button}>
        <Text style={styles.buttonText}>ROTATE</Text>
      </TouchableOpacity>
    </View>
  );
}

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '75%',
    height: 50,
    backgroundColor: '#999',
    marginTop: 15,
  },
  buttonText: {
    fontWeight: '500',
    color: '#fff',
  },
});

export default styles;
