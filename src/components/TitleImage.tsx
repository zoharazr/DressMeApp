import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import calcSize from '../constants/calcSize';
import images from '../assets/images';

const TitleImage = props => {
  return (
    <View style={[styles.titleView, props?.titleStyle]}>
      <Image
        style={[styles.titleImg, props?.imageStyle]}
        source={images.dressMe}
      />
    </View>
  );
};

export default TitleImage;

const styles = StyleSheet.create({
  titleView: {
    width: 289 * calcSize,
    height: 106 * calcSize,
    marginVertical: 30 * calcSize,
    alignSelf: 'center',
    alignItems: 'center',
  },
  titleImg: {
    resizeMode: 'contain',
  },
});
