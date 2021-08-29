import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {FINISH} from '../constants/strings';
import {MainStackParams} from '../navigation/MainStack';
import {RootReducer} from '../store/actions/actionsInterface';
import Btn from './Btn';

type MainStack = StackNavigationProp<MainStackParams>;

const Btns = () => {
  const navigation = useNavigation<MainStack>();
  const selectedClothing = useSelector(
    (state: RootReducer) => state.selectedClothing,
  );

  return (
    <View>
      <Btn
        text={'Shirt'}
        onPress={() => navigation.navigate('Drawer', {screen: 'Shirt'})}
      />
      <Btn
        text={'Shoes'}
        onPress={() => navigation.navigate('Drawer', {screen: 'Shoes'})}
      />
      <Btn
        text={'Pants'}
        onPress={() => navigation.navigate('Drawer', {screen: 'Pants'})}
      />
      {selectedClothing.pants.brand !== '' &&
        selectedClothing.shirt.brand !== '' &&
        selectedClothing.shoes.brand !== '' && (
          <Btn text={FINISH} onPress={() => navigation.navigate(FINISH)} />
        )}
    </View>
  );
};

export default Btns;
