import {SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import colors from '../styles/colors';

const WrapperContainer = ({style = {}, children}) => {
  return (
    <View style={{...styles.container, ...style}}>
      <SafeAreaView style={styles.safeAreaView}>{children}</SafeAreaView>
    </View>
  );
};

export default WrapperContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundTheme,
  },
  safeAreaView: {
    flex: 1,
  },
});
