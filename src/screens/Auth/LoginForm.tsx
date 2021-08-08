import React, { FC, useEffect, useState } from 'react';
import useLogin from '../../common/use-login';
import { Alert, TouchableOpacityProps, TouchableOpacity } from 'react-native';
import { FormInput } from '../../common/components';
import {
  FormTextLinkLabel,
  FormTextLinkWrapper,
  LoginFormWrapper,
  FormButton,
  FormButtonLabel,
} from './components';

interface FormTextLinkProps extends TouchableOpacityProps {
  label: string;
}

const FormTextLink: FC<FormTextLinkProps> = ({
  label,
  onPress,
  ...touchableProps
}) => (
  <FormTextLinkWrapper>
    <TouchableOpacity
      onPress={onPress}
      {...touchableProps}
    >
      <FormTextLinkLabel>
        {label}
      </FormTextLinkLabel>
    </TouchableOpacity>
  </FormTextLinkWrapper>
);

const LoginForm: FC = () => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const hasEmptyFields = !username || !password;
  const [getToken, loading, error] = useLogin();

  const validateAndSubmit = () => {
    if (username && password) {
      getToken({
        username,
        password,
      });
    }
  }

  useEffect(() => {
    if (!loading && error) {
      Alert.alert(
        'Login failed',
        'Please verify your credentials and try again.'
      );
    }
  }, [loading, error]);

  return (
    <LoginFormWrapper>
      <FormInput
        label="Email"
        value={username}
        onChange={value => setUsername(value)}
        />
      <FormInput
        label="Password"
        value={password}
        isPassword
        onChange={value => setPassword(value)}
      />
      <FormTextLink
        label="Forgot password"
        onPress={() => null}
      />
      <FormButton
        disabled={hasEmptyFields || loading}
        onPress={validateAndSubmit}
      >
        <FormButtonLabel>
          {loading ? 'Loading...' : 'Log in'}
        </FormButtonLabel>
      </FormButton>
    </LoginFormWrapper>
  );
}

export {
  LoginForm,
}