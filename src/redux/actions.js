import {
  SET_PKMN_IMAGE,
  SET_PKMN_NAME,
  SET_PKMN_ID,
  SET_PKMN_TYPES,
  SET_PKMN_RESISTANCES,
  SET_PKMN_WEAKNESSES,
  SET_PKMN_ATTACKS,
} from '../constants/action-types';

export function setPkmnImage(payload) {
  return {type: SET_PKMN_IMAGE, payload};
}

export function setPkmnName(payload) {
  return {type: SET_PKMN_NAME, payload};
}

export function setPkmnID(payload) {
  return {type: SET_PKMN_ID, payload};
}

export function setPkmnTypes(payload) {
  return {type: SET_PKMN_TYPES, payload};
}

export function setPkmnResistances(payload) {
  return {type: SET_PKMN_RESISTANCES, payload};
}

export function setPkmnWeaknesses(payload) {
  return {type: SET_PKMN_WEAKNESSES, payload};
}

export function setPkmnAttacks(payload) {
  return {type: SET_PKMN_ATTACKS, payload};
}
