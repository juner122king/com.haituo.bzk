/* eslint-disable no-undef */
/* eslint-disable no-console */
import storage from '@system.storage'
import { KEYS, URL } from './const'
import fetch from '@system.fetch'

export function fetchImageList(query = '', count) {
  return new Promise((resolve, reject) => {
    fetch
      .fetch({
        url: URL.UNSPLASH,
        data: {
          client_id: 'TzXg5O4kfTaM4N5v9K-SjBERwZP-jE8_LyDVr-Fj5kI',
          // orientation:'portrait',
          count,
          query
        }
      })
      .then(res => {
        if (res.data.code === 200) {
          console.log('fetchImageList success', JSON.parse(res.data.data))
          setImageList(res.data.data)
          resolve(JSON.parse(res.data.data))
        } else {
          reject('请求失败')
        }
      })
  })
}

export function doFetch(promise, delay) {
  let timeout = new Promise((reslove, reject) => {
    setTimeout(() => {
      reject('请求超时')
    }, delay)
  })
  return Promise.race([timeout, promise])
}

export function getImageList() {
  return new Promise((resolve, reject) => {
    storage
      .get({ key: KEYS.IMAGE_LIST_KEY })
      .then(ret => {
        console.log('getImageList success', ret)
        if (ret.data) {
          resolve(JSON.parse(ret.data))
        } else {
          resolve([])
        }
      })
      .catch(err => {
        console.log('getImageList fail', err)
        reject(err)
      })
  })
}

export function setImageList(list) {
  storage.set({
    key: KEYS.IMAGE_LIST_KEY,
    value: list,
    success: data => {
      console.log('setImageList success', data)
    },
    fail: err => {
      console.log('setImageList fail', err)
    }
  })
}
