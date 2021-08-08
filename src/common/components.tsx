import React, { FC, useState } from 'react';
import styled from 'styled-components/native';
import { Image, TextInputProps } from 'react-native';
import { SafeAreaView, SafeAreaViewProps } from 'react-native-safe-area-context';

const SafeView = styled(SafeAreaView)`
  flex: 1;
  background-color: #FFFFFF;
  justify-content: flex-start;
`;

const Container = styled.View`
  flex: 1;
  padding-left: 24px;
  padding-right: 23px;
`;

const ScreenTitle = styled.Text`
  font-size: 28px;
  line-height: 40px;
  color: #373A4D;
`;

const KBAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
`;

const VerticalScrollView = styled.ScrollView`
  flex: 1;
`;

const SafeKBAvoidingView: FC<SafeAreaViewProps> = ({
  children,
  ...viewProps
}) => (
  <SafeView
    {...viewProps}
  >
    <KBAvoidingView
      behavior="height"
      keyboardVerticalOffset={16}
    >
      <VerticalScrollView
        contentContainerStyle={{ flex: 1 }}
      >
        {children}
      </VerticalScrollView>
    </KBAvoidingView>
  </SafeView>
);

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

interface InputProps {
  label: string;
  value: string;
  inputProps?: TextInputProps;
  onChange?: (value: string) => void;
  isPassword?: boolean;
}

const FormInput: FC<InputProps> = ({
  label,
  value,
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
          value={value}
          secureTextEntry={hideText}
          underlineColorAndroid="transparent"
          {...inputProps}
        />
        {isPassword && (
          <FormInputIconButton
            onPress={() => setHideText(!hideText)}
          >
            <Image
              source={require('../images/show-icon.png')}
            />
          </FormInputIconButton>
        )}
      </FormInputControlWrapper>
    </FormInputWrapper>
  );
}

export {
  SafeView,
  SafeKBAvoidingView,
  Container,
  ScreenTitle,
  FormInput,
}