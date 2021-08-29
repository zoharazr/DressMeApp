import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';
import reducer from './reducer';

const persistUserConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['shoes', 'selectedClothing', 'pants', 'shirt', 'startSession'],
};

const rootReducer = persistReducer(persistUserConfig, reducer);

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
