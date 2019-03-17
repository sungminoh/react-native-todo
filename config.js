import {Dimensions} from 'react-native';

export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').width;

export const timeSetting = [
  [
    { type: 'absolute', val: '09:30' },
    { type: 'absolute', val: '12:00' },
    { type: 'absolute', val: '18:30' },
    { type: 'absolute', val: '22:00' },
  ],
  [
    { type: 'relative', val: 10, scale: 'min' },
    { type: 'relative', val: 1, scale: 'hour' },
    { type: 'relative', val: 3, scale: 'hour' },
    { type: 'relative', val: 1, scale: 'day' },
  ],
  [
    { type: 'relative', val: -10, scale: 'min' },
    { type: 'relative', val: -1, scale: 'hour' },
    { type: 'relative', val: -3, scale: 'hour' },
    { type: 'relative', val: -1, scale: 'day' },
  ],
];