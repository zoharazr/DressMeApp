import React, {useState} from 'react';
import {Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import calcSize from '../constants/calcSize';
import {Card, Title} from 'react-native-paper';
import {WHITE, WHITE_SMOKE} from '../constants/colors';
import {ScrollView} from 'react-native-gesture-handler';
import {DataItem, SelectedItem} from '../store/actions/actionsInterface';
import {useDispatch} from 'react-redux';
import {SET_CLOTHES} from '../store/actions/actionTypes';
import {StackNavigationProp} from '@react-navigation/stack';
import {MainStackParams} from '../navigation/MainStack';
import {useNavigation} from '@react-navigation/native';
import {ADD_THIS_ITEM, CANCEL, DRAWER, HOME, OK} from '../constants/strings';

export interface Props {
  data: {item: DataItem};
}
interface IsSelected {
  isSize: boolean;
  isColor: boolean;
}

type MainStack = StackNavigationProp<MainStackParams>;

const Item: React.FC<Props> = ({data}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation<MainStack>();

  const [item, setItem] = useState<SelectedItem>({
    type: data.item.type,
    color: '',
    size: '',
    brand: data.item.brand,
    name: data.item.name,
  });

  const [selected, setSelected] = useState<IsSelected>({
    isColor: false,
    isSize: false,
  });

  const chooseColor = (color: string) => {
    setItem({...item, color});
    setSelected({...selected, isColor: !selected.isColor});
  };

  const popUp = (size: number | string) => {
    let message = `name: ${data.item.name}, type: ${data.item.type}, color: ${item.color}, size: ${size}, brand: ${data.item.brand}, name: ${data.item.name}`;

    Alert.alert(ADD_THIS_ITEM, message, [
      {
        text: CANCEL,
        onPress: () => setSelected({...selected, isSize: false}),
        style: CANCEL,
      },
      {text: OK, onPress: () => selectItem(size)},
    ]);
  };

  const selectItem = (size: number | string) => {
    dispatch({
      type: SET_CLOTHES,
      payload: {...item, size},
    });
    navigation.navigate(DRAWER, {screen: HOME});
  };

  return (
    <Card style={styles.container}>
      <Card.Content style={styles.titleView}>
        <Title style={styles.titleName}>{data.item.name}</Title>
        <Title style={styles.titleBrand}>{data.item.brand}</Title>
      </Card.Content>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.item.colors.map((color: string, id: number) => (
          <TouchableOpacity
            key={id}
            onPress={() => chooseColor(color)}
            style={[styles.btnStyle, {backgroundColor: color}]}
          />
        ))}
      </ScrollView>
      {selected.isColor && (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {data.item.sizes.map((size: string | number, id: number) => (
            <TouchableOpacity
              key={id}
              onPress={() => popUp(size)}
              style={[styles.btnStyle, {backgroundColor: WHITE}]}>
              <Text>{size}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </Card>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    width: 300 * calcSize,
    marginTop: 20 * calcSize,
    alignSelf: 'center',
    backgroundColor: WHITE_SMOKE,
  },
  titleView: {
    marginBottom: 10,
  },
  btnStyle: {
    width: 30 * calcSize,
    height: 30 * calcSize,
    borderRadius: 100 * calcSize,
    borderWidth: 3 * calcSize,
    borderColor: '#c7c7c7',
    marginHorizontal: 3,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleName: {
    fontSize: 20 * calcSize,
  },
  titleBrand: {
    fontSize: 16 * calcSize,
  },
});
