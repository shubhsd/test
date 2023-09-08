import {StyleSheet, Text} from 'react-native';
import React from 'react';
import navigationStrings from '../../constants/navigationStrings';
import WrapperContainer from '../../Components/WrapperContainer';

const InitialScreen = ({navigation}) => {
  return (
    <WrapperContainer>
      <Text
        style={{fontFamily: 'LamaSans-Regular'}}
        onPress={() => navigation.navigate(navigationStrings.LOGIN)}>
        InitialScreen
      </Text>
    </WrapperContainer>
  );
};

export default InitialScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
