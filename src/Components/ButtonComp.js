import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import colors from '../styles/colors';
import FontFamily from '../styles/fontFamily';
import {moderateScale, textScale} from '../styles/responsiveSize';

const ButtonComp = ({
  onPress = () => {},
  text = '',
  style = {},
  leftImage = null,
  textStyle = {},
}) => {
  return (
    <TouchableOpacity
      style={{...styles.container, ...style}}
      onPress={onPress}
      activeOpacity={0.7}>
      {!!leftImage ? <Image source={leftImage} /> : <View />}
      <Text style={{...styles.textStyle, ...textStyle}}>{text}</Text>
      <View />
    </TouchableOpacity>
  );
};

export default ButtonComp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.orange,
    height: moderateScale(50),
    borderRadius: moderateScale(50),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    paddingHorizontal: moderateScale(16),
  },
  textStyle: {
    fontFamily: FontFamily.bold,
    color: colors.white,
    fontSize: textScale(16),
  },
});
