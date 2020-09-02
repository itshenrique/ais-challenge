import * as ReactNative from 'react-native';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

jest.doMock('react-native', () => {
  // Extend ReactNative
  return Object.setPrototypeOf(
    {
      NativeModules: {
        ...ReactNative.NativeModules,
        SettingsManager: {
          settings: {
            AppleLocale: 'pt_BR',
          },
        },
      },
    },
    ReactNative,
  );
});

Enzyme.configure({adapter: new Adapter()});
