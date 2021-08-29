import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import TitleImage from '../../components/TitleImage';
import Cards from '../../components/Cards';
import Btns from '../../components/Btns';
import {useDispatch, batch} from 'react-redux';
import {REQUEST_ITEMS, SET_SESSION_TIME} from '../../store/actions/actionTypes';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    batch(() => {
      dispatch({
        type: REQUEST_ITEMS,
      });
      dispatch({
        type: SET_SESSION_TIME,
        payload: new Date(),
      });
    });
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <TitleImage />
      <Cards />
      <Btns />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
