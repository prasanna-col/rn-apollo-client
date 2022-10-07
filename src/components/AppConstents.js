import { NativeModules } from 'react-native';
const { StatusBarManager } = NativeModules;
export const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 0 : 0// StatusBarManager.HEIGHT;