import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PieChart from 'react-native-pie-chart';
import {useSelector} from 'react-redux';
import calcSize from '../constants/calcSize';
import {RootReducer} from '../store/actions/actionsInterface';

export const Pie = () => {
  const widthAndHeight = 250;
  const selectedClothing = useSelector(
    (state: RootReducer) => state.selectedClothing,
  );
  const series = [
    selectedClothing.pants.size,
    selectedClothing.shoes.size,
    selectedClothing.shirt.size === 's'
      ? 10
      : selectedClothing.shirt.size === 'm'
      ? 15
      : selectedClothing.shirt.size === 'l'
      ? 20
      : 25,
  ];
  const sliceColor = ['#F44336', '#2196F3', '#FFEB3B'];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Amounts</Text>
      <PieChart
        widthAndHeight={widthAndHeight}
        series={series}
        sliceColor={sliceColor}
        doughnut={true}
        coverRadius={0.45}
        coverFill={'#FFF'}
      />
    </View>
  );
};

export default Pie;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20 * calcSize,
  },
  title: {
    fontSize: 24,
    margin: 10,
  },
});
