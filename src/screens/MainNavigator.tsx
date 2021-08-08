import React, { FC, useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-community/async-storage';

import { useAppSelector } from '../store/hooks';
import { selectToken } from '../store/slices/session';

import { LoginScreen } from './Auth';
import { MyPhotosScreen } from './Photos';

const Stack = createNativeStackNavigator();

const MainNavigator: FC = () => {

  const token = useAppSelector(selectToken);
  const isAuthenticated = !!token;
  
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {isAuthenticated ? (
        <Stack.Screen name="Home" component={MyPhotosScreen} />
      ) : (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
        </>
      )}
    </Stack.Navigator>
  );
}

export default MainNavigator;