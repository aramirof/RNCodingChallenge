import React, { FC, useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-community/async-storage';

import { LoginScreen } from './Auth';
import { MyPhotosScreen } from './Photos';

const Stack = createNativeStackNavigator();

const MainNavigator: FC = () => {
  // TODO: Agregar selector

  const [token, setToken] = useState<string>();
  const isAuthenticated = !!token;
  const validateAuth = async () => {
    const t = await AsyncStorage.getItem('AUTH_TOKEN');
    setToken(t || '');
  };

  useEffect(() => {
    validateAuth();
  }, []);
  
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