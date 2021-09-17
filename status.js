import React from 'react';
import {StyleSheet, View} from 'react-native';

export const Status = props => {
  const ii = [{id: 1}, {id: 2}, {id: 3}];

  const v = ii.map(x => {
    const dd = {
      backgroundColor:
        props.list === x.id ? 'rgba(255, 255, 255, 0.4)' : '#fff',
    };
    return <View style={[styles.i, dd]} key={x.id}></View>;
  });
  return <View style={styles.block}>{v}</View>;
};

const styles = StyleSheet.create({
  block: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  i: {
    width: 10,
    height: 10,
    borderRadius: 10,
    marginHorizontal: 5,
    marginBottom: 20,
  },
});
