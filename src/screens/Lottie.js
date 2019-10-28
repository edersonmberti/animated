import React from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

import game from '../assets/animations/game.json';

export function Lottie() {
  return (
    <View style={styles.container}>
      <LottieView source={game} autoPlay loop />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
