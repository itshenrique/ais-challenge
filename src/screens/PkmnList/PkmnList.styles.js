import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
  },
  inputView: {
    flexDirection: 'row',
    // backgroundColor: 'white',
    margin: 6,
  },
  textInput: {
    flex: 1,
    backgroundColor: 'white',
    marginRight: 4,
    borderRadius: 16,
  },
  searchButton: {
    borderRadius: 16,
    padding: 10,
    elevation: 2,
    backgroundColor: '#fca',
    justifyContent: 'center',
  },
  textStyle: {
    flex: 1,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  cleanButton: {
    flex: 1,
    alignItems: 'center',
  },
  cleanButtonText: {
    color: 'white',
  },
});
