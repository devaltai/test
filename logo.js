import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const Logo = () => {
  return (
    <View style={styles.logos}>
      <View style={[styles.oval, styles.oval1]}></View>
      <View style={[styles.oval, styles.oval2]}></View>
      <View style={[styles.oval, styles.oval3]}></View>
      <Text style={styles.logoText}>Calm</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logos: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 55,
    marginBottom: 70,
  },
  logoText: {
    color: '#fff',
    fontSize: 30,
    marginLeft: -20,
  },
  oval: {
    backgroundColor: '#fff',
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  oval1: {
    transform: [{scaleY: 0.5}, {rotate: '-5deg'}],
  },
  oval2: {
    transform: [
      {scaleY: 0.6},
      {scaleX: 1.3},
      {translateX: -15},
      {translateY: 18},
      {rotate: '10deg'},
    ],
  },
  oval3: {
    transform: [
      {scaleY: 0.7},
      {scaleX: 1.7},
      {translateX: -23},
      {translateY: 34},
      {rotate: '-15deg'},
    ],
  },
});
