import React from 'react';
import navigationStrings from '../constants/navigationStrings';
import * as Screens from '../Screens';

export default function (Stack) {
  return (
    <>
      <Stack.Screen
        name={navigationStrings.HOME}
        component={Screens.Home}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={navigationStrings.PROFILE}
        component={Screens.Profile}
        options={{headerShown: false}}
      />
    </>
  );
}
