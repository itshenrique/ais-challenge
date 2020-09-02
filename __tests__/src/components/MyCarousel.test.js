/**
 * @format
 */
import 'react-native';
import React from 'react';
import Carousel from '../../../src/components/MyCarousel';
import {shallow} from 'enzyme';

describe('Carousel Tests', () => {
  it('render carousel', () => {
    const component = shallow(<Carousel />);
    expect(component).toMatchSnapshot();
  });
});
