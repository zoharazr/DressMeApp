import {
  RESET,
  SAVE_ITEM,
  SET_CLOTHES,
  SET_ITEMS,
  SET_SESSION_TIME,
} from '../actions/actionTypes';
import {produce} from 'immer';
import {PANTS, SHOES, SHIRT} from '../../constants/objectTypes';
import {DataItem, RootReducer} from '../actions/actionsInterface';

const initCloth = {
  type: '',
  color: '',
  size: '',
  name: '',
  brand: '',
};

const INITIAL_STATE: RootReducer = {
  selectedClothing: {
    shoes: initCloth,
    shirt: initCloth,
    pants: initCloth,
  },
  savedItems: 0,
  shoes: [],
  pants: [],
  shirt: [],
  startSession: null,
};

export default produce((state, action) => {
  switch (action.type) {
    case SET_CLOTHES:
      state.selectedClothing[action.payload.type] = action.payload;
      return state;

    case SAVE_ITEM:
      state.savedItems++;
      return state;

    case SET_ITEMS:
      action.payload.results?.map((item: DataItem) => {
        switch (item.type) {
          case SHOES:
            state.shoes.push(item);
            break;
          case PANTS:
            state.pants.push(item);
            break;
          case SHIRT:
            state.shirt.push(item);
            break;
          default:
            break;
        }
      });
      return state;

    case SET_SESSION_TIME:
      state.startSession = action.payload;
      return state;

    case RESET:
      state.startSession = new Date();
      state.selectedClothing = {
        pants: initCloth,
        shoes: initCloth,
        shirt: initCloth,
      };
      return state;
    default:
      return state;
  }
}, INITIAL_STATE);
