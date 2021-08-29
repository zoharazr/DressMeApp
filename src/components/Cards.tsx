import React from 'react';
import {View, StyleSheet} from 'react-native';
import calcSize from '../constants/calcSize';
import Card from './Card';
import Title from './Title';
import Clothing from './Clothing';
import {useSelector} from 'react-redux';
import {RootReducer} from '../store/actions/actionsInterface';
import {clothingTypes} from '../assets/images';

const Cards = () => {
  const savedItems = useSelector((state: RootReducer) => state.savedItems);
  const selectedClothing = useSelector(
    (state: RootReducer) => state.selectedClothing,
  );

  const choose = () => {
    let count = 0;
    selectedClothing.pants.brand !== '' && count++;
    selectedClothing.shirt.brand !== '' && count++;
    selectedClothing.shoes.brand !== '' && count++;

    return `${count}/3`;
  };

  const ClothingTypes = [
    {
      img: clothingTypes.pants,
      isChosen: selectedClothing.pants.brand !== '',
    },
    {
      img: clothingTypes.shirt,
      isChosen: selectedClothing.shirt.brand !== '',
    },
    {
      img: clothingTypes.shoes,
      isChosen: selectedClothing.shoes.brand !== '',
    },
  ];

  return (
    <View style={styles.container}>
      <Card text={savedItems}>
        <Title text="number of sets" />
      </Card>

      <Card text={choose()}>
        <View style={styles.clothingView}>
          {ClothingTypes.map((ClothingType, index) => (
            <Clothing
              img={ClothingType.img}
              isChosen={ClothingType.isChosen}
              key={index}
            />
          ))}
        </View>
      </Card>
    </View>
  );
};

export default Cards;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 330 * calcSize,
    height: 150 * calcSize,
    alignItems: 'center',
    alignSelf: 'center',
  },
  clothingView: {
    flexDirection: 'row',
  },
});
