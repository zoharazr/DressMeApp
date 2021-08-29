import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Item from '../../components/Item';
import calcSize from '../../constants/calcSize';
import {useSelector} from 'react-redux';
import {DataItem, RootReducer} from '../../store/actions/actionsInterface';
import {TextInput} from 'react-native-paper';
import {WHITE, WHITE_SMOKE} from '../../constants/colors';
import {useState} from 'react';
import searchFilter from '../../components/Search';

interface ItemInterface {
  item: DataItem;
}

const Shoes = () => {
  const itemsDb = useSelector((state: RootReducer) => state.shoes);
  const [search, setSearch] = useState('');
  const [filterData, setFilterData] = useState<any>();
  const renderGridItem: any = (itemData: ItemInterface) => (
    <Item data={itemData} />
  );

  const input = (text: string) => {
    const data = searchFilter(itemsDb, text);
    setFilterData(data);
    setSearch(text);
  };

  return (
    <View>
      <Text style={styles.countItems}>
        {`count of Shoes ${itemsDb.length}`}:
      </Text>
      <TextInput
        value={search}
        placeholder={'search'}
        onChangeText={text => input(text)}
        style={styles.textInputStyle}
      />
      <FlatList
        keyExtractor={(item, index) => String(index)}
        data={filterData ? filterData : itemsDb.slice(0, 5)}
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

export default Shoes;
