import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-community/async-storage';
import { StatusBar } from 'react-native';
import { SafeView, SafeKBAvoidingView, Container, ScreenTitle } from '../../common/components';
import { LoginHeader, HeaderSubtitle, LoginFooter } from './components';
import { LoginForm } from './LoginForm';

const LoginScreen: FC = () => {
  const navigation = useNavigation();

  const onLoginSuccess = async (token: string) => {
    console.log('AUTH_TOKEN', token);
    await AsyncStorage.setItem('AUTH_TOKEN', token);
  }

  return (
    <SafeView>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF"/>
      <Container>
        <LoginHeader>
          <ScreenTitle>Log In</ScreenTitle>
          <HeaderSubtitle>Welcome back</HeaderSubtitle>
        </LoginHeader>
        <LoginForm
          onSuccess={onLoginSuccess}
        />
        <LoginFooter />
      </Container>
    </SafeView>
  );
}

export {
  LoginScreen,
}