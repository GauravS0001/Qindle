import { put, call, select, takeEvery } from 'redux-saga/effects';
import { queryApi } from '../../api/queryApi';
import { CHANNEL_DATA_CATEGORY, CHANNEL_DATA_CATEGORY_ASSET, CHANNEL_BANNER_DATA } from '../../api/APIConstants';
import * as types from '../startup/types';
import * as channelActions from './channelActions';
var aesEcryptionDecryption = require('../../api/aes_encrypt_decrypt');
import { Alert } from 'react-native';
import { IMAGE_PROTOCOL, IMAGE_HOST, IMAGE_BASE } from '../../api/APIConstants';
export function* channelSaga() {
  yield takeEvery(types.GET_CHANNEL_DATA, getChannelData);
  yield takeEvery(types.GET_BANNER_DATA, getBannerData);
}
function* getBannerData(input) {
  try {
    const result = yield call(queryApi, {
      endpoint: CHANNEL_BANNER_DATA + '/' + input.payload.type + '/' + input.payload.widgetId,
      method: 'GET',
    });
    let data = []
    if (result) {
      for (let element of result) {
        data.push(element.URL)
      }
      yield put(channelActions.setBannerData(data));
    }

  } catch (err) {

  }
}

function* getChannelData(input) {
  try {
    if (input.payload.type == "menu") {
      const result = yield call(queryApi, {
        endpoint: CHANNEL_DATA_CATEGORY,
        method: 'GET',
      });
      let category;
      let _data = [];
      if (result) {
        category = result;
        for (let element of result) {
          if (input.payload.item.data.includes(element._id)) { //filer condition for category
            let _parent = { "_id": element._id, title: element.name }
            let _child = [];
            const ele = yield call(queryApi, {
              endpoint: CHANNEL_DATA_CATEGORY_ASSET + '/' + element._id + '/1',
              method: 'GET',
            });
            if (ele) {

              for (let _res of ele) {
                _child.push({
                  '_id': _res._id,
                  'title': _res.name,
                  'type': 'youtube',
                  //'icon': 'http://img.youtube.com/vi/WgGzy3cRFHQ/0.jpg',
                  'icon': _res.icon,
                  'videoId': _res.videoId
                })
              }
              _parent.data = _child;
            }
            _data.push(_parent);
          }
        }
        yield put(channelActions.setChannelData(_data, category));
      }
    } else {

      const result = yield call(queryApi, {
        endpoint: CHANNEL_DATA_CATEGORY,
        method: 'GET',
      });
      let category;
      let _data = [];
      if (result) {
        category = result;
        for (let element of result) {
          let _parent = { "_id": element._id, title: element.name }
          let _child = [];
          const ele = yield call(queryApi, {
            endpoint: CHANNEL_DATA_CATEGORY_ASSET + '/' + element._id + '/1',
            method: 'GET',
          });

          if (ele) {

            for (let _res of ele) {
              _child.push({
                '_id': _res._id,
                'title': _res.name,
                'type': 'youtube',
                //'icon': 'http://img.youtube.com/vi/WgGzy3cRFHQ/0.jpg',
                'icon': _res.icon,
                'videoId': _res.videoId
              })
            }
            _parent.data = _child;
          }
          _data.push(_parent);
        }

        yield put(channelActions.setChannelData(_data, category));
      }
    }


  } catch (err) {

  }
}
