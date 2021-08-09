import React, { FC } from 'react';
import { StatusBar } from 'react-native';
import { SafeView, Container, ScreenTitle } from '../../common/components';
import { LoginHeader, HeaderSubtitle, LoginFooter } from './components';
import { LoginForm } from './LoginForm';
import useKeyboard from '../../common/use-keyboard';

const LoginScreen: FC = () => {
  
  const [isKbVisible] = useKeyboard();

  return (
    <SafeView>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF"/>
      <Container>
        <LoginHeader>
          <ScreenTitle>Log In</ScreenTitle>
          <HeaderSubtitle>Welcome back</HeaderSubtitle>
        </LoginHeader>
        <LoginForm />
        {!isKbVisible && <LoginFooter />}
      </Container>
    </SafeView>
  );
}

export {
  LoginScreen,
}