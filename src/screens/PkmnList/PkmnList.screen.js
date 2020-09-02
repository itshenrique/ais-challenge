import React, {useState, useEffect, useCallback} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {connect} from 'react-redux';
import styles from './PkmnList.styles';
import {
  getPokemonsList,
  getPokemonByID,
  searchPokemonByName,
} from '../../service/PokemonService';
import {Carousel, LoadingSpinner} from '../../components/';
import {
  setPkmnImage,
  setPkmnName,
  setPkmnID,
  setPkmnTypes,
  setPkmnResistances,
  setPkmnWeaknesses,
  setPkmnAttacks,
} from '../../redux/actions';

function PkmnList(props) {
  const [pokemonCardList, setPokemonCardList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [searchWord, setSearchWord] = useState('');
  const [isSearching, setIsSearch] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (
      Array.isArray(pokemonCardList) &&
      !pokemonCardList.length &&
      !isSearching
    ) {
      fetchData();
    }
  }, [fetchData, isSearching, pokemonCardList]);

  const fetchData = useCallback(async () => {
    console.debug('Fetching data');
    setIsLoading(true);
    const result = await getPokemonsList(pageNumber)
      .then((response) => response.data)
      .then((response) => response.cards)
      .then((cards) => cards)
      .catch((e) => {
        console.debug('Erro ao buscar dados da api...');
        console.error(e.stack);
      });
    setIsLoading(false);
    setPageNumber(pageNumber + 1);
    setPokemonCardList([...pokemonCardList, ...sortCardsByName(result)]);
  }, [pageNumber, pokemonCardList]);

  const fetchPokemonByID = async (id) => {
    console.debug('Fetching pokemon data by ID');
    setIsLoading(true);
    const result = await getPokemonByID(id)
      .then((response) => response.data)
      .then((response) => response.cards)
      .then((cards) => cards[0])
      .catch((e) => {
        console.debug('Erro ao buscar dados da api...');
        console.error(e.stack);
      });
    setIsLoading(false);
    setPokemonStore(result);
    props.navigation.navigate('PkmnDetails');
  };

  const resetList = () => {
    setPokemonCardList([]);
    setIsLoading(true);
    setIsSearch(true);
    setPageNumber(0);
  };

  const searchPokemon = async () => {
    console.debug('Fetching pokemon data by Name');
    resetList();

    const result = await searchPokemonByName(searchWord, pageNumber)
      .then((response) => response.data)
      .then((response) => response.cards)
      .then((cards) => cards)
      .catch((e) => {
        console.debug('Erro ao buscar dados da api...');
        console.error(e.stack);
      });

    setIsLoading(false);
    setPokemonCardList(sortCardsByName(result));
  };

  const sortCardsByName = (cardList) => {
    return cardList.sort((first, second) => {
      if (first.name > second.name) {
        return 1;
      }
      if (first.name < second.name) {
        return -1;
      }
      return 0;
    });
  };

  const setPokemonStore = ({
    id,
    name,
    imageUrlHiRes,
    types,
    resistances,
    weaknesses,
    attacks,
  }) => {
    props.setPkmnID(id);
    props.setPkmnName(name);
    props.setPkmnImage(imageUrlHiRes);
    props.setPkmnTypes(types);
    props.setPkmnResistances(resistances);
    props.setPkmnWeaknesses(weaknesses);
    props.setPkmnAttacks(attacks);
  };

  const cleanSearch = () => {
    console.debug('Pesquisa Limpa');
    setPokemonCardList([]);
    setIsSearch(false);
    setSearchWord('');
    fetchData();
  };

  const renderCleanButton = () => {
    if (isSearching) {
      return (
        <TouchableOpacity style={styles.cleanButton} onPress={cleanSearch}>
          <Text style={styles.cleanButtonText}>Limpar Pesquisa</Text>
        </TouchableOpacity>
      );
    }
  };

  const renderScreen = () => (
    <>
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          onChangeText={setSearchWord}
          value={searchWord}
          onSubmitEditing={searchPokemon}
        />
        <TouchableOpacity style={styles.searchButton} onPress={searchPokemon}>
          <Text style={styles.textStyle}>Pesquisa</Text>
        </TouchableOpacity>
      </View>
      {renderCleanButton()}
      <Carousel
        entries={pokemonCardList}
        fetchData={isSearching ? searchPokemon : fetchData}
        onPressCard={fetchPokemonByID}
      />
    </>
  );

  const renderLoading = () => {
    if (isLoading) {
      return <LoadingSpinner />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderLoading()}
      {renderScreen()}
    </SafeAreaView>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setPkmnImage: (imageUrl) => dispatch(setPkmnImage(imageUrl)),
    setPkmnName: (name) => dispatch(setPkmnName(name)),
    setPkmnID: (id) => dispatch(setPkmnID(id)),
    setPkmnTypes: (types) => dispatch(setPkmnTypes(types)),
    setPkmnResistances: (resistances) =>
      dispatch(setPkmnResistances(resistances)),
    setPkmnWeaknesses: (weaknesses) => dispatch(setPkmnWeaknesses(weaknesses)),
    setPkmnAttacks: (attacks) => dispatch(setPkmnAttacks(attacks)),
  };
};

const mapStateToProps = (pokemon) => ({
  pokemon,
});

export default connect(mapStateToProps, mapDispatchToProps)(PkmnList);
