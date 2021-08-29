import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import LottieView from 'lottie-react-native';
import lottieFiles from '../../assets/lottie';
import calcSize from '../../constants/calcSize';
import {BRIGHT_BLUE, DES_BLUE} from '../../constants/colors';
import Table from '../../components/Table';
import {batch, useDispatch, useSelector} from 'react-redux';
import {RootReducer} from '../../store/actions/actionsInterface';
import Btn from '../../components/Btn';
import {useNavigation} from '@react-navigation/native';
import AnimatedLottieView from 'lottie-react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {MainStackParams} from '../../navigation/MainStack';
import {
  RESET,
  SAVE_ITEM,
  SET_SESSION_TIME,
} from '../../store/actions/actionTypes';
import Share from 'react-native-share';
import {ScrollView} from 'react-native-gesture-handler';
import Pie from '../../components/Pie';

type MainStack = StackNavigationProp<MainStackParams>;

const Finish = () => {
  const navigation = useNavigation<MainStack>();
  const startSession = useSelector((state: RootReducer) => state.startSession);
  const dispatch = useDispatch();
  const selectedClothing = useSelector(
    (state: RootReducer) => state.selectedClothing,
  );
  const [animation, setAnimation] = useState<AnimatedLottieView>();

  useEffect(() => {
    if (animation) {
      animation.play();
    }
  }, [animation]);

  const setSession = () => {
    let date;
    if (startSession) {
      date = new Date().getTime() - startSession.getTime();
      return date / 1000;
    }
    return 0;
  };

  const share = async () => {
    const options = {
      message: `I succeeded! I share the items: brand: ${selectedClothing.pants.brand} ,name: ${selectedClothing.pants.name}
      brand: ${selectedClothing.shirt.brand} ,name: ${selectedClothing.shoes.name}
      brand: ${selectedClothing.shirt.brand} ,name: ${selectedClothing.shoes.name}`,
    };
    Share.open(options).catch(err => {
      err && console.log(err);
    });
  };

  const finish = () => {
    batch(() => {
      dispatch({
        type: SAVE_ITEM,
      });
      dispatch({
        type: SET_SESSION_TIME,
        payload: new Date(),
      });
      dispatch({
        type: RESET,
      });
    });
    navigation.navigate('Drawer', {screen: 'Home'});
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <LottieView
          ref={(anim: AnimatedLottieView) => {
            setAnimation(anim);
          }}
          style={styles.LottieStyle}
          source={lottieFiles[Math.floor(Math.random() * lottieFiles.length)]}
        />
        <Text style={styles.completed}>COMPLETED</Text>

        <Table />
        <Text style={styles.Calculating}>
          {`shoes and pants size Calculating: ${
            selectedClothing.pants.size + selectedClothing.shoes.size
          }`}
        </Text>
        <Text style={styles.Calculating}>
          {`Time elapsed in selecting the set: ${setSession()}`}
        </Text>
        <Btn
          text={'Select another set'}
          viewStyle={styles.btnStyle}
          onPress={() => {
            finish();
          }}
        />
        <Btn
          text={'Share'}
          viewStyle={styles.shareStyle}
          onPress={() => {
            share();
          }}
        />
        <Pie />
      </View>
    </ScrollView>
  );
};

export default Finish;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#ffffff',
  },
  LottieStyle: {
    width: 300,
    height: 300,
  },
  completed: {
    fontSize: 26 * calcSize,
    color: BRIGHT_BLUE,
  },
  Calculating: {
    fontSize: 16 * calcSize,
    color: BRIGHT_BLUE,
    paddingTop: 10 * calcSize,
  },
  btnStyle: {
    width: 250 * calcSize,
    marginTop: 10 * calcSize,
    backgroundColor: DES_BLUE,
  },
  shareStyle: {
    width: 250 * calcSize,
    marginTop: 10 * calcSize,
    backgroundColor: BRIGHT_BLUE,
  },
});
