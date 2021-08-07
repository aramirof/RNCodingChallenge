import React, { FC } from 'react';
import styled from 'styled-components/native';
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

export {
  SafeView,
  SafeKBAvoidingView,
  Container,
  ScreenTitle,
}