import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constants/imagePath';
import fontFamily from '../../styles/fontFamily';
import strings from '../../constants/lang';
import ButtonComp from '../../Components/ButtonComp';
import {moderateScale, textScale, width} from '../../styles/responsiveSize';
import navigationStrings from '../../constants/navigationStrings';
import {setInitialLanguage} from '../../utils/LanguageService';
import CustomDropdown from '../../Components/CustomDropdown';
import colors from '../../styles/colors';

const languageData = [
  {
    id: 1,
    name: 'Arabic',
    value: 'ar',
    image: imagePath.flag_iq,
  },
  {
    id: 2,
    name: 'English',
    value: 'en',
    image: imagePath.flag_uk,
  },
];

const SelectLanguage = ({navigation}) => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const onSelect = item => {
    setSelectedLanguage(item);
  };

  return (
    <WrapperContainer>
      <View style={styles.container}>
        <View style={styles.imageView}>
          <Image style={styles.logoStyle} source={imagePath.appIcon} />
        </View>
        {/* <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            flex: 0.2,
            // justifyContent: 'flex-end',

            
            justifyContent: 'center',
          }}>
          <Text style={styles.textStyle}>{strings.CHOOSE_YOUR_LANGUAGE}</Text>
        </View>
        <View style={styles.dropdown}>
          <CustomDropdown
            data={languageData}
            onSelect={onSelect}
            value={selectedLanguage}
            style={{maxHeight: moderateScale(250)}}
          />
        </View>
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            flex: 0.1,
            justifyContent: 'center',
          }}>
          <ButtonComp
            text={'Continue'}
            style={{width: moderateScale(320)}}
            onPress={() =>
              navigation.navigate(navigationStrings.INITIAL_SCREEN)
            }
          />
        </View> */}
      </View>
    </WrapperContainer>
  );
};

export default SelectLanguage;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: moderateScale(16),
    alignItems: 'center',
  },
  imageView: {
    flex: 0.2,
    justifyContent: 'center',
  },
  dropdown: {
    flex: 0.5,
    shadowColor: colors.lightOrange, // Shadow color for iOS
    shadowOffset: {
      width: 10,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 5, // Elevation for Android
  },
  logoStyle: {
    width: moderateScale(150),
    height: moderateScale(150),
    borderRadius: moderateScale(150 / 2),
  },
  textStyle: {
    fontFamily: fontFamily.bold,
    fontSize: textScale(16),
  },
  btnCompStyles: {
    width: moderateScale(300),
  },
});
