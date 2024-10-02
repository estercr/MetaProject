import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import wabg from './assets/w_bg.png';
import CustomHeader from './components/CustomerHeader';

function MetaAI() {
  return (
    <ImageBackground source={wabg} style={styles.container} resizeMode='cover'>
      <CustomHeader />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MetaAI;
