import React, { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';

interface Config {
  useWillShow?: boolean;
  useWillHide?: boolean;
}

export default (config: Config = {}) => {
  const { useWillShow = false, useWillHide = false } = config;
  const [visible, setVisible] = useState(false);
  const showEvent = useWillShow ? 'keyboardWillShow' : 'keyboardDidShow';
  const hideEvent = useWillHide ? 'keyboardWillHide' : 'keyboardDidHide';

  function dismiss() {
    Keyboard.dismiss();
    setVisible(false);
  }

  useEffect(() => {
    function onKeyboardShow() {
      setVisible(true);
    }

    function onKeyboardHide() {
      setVisible(false);
    }

    Keyboard.addListener(showEvent, onKeyboardShow);
    Keyboard.addListener(hideEvent, onKeyboardHide);

    return () => {
      Keyboard.removeListener(showEvent, onKeyboardShow);
      Keyboard.removeListener(hideEvent, onKeyboardHide);
    };
  }, [useWillShow, useWillHide]);

  return [visible, dismiss];
};