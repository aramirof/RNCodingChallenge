import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoginScreen } from './Auth';
import { MyPhotosScreen } from './Photos';

const Stack = createNativeStackNavigator();

const MainNavigator: FC = () => {
  // TODO: Agregar selector
  const isAuthenticated = false;
  
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