import React, { FC, useEffect, useState } from 'react';
import useLogin from '../../common/use-login';
import { Alert, TextInputProps, Image, TouchableOpacityProps, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Credentials } from '../../common/models';

interface LoginFormProps {
  onSubmit?: (c: Credentials) => void;
  onSuccess?: (token: string) => void;
}

interface InputProps {
  label: string;
  inputProps?: TextInputProps;
  onChange?: (value: string) => void;
  isPassword?: boolean;
}

const FormInputWrapper = styled.View`
  margin-bottom: 11px;
`;

const FormInputLabel = styled.Text`
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #373A4D;
  margin-bottom: 4px;
`;

const FormInputControlWrapper = styled.View`
  position: relative;
`;

const FormInputIconButton = styled.Pressable`
  position: absolute;
  width: 48px;
  height: 48px;
  justify-content: center;
  align-items: center;
  right: 6px;
`;

const FormInputControl = styled.TextInput`
  background: #F5F5FA;
  border-radius: 2px;
  width: 100%;
  padding-left: 24px;
  padding-right: 56px;
  height: 48px;
  font-size: 14px;
  line-height: 16px;
  color: #373A4D;
`;

const FormInput: FC<InputProps> = ({
  label,
  onChange,
  inputProps,
  isPassword,
}) => {
  const [hideText, setHideText] = useState(isPassword ?? false);

  return (
    <FormInputWrapper>
      <FormInputLabel>{label}</FormInputLabel>
      <FormInputControlWrapper>
        <FormInputControl
          onChangeText={onChange}
          secureTextEntry={hideText}
          underlineColorAndroid="transparent"
          {...inputProps}
        />
        {isPassword && (
          <FormInputIconButton
            onPress={() => setHideText(!hideText)}
          >
            <Image
              source={require('../../images/show-icon.png')}
            />
          </FormInputIconButton>
        )}
      </FormInputControlWrapper>
    </FormInputWrapper>
  );
}

const FormButton = styled.TouchableOpacity`
  background-color: ${props => props.disabled ? '#555977' : '#373A4D'};
  border-radius: 2px;
  height: 56px;
  justify-content: center;
  align-items: center;
  margin-top: 29px;
`;

const FormButtonLabel = styled.Text`
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #FFFFFF;
`;

const LoginFormWrapper = styled.View`
  flex: 1;
`;

const FormTextLinkLabel = styled.Text`
  font-size: 14px;
  line-height: 16px;
  text-align: right;
  color: #373A4D;
`;

const FormTextLinkWrapper = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

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

const LoginForm: FC<LoginFormProps> = ({
  onSuccess,
}) => {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const hasEmptyFields = !username || !password;
  const [getToken, loading, error, result] = useLogin();

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
  
  useEffect(() => {
    if (!loading && result) {
      onSuccess && onSuccess(result);
    }
  }, [loading, result]);

  return (
    <LoginFormWrapper>
      <FormInput
        label="Email"
        onChange={value => setUsername(value)}
      />
      <FormInput
        label="Password"
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