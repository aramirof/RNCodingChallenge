import React, { FC } from 'react';
import { Pressable, StatusBar } from 'react-native';
import { SafeView, ScreenTitle } from '../../common/components';
import {
  ScreenHeader,
  ButtonLabel,
  PhotoList,
  TabBar,
  TabItem,
  TabIcon,
  TabLabel,
  PhotoItem,
  PhotoItemProps,
} from './components';

const demoData = [
  {
      "id": 0,
      "title": "Joyce",
      "description": "Maecenas mauris risus, aliquam id leo quis, sodales mollis mauris. Quisque semper.",
      "image": "https://loremflickr.com/200/200/dog"
  },
  {
      "id": 1,
      "title": "Betty",
      "description": "Lorem ipsum dolor sit amet. Curabitur a erat diam. Integer dignissim, risus sit amet consequat laoreet, metus",
      "image": "https://loremflickr.com/200/200/dog"
  },
  {
      "id": 2,
      "title": "Alfredo",
      "description": "Maecenas mauris risus, aliquam id leo quis, sodales mollis mauris. Quisque semper.",
      "image": "https://loremflickr.com/200/200/dog"
  },
  {
      "id": 3,
      "title": "Alfredo",
      "description": "Maecenas mauris risus, aliquam id leo quis, sodales mollis mauris. Quisque semper.",
      "image": "https://loremflickr.com/200/200/dog"
  },
  {
      "id": 4,
      "title": "Joyce",
      "description": "Lorem ipsum dolor sit amet. Curabitur a erat diam. Integer dignissim, risus sit amet consequat laoreet, metus",
      "image": "https://loremflickr.com/200/200/dog"
  },
  {
      "id": 5,
      "title": "Joyce",
      "description": "Lorem ipsum dolor sit amet. Curabitur a erat diam. Integer dignissim, risus sit amet consequat laoreet, metus",
      "image": "https://loremflickr.com/200/200/dog"
  },
  {
      "id": 6,
      "title": "Alfredo",
      "description": "Lorem ipsum dolor sit amet. Curabitur a erat diam. Integer dignissim, risus sit amet consequat laoreet, metus",
      "image": "https://loremflickr.com/200/200/dog"
  },
  {
      "id": 7,
      "title": "Betty",
      "description": "Aenean nibh dui, interdum non rhoncus tincidunt, sagittis sollicitudin magna. Nulla accumsan",
      "image": "https://loremflickr.com/200/200/dog"
  },
  {
      "id": 8,
      "title": "Joyce",
      "description": "Aenean nibh dui, interdum non rhoncus tincidunt, sagittis sollicitudin magna. Nulla accumsan",
      "image": "https://loremflickr.com/200/200/dog"
  },
  {
      "id": 9,
      "title": "Betty",
      "description": "Lorem ipsum dolor sit amet. Curabitur a erat diam. Integer dignissim, risus sit amet consequat laoreet, metus",
      "image": "https://loremflickr.com/200/200/dog"
  }
];

const MyPhotosScreen: FC = () => {

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
        data={demoData}
        renderItem={({ item: photoProps }) => <PhotoItem {...photoProps as PhotoItemProps} />}
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