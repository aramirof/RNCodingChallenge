import React, { FC } from 'react';
import styled from 'styled-components/native';

const LoginHeader = styled.View`
  padding-top: 117px;
  margin-bottom: 85px;
`;

const HeaderSubtitle = styled.Text`
  font-size: 14px;
  line-height: 16px;
  color: #373A4D;
`;

const LoginFooterWrapper = styled.View`
  align-items: center;
  padding-vertical: 24px;
`;

const TextLinkLabel = styled.Text`
  font-size: 16px;
  line-height: 19px;
  color: #373A4D;
`;

const BoldText = styled.Text`
  font-weight: 700;
`;

const LoginFooter: FC = () => (
  <LoginFooterWrapper>
    <TextLinkLabel>
      Don’t have an account? <BoldText>Sign up here</BoldText>
    </TextLinkLabel>
  </LoginFooterWrapper>
);

export {
  LoginHeader,
  HeaderSubtitle,
  LoginFooter,
}