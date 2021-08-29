import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import calcSize from '../constants/calcSize';
import {DARK_GREY, DES_BLUE, WHITE} from '../constants/colors';

const NumberOfSets = props => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.textView}>
          <Text style={styles.textStyle}>{props.title}</Text>
        </View>
        <View style={styles.setsView}>
          <Text style={[styles.textStyle, styles.scoreText]}>{props.sets}</Text>
        </View>
      </View>
    </View>
  );
};

export default NumberOfSets;

const styles = StyleSheet.create({
  container: {
    backgroundColor: DES_BLUE,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: DARK_GREY,
    height: 60 * calcSize,
    width: 150 * calcSize,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  textView: {
    width: 90,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: WHITE,
    fontSize: 18 * calcSize,
    textAlign: 'center',
    marginHorizontal: 10 * calcSize,
    textShadowColor: DARK_GREY,
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 4,
  },
  scoreText: {
    fontSize: 22 * calcSize,
    textAlign: 'center',
  },
  setsView: {
    backgroundColor: DARK_GREY,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
