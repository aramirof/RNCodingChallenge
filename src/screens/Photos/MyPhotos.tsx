import React, { FC, useEffect } from 'react';
import { Pressable, StatusBar, Text } from 'react-native';
import usePhotos from '../../common/use-photos';
import { SafeView, ScreenTitle } from '../../common/components';
import {
  ScreenHeader,
  ButtonLabel,
  EmptyListWrapper,
  PhotoList,
  TabBar,
  TabItem,
  TabIcon,
  TabLabel,
  PhotoItem,
} from './components';
import { Photo } from '../../common/models';

const MyPhotosScreen: FC = () => {

  const [loadPhotos, loading, error, photos] = usePhotos();

  useEffect(() => {
    loadPhotos();
  }, []);

  return (
    <SafeView>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF"/>
      <ScreenHeader>
        <ScreenTitle>My photos</ScreenTitle>
        <Pressable onPress={() => null}>
          <ButtonLabel>Log out</ButtonLabel>
        </Pressable>
      </ScreenHeader>
      <PhotoList
        data={photos}
        renderItem={({ item: photoProps }) => <PhotoItem {...photoProps as Photo} />}
        refreshing={loading}
        onRefresh={loadPhotos}
        ListEmptyComponent={(
          <EmptyListWrapper>
            <Text>{loading ? 'Loading images...' : 'No images found.'}</Text>
          </EmptyListWrapper>
        )}
      />
      <TabBar>
        <TabItem>
          <TabIcon source={require('../../images/home-icon.png')} />
          <TabLabel>Home</TabLabel>
        </TabItem>
      </TabBar>
    </SafeView>
  );
}

export {
  MyPhotosScreen,
}