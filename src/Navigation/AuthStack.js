import React from 'react';
import navigationStrings from '../constants/navigationStrings';
import * as Screens from '../Screens';

export default function (Stack) {
  return (
    <>
      <Stack.Screen
        name={navigationStrings.SELECT_LANGUAGE}
        component={Screens.SelectLanguage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.INITIAL_SCREEN}
        component={Screens.InitialScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={navigationStrings.LOGIN}
        component={Screens.Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.SIGNUP}
        component={Screens.Signup}
        options={{headerShown: false}}
      />
    </>
  );
}
