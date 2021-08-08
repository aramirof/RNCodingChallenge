import React, { FC } from 'react';
import styled from 'styled-components/native';
import { Photo } from '../../common/models';

const ScreenHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 96px;
  padding-left: 24px;
  padding-right: 24px;
`;

const ButtonLabel = styled.Text`
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #373A4D;
`;

const EmptyListWrapper = styled.View`
  align-items: center;
  padding-top: 80px;
`;

const PhotoList = styled.FlatList`
  flex: 1;
  border-top-color: #ECEDF2;
  border-top-width: 1px;
`;

const TabBar = styled.View`
  background: #FFFFFF;
  box-shadow: 0px 0px 7px rgba(126, 151, 168, 0.24);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-bottom: 8px;
  padding-top: 8px;
`;

const TabItem = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TabIcon = styled.Image`
  margin-bottom: 6px;
`;

const TabLabel = styled.Text`
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  letter-spacing: 0.12px;
  color: #373A4D;
`;

const PhotoWrapper = styled.View`
  flex-direction: row;
  padding-vertical: 8px;
  padding-left: 6px;
  padding-right: 12px;
  border-bottom-color: #ECEDF2;
  border-bottom-width: 1px;
`;

const PhotoThumbnail = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 10px;
  margin-right: 6px;
`;

const PhotoMeta = styled.View`
  flex: 1;
  justify-content: center;
`;

const PhotoTitle = styled.Text`
  font-size: 16px;
  line-height: 19px;
  color: #373A4D;
  margin-bottom: 4px;
`;

const PhotoDescription = styled.Text`
  font-size: 14px;
  line-height: 16px;
  color: #8F92A9;
`;

const PhotoItem: FC<Photo> = ({
  title,
  description,
  image,
}) => (
  <PhotoWrapper>
    <PhotoThumbnail source={{ uri: image }} />
    <PhotoMeta>
      <PhotoTitle>{title}</PhotoTitle>
      <PhotoDescription
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {description}
      </PhotoDescription>
    </PhotoMeta>
  </PhotoWrapper>
);

export {
  ScreenHeader,
  ButtonLabel,
  EmptyListWrapper,
  PhotoList,
  TabBar,
  TabItem,
  TabIcon,
  TabLabel,
  PhotoItem,
}