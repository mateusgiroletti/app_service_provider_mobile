import Reactotron, { asyncStorage } from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';
import AsyncStorage from '@react-native-community/async-storage';

if (__DEV__) {
    const tron = Reactotron.configure({ host: '10.0.2.2' })
        .useReactNative()
        .setAsyncStorageHandler(AsyncStorage)
        .use(asyncStorage())
        .use(reactotronRedux())
        .use(sagaPlugin())
        .connect();

    tron.clear();

    console.tron = tron;
}
