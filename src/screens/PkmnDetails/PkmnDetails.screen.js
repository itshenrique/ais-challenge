import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import styles from './PkmnDetails.styles';
import {Modal} from '../../components';

function PkmnDetails({navigation, pokemon}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [attackDetails, setAttackDetails] = useState({});

  useEffect(() => {
    navigation.setOptions({title: pokemon.name});
  }, [navigation, pokemon.name]);

  const _renderTypeList = (label, data) => {
    if (data) {
      return (
        <Text style={{...styles.boldText, ...styles.detailsText}}>
          {label}: {data.join(', ')}
        </Text>
      );
    }
  };

  const _renderResistancesList = (label, data) => {
    if (data) {
      return (
        <Text style={{...styles.boldText, ...styles.detailsText}}>
          {label}:{' '}
          {data
            .map((resistance) => `${resistance.type} ${resistance.value}`)
            .join(', ')}
        </Text>
      );
    }
  };

  const _renderWeaknessesList = (label, data) => {
    if (data) {
      return (
        <Text style={{...styles.boldText, ...styles.detailsText}}>
          {label}:{' '}
          {data
            .map((weakness) => `${weakness.type} ${weakness.value}`)
            .join(', ')}
        </Text>
      );
    }
  };

  const _renderAttacksList = (label, data) => {
    if (data) {
      return (
        <View style={styles.attacksView}>
          <Text style={{...styles.boldText, ...styles.detailsTextLink}}>
            {label}:
          </Text>
          {data.map((attack, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => _onPressAttackDetail(attack)}>
              <Text style={styles.detailsTextLink}>
                {'- '}
                {attack.name}{' '}
                <View style={styles.infoButton}>
                  <Text style={styles.infoButtonIcon}>?</Text>
                </View>
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      );
    }
  };

  const _onPressAttackDetail = (attackInfo) => {
    _setAttackDetails(attackInfo);
    _openModal();
  };

  const _setAttackDetails = ({convertedEnergyCost, name, damage, text}) =>
    setAttackDetails({
      cost: convertedEnergyCost,
      description: text,
      name,
      damage,
    });

  const _openModal = () => setModalVisible(true);

  const _closeModal = () => setModalVisible(false);

  const _renderModalContent = () => (
    <>
      <View style={styles.modalField}>
        <Text style={{...styles.boldText, ...styles.modalText}}>
          Custo de Energia:
        </Text>
        <Text style={styles.modalText}>{attackDetails.cost}</Text>
      </View>
      <View style={styles.modalField}>
        <Text style={{...styles.boldText, ...styles.modalText}}>Nome:</Text>
        <Text style={styles.modalText}>{attackDetails.name}</Text>
      </View>
      <View style={styles.modalField}>
        <Text style={{...styles.boldText, ...styles.modalText}}>Dano:</Text>
        <Text style={styles.modalText}>{attackDetails.damage}</Text>
      </View>
      <View style={styles.modalField}>
        <Text style={{...styles.boldText, ...styles.modalText}}>
          Descrição:
        </Text>
        <Text style={styles.modalText}>{attackDetails.description}</Text>
      </View>
    </>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.cardBackground}>
          <Image style={styles.thumbnail} source={{uri: pokemon.imageUrl}} />
          <View style={styles.detailsContainer}>
            <Text style={{...styles.boldText, ...styles.detailsText}}>
              Nome: {pokemon.name}
            </Text>
            <Text style={{...styles.boldText, ...styles.detailsText}}>
              ID: {pokemon.id}
            </Text>
            {_renderTypeList('Tipo(s)', pokemon.types)}
            {_renderResistancesList('Resistência(s)', pokemon.resistances)}
            {_renderWeaknessesList('Fraqueza(s)', pokemon.weaknesses)}
            {_renderAttacksList('Ataque(s)', pokemon.attacks)}
          </View>
        </View>
      </ScrollView>
      <Modal modalVisible={modalVisible} closeModal={_closeModal}>
        {_renderModalContent()}
      </Modal>
    </SafeAreaView>
  );
}

const mapStateToProps = (pokemon) => ({
  pokemon,
});

export default connect(mapStateToProps)(PkmnDetails);
