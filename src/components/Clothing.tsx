import React from 'react';
import {Image, StyleSheet} from 'react-native';
import calcSize from '../constants/calcSize';

const Clothing = props => {
  return props.isChosen ? (
    <Image style={[styles.iconStyle, props.style]} source={props.img} />
  ) : null;
};

export default Clothing;

const styles = StyleSheet.create({
  iconStyle: {
    margin: 1 * calcSize,
    width: 28 * calcSize,
    height: 25 * calcSize,
    resizeMode: 'stretch',
  },
});
