import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const {width: viewportWidth} = Dimensions.get('window');

function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

const sliderWidth = wp(100);
const itemWidth = sliderWidth * 0.6;

function MyCarousel(props) {
  const _renderType = (types) => {
    if (types) {
      return (
        <Text style={styles.detailsText}>Tipo(s): {types.join(', ')}</Text>
      );
    }
  };

  const _renderField = (label, content) => (
    <View style={styles.fieldView}>
      <Text style={styles.detailsText}>{label}:</Text>
      <Text style={styles.detailsText}>{content}</Text>
    </View>
  );

  const _renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.slide}
        onPress={() => props.onPressCard(item.id)}>
        <Image
          style={styles.thumbnail}
          resizeMode="contain"
          source={{uri: item.imageUrl}}
        />
        <View style={styles.detailsView}>
          {_renderField('Nome', item.name)}
          {_renderField('ID', item.id)}
          {_renderType(item.types)}
        </View>
      </TouchableOpacity>
    );
  };

  const _updateList = (number) => {
    if (props.entries.length - number === 10) {
      props.fetchData();
    }
  };
  return (
    <Carousel
      layout="default"
      data={props.entries}
      renderItem={_renderItem}
      sliderWidth={sliderWidth}
      itemWidth={itemWidth}
      loop={false}
      onScrollIndexChanged={_updateList}
    />
  );
}

const styles = StyleSheet.create({
  slide: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 6,
    justifyContent: 'space-around',
    height: '70%',
  },
  thumbnail: {
    height: '80%',
    width: '100%',
  },
  detailsView: {
    width: '100%',
    paddingHorizontal: 4,
  },
  fieldView: {
    flexDirection: 'row',
  },
  detailsText: {
    fontSize: 13,
    color: 'white',
  },
});

export default MyCarousel;
