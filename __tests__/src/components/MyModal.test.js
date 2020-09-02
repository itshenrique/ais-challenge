/**
 * @format
 */
import 'react-native';
import React from 'react';
import {Text} from 'react-native';
import Modal from '../../../src/components/MyModal';
import {shallow} from 'enzyme';

describe('Modal Tests', () => {
  const modalVisible = true;
  const closeModal = jest.fn();
  const component = shallow(<Modal />);

  component.setProps({
    modalVisible,
    closeModal,
  });

  it('render modal', async () => {
    expect(component).toMatchSnapshot();
  });
});
