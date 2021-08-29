import React from 'react';
import {DataTable} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {RootReducer, SelectedItem} from '../store/actions/actionsInterface';

interface item {
  data: SelectedItem;
}
const Table = () => {
  const selectedClothing = useSelector(
    (state: RootReducer) => state.selectedClothing,
  );

  const TableRow = (data: item) => {
    return (
      <DataTable.Row>
        <DataTable.Cell>{data.data.name}</DataTable.Cell>
        <DataTable.Cell>{data.data.brand}</DataTable.Cell>
        <DataTable.Cell>{data.data.color}</DataTable.Cell>
        <DataTable.Cell>{data.data.size}</DataTable.Cell>
        <DataTable.Cell>{data.data.type}</DataTable.Cell>
      </DataTable.Row>
    );
  };

  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Name</DataTable.Title>
        <DataTable.Title>Brand</DataTable.Title>
        <DataTable.Title>Color</DataTable.Title>
        <DataTable.Title>size</DataTable.Title>
        <DataTable.Title>Type</DataTable.Title>
      </DataTable.Header>
      <TableRow data={selectedClothing.pants} />
      <TableRow data={selectedClothing.shirt} />
      <TableRow data={selectedClothing.shoes} />
    </DataTable>
  );
};

export default Table;
