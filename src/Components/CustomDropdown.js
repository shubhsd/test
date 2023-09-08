/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { moderateScale, moderateScaleVertical, textScale } from '../styles/responsiveSize';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import FontFamily from '../styles/fontFamily';

const CustomDropdown = ({
    data = [],
    value = {},
    onSelect = () => { },
    style={},
}) => {
    const [showOptions, setShowOptions] = useState(false);
    const onSelectedItem = (val) => {
        onSelect(val);
        setShowOptions(false);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.dropdownStyle}
                activeOpacity={0.8}
                onPress={() => setShowOptions(!showOptions)}
            >
                <Text style={[styles.textOptionStyle, { marginLeft: 0 }]}>{value ? value?.name : 'Choose an option'}</Text>
                <Image
                    style={{ transform: [{ rotate: !showOptions ? '180deg' : '0deg' }] }}
                    source={imagePath.ic_arrowUp} />
            </TouchableOpacity>
            {showOptions && (
                <View style={[styles.dropdownView, style]}>
                    <ScrollView>
                        {data.map((val, i) => {
                            return (
                                <TouchableOpacity
                                    key={String(i)}
                                    onPress={() => onSelectedItem(val)}
                                    style={
                                        [styles.optionsView, {
                                            backgroundColor: value?.id === val?.id ? colors.selectedBackground : colors.white,
                                        }]
                                    }
                                >
                                    {val?.image && <Image source={val?.image} style={styles.imageStyle} />}
                                    <Text style={styles.textOptionStyle}>{val.name}</Text>
                                </TouchableOpacity>
                            );
                        })}
                    </ScrollView>
                </View>
            )}
        </View>
    );
};

export default CustomDropdown;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    optionsView: {
        paddingVertical: moderateScaleVertical(15),
        paddingHorizontal: moderateScale(16),
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    dropdownStyle: {
        padding: 8,
        borderRadius: 6,
        minHeight: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: moderateScale(340),
        borderWidth: moderateScale(2),
        borderColor: '#FFE6DC',
        marginBottom: moderateScale(8),
    },
    dropdownView: {
        backgroundColor: colors.selectedBackground,
        padding: moderateScale(1),
        borderRadius: moderateScale(6),
        borderWidth: moderateScale(1),
        borderColor: colors.selectedBackground,
    },
    imageStyle: {
        height: moderateScale(25),
        width: moderateScale(35)
    },
    textOptionStyle: {
        marginLeft: moderateScale(15),
        fontSize: textScale(14),
        fontFamily: FontFamily.medium,
        color: colors.black,
    },
});
