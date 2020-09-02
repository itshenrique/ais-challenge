import React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';

function LoadingSpinner() {
  return (
    <ActivityIndicator style={styles.loading} size="small" color="white" />
  );
}

const styles = StyleSheet.create({
  loading: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});

export default LoadingSpinner;
