import React, { FC } from 'react';
import { StatusBar } from 'react-native';
import { SafeView, SafeKBAvoidingView, Container, ScreenTitle } from '../../common/components';
import { LoginHeader, HeaderSubtitle, LoginFooter } from './components';
import { LoginForm } from './LoginForm';

const LoginScreen: FC = () => {


  return (
    <SafeView>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF"/>
      <Container>
        <LoginHeader>
          <ScreenTitle>Log In</ScreenTitle>
          <HeaderSubtitle>Welcome back</HeaderSubtitle>
        </LoginHeader>
        <LoginForm />
        <LoginFooter />
      </Container>
    </SafeView>
  );
}

export {
  LoginScreen,
}