import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Pants from '../screens/clothing/Pants';
import Shirt from '../screens/clothing/Shirt';
import Shoes from '../screens/clothing/Shoes';
import Home from '../screens/main/Home';

export type DrawerParams = {
  Home: {screen: 'Home'};
  Pants: {screen: 'Pants'};
  Shirt: {screen: 'Shirt'};
  Shoes: {screen: 'Shoes'};
};

const Drawer = createDrawerNavigator<DrawerParams>();

const MainDrawer = () => {
  const {Navigator, Screen} = Drawer;

  return (
    <Navigator>
      <Screen name="Home" component={Home} />
      <Screen name="Shoes" component={Shoes} />
      <Screen name="Shirt" component={Shirt} />
      <Screen name="Pants" component={Pants} />
    </Navigator>
  );
};

export default MainDrawer;
