import React from 'react';
import {Text, StyleSheet} from 'react-native';
import calcSize from '../constants/calcSize';
import {DARK_GREY, WHITE} from '../constants/colors';

const Title = props => {
  return <Text style={[styles.textStyle, props.style]}>{props.text}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  textStyle: {
    color: WHITE,
    fontSize: 18 * calcSize,
    textAlign: 'center',
    marginHorizontal: 10 * calcSize,
    textShadowColor: DARK_GREY,
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 4,
  },
});
