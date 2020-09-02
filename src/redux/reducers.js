import {
  SET_PKMN_IMAGE,
  SET_PKMN_NAME,
  SET_PKMN_ID,
  SET_PKMN_TYPES,
  SET_PKMN_RESISTANCES,
  SET_PKMN_WEAKNESSES,
  SET_PKMN_ATTACKS,
} from '../constants/action-types';

const initialState = {
  imageUrl: '',
  name: '',
  id: '',
  types: [],
  resistances: [],
  weaknesses: [],
  attacks: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_PKMN_IMAGE:
      return Object.assign({}, state, {
        imageUrl: action.payload,
      });

    case SET_PKMN_NAME:
      return Object.assign({}, state, {
        name: action.payload,
      });

    case SET_PKMN_ID:
      return Object.assign({}, state, {
        id: action.payload,
      });

    case SET_PKMN_TYPES:
      return Object.assign({}, state, {
        types: action.payload,
      });

    case SET_PKMN_RESISTANCES:
      return Object.assign({}, state, {
        resistances: action.payload,
      });

    case SET_PKMN_WEAKNESSES:
      return Object.assign({}, state, {
        weaknesses: action.payload,
      });

    case SET_PKMN_ATTACKS:
      return Object.assign({}, state, {
        attacks: action.payload,
      });
  }

  return state;
}

export default reducer;
