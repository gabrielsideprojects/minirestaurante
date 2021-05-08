import {Dimensions} from 'react-native';

const WIDTH_BASE = 370;

export const WIDTH_SCREEN = Dimensions.get('window').width;
export const HEIGHT_SCREEN = Dimensions.get('window').height;

export const normalizeWidPx = (size: number) => {
  return (size * WIDTH_SCREEN) / WIDTH_BASE;
};
export const WIDTH_SCREEN_PERCENT = (percent: number) => {
  return WIDTH_SCREEN * (percent / 100);
};
export const HEIGHT_SCREEN_PERCENT = (percent: number) => {
  return HEIGHT_SCREEN * (percent / 100);
};
