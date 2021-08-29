import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import Finish from '../screens/main/Finish';
import MainDrawer from './MainDrawer';

export type MainStackParams = {
  Drawer: {screen: 'Shirt' | 'Shoes' | 'Pants' | 'Home'};
  Finish: undefined;
};
const Stack = createStackNavigator<MainStackParams>();

const MainStack = () => {
  const {Navigator, Screen} = Stack;
  const options: StackNavigationOptions = {
    headerShown: false,
  };
  return (
    <Navigator screenOptions={options}>
      <Screen name="Drawer" component={MainDrawer} />
      <Screen name="Finish" component={Finish} />
    </Navigator>
  );
};

export default MainStack;
