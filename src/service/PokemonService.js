import Axios from 'axios';
import {pokemonTcgApi} from './Config';

const BASE_URL = `${pokemonTcgApi.BASE_URL}/${pokemonTcgApi.API_VERSION}/`;

export const getPokemonsList = (page) => {
  const url = `${BASE_URL}${pokemonTcgApi.CARDS_URL}`;
  const body = {
    params: {
      page: page,
    },
  };
  return Axios.get(url, body);
};

export const getPokemonByID = (id) => {
  const url = `${BASE_URL}${pokemonTcgApi.CARDS_URL}`;
  const body = {
    params: {
      id: id,
    },
  };
  return Axios.get(url, body);
};

export const searchPokemonByName = (name, page) => {
  const url = `${BASE_URL}${pokemonTcgApi.CARDS_URL}`;
  const body = {
    params: {
      name,
      page,
    },
  };
  return Axios.get(url, body);
};
