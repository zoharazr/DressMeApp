import AsyncStorage from '@react-native-async-storage/async-storage';
import {NativeModules} from 'react-native';
import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';

declare global {
  interface Console {
    tron: any;
  }
}

let reactotron: any = {log: () => {}};

if (__DEV__) {
  reactotron = Reactotron.setAsyncStorageHandler?.(AsyncStorage)
    .configure({
      name: 'DRESSMEAPP',
      host: NativeModules.SourceCode.scriptURL.split('://')[1].split(':')[0],
    })
    .use(reactotronRedux())
    .useReactNative({
      asyncStorage: false,
      networking: {
        ignoreUrls: /symbolicate/,
      },
      editor: false,
      overlay: false,
    })
    .connect();

  Reactotron.clear?.();
}

console.tron = Reactotron;

export default reactotron;
