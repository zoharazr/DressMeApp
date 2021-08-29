import React, {FC} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  TextProps,
  ViewStyle,
  TextStyle,
} from 'react-native';
import calcSize from '../constants/calcSize';
import {DARK_GREY, WHITE, BRIGHT_BLUE} from '../constants/colors';

export interface BtnProps extends TouchableOpacityProps {
  text?: string;
  disabled?: boolean;
  textProps?: TextProps;
  viewStyle?: ViewStyle;
  textStyle?: TextStyle;
}

const Btn: FC<BtnProps> = ({
  text = '',
  textProps,
  viewStyle,
  textStyle,
  ...others
}) => {
  return (
    <TouchableOpacity {...others} style={[styles.container, viewStyle]}>
      <Text
        style={[styles.textStyle, styles.scoreText, textStyle]}
        {...textProps}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Btn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: BRIGHT_BLUE,
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
    marginTop: 10 * calcSize,
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
