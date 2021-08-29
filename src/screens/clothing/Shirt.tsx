import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Item from '../../components/Item';
import calcSize from '../../constants/calcSize';
import {useSelector} from 'react-redux';
import {DataItem, RootReducer} from '../../store/actions/actionsInterface';
import searchFilter from '../../components/Search';
import {useState} from 'react';
import {WHITE, WHITE_SMOKE} from '../../constants/colors';

interface ItemInterface {
  item: DataItem;
}

const Shirt = () => {
  const shirtDb = useSelector((state: RootReducer) => state.shirt);
  const [search, setSearch] = useState('');
  const [filterData, setFilterData] = useState<any>();
  const renderGridItem: any = (itemData: ItemInterface) => (
    <Item data={itemData} />
  );

  const input = (text: string) => {
    const data = searchFilter(shirtDb, text);
    setFilterData(data);
    setSearch(text);
  };

  return (
    <View>
      <Text style={styles.countItems}>
        {`count of Shoes ${shirtDb.length}`}:
      </Text>
      <TextInput
        value={search}
        placeholder={'search'}
        onChangeText={text => input(text)}
        style={styles.textInputStyle}
      />
      <FlatList
        keyExtractor={(item, index) => String(index)}
        data={filterData ? filterData : shirtDb.slice(0, 5)}
        renderItem={renderGridItem}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    marginBottom: 100 * calcSize,
  },
  countItems: {
    fontSize: 22,
    alignSelf: 'center',
  },
  textInputStyle: {
    height: 40 * calcSize,
    borderWidth: 1,
    borderColor: WHITE_SMOKE,
    margin: 10 * calcSize,
    paddingLeft: 20 * calcSize,
    backgroundColor: WHITE,
  },
});

export default Shirt;
