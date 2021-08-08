import React, { FC } from 'react';
import styled from 'styled-components/native';

export const LoginHeader = styled.View`
  padding-top: 117px;
  margin-bottom: 85px;
`;

export const HeaderSubtitle = styled.Text`
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

export const FormButton = styled.TouchableOpacity`
  background-color: ${props => props.disabled ? '#555977' : '#373A4D'};
  border-radius: 2px;
  height: 56px;
  justify-content: center;
  align-items: center;
  margin-top: 29px;
`;

export const FormButtonLabel = styled.Text`
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #FFFFFF;
`;

export const LoginFormWrapper = styled.View`
  flex: 1;
`;

export const FormTextLinkLabel = styled.Text`
  font-size: 14px;
  line-height: 16px;
  text-align: right;
  color: #373A4D;
`;

export const FormTextLinkWrapper = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

export const LoginFooter: FC = () => (
  <LoginFooterWrapper>
    <TextLinkLabel>
      Don’t have an account? <BoldText>Sign up here</BoldText>
    </TextLinkLabel>
  </LoginFooterWrapper>
);