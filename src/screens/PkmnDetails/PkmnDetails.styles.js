import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fca',
  },
  cardBackground: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 6,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  thumbnail: {
    width: 250,
    height: 345,
  },
  detailsContainer: {
    flex: 1,
    width: '100%',
  },
  detailsText: {
    textAlign: 'left',
    fontSize: 20,
    borderRadius: 6,
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 2,
    marginVertical: 4,
    color: 'white',
  },
  attacksView: {
    flexDirection: 'column',
    borderRadius: 6,
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 2,
    marginVertical: 4,
  },
  detailsTextLink: {
    justifyContent: 'center',
    textAlign: 'left',
    fontSize: 20,
    color: 'white',
    marginBottom: 26,
  },
  infoButton: {
    backgroundColor: 'white',
    borderRadius: 100,
    paddingHorizontal: 8,
  },
  infoButtonIcon: {
    fontSize: 15,
    color: 'black',
  },
  boldText: {
    fontWeight: 'bold',
    color: '#e66397',
  },
  modalText: {
    textAlign: 'center',
  },
  modalField: {
    marginBottom: 20,
  },
});
