const adCodeData = {
  vivo: {
    appid: 111256983,
    lotteryPageNativeAd: '05329f2c43684548a68c4425b88be29c',//场景-转盘弹出层
    nativeAd: 'bc85d9c9011841aeb2dd8039c15a3883', //原生//记账小管家-原生-在用-开红包
    stimulateAd: '0e0c2a0699a242acaee36edbde4ef4ca',//幸运大转盘-激励视频
    fiction1: 'b2669f5b56814a4bbed818b8b72a766c', //原生小说广告页id
    fiction2: 'd4e89b1c51654a8498d3a95d28658ecf', //原生小说广告页id
    fiction3: '6e63fc9a2fb64ce3b9762fa0f52b51f4', //原生小说广告页id
    fiction4: '79663c38d0664697b749df18a40c676f', //原生小说广告页id
    fiction5: '736007fe204b425b990b1833008845c5', //原生512 2.0自渲染512x512
    tableScreen: '7750b1c06701480b92b3e3b1c1a5a76e',//插屏广告
    banner: '',//1080*171
    nativeAd_cfd: '2fc6ab11d04944c7832a07351f5fa19e',//拆福袋原生//2.0自渲染1280x720
    taku: {
      stimulateAd: 'b66d919d432f62',
      tableScreenAd: 'b66d919d432f62'
    },
    openScreen: ''
  },
  xiaomi: {
    lotteryPageNativeAd: '241235f9d5ef865e2b8661e5f51faeb2',//场景-转盘弹出层
    nativeAd: '254ae783181e303aa12eb22fa6ee6787', //原生//记账小管家-原生-在用-开红包
    stimulateAd: 'bcd2732ba480351844817a41b8811ab8',//幸运大转盘-激励视频
    fiction1: '2498c35d9d4c09e8436f36fa235967c4', //原生小说广告页id
    fiction2: '6982d31d6ba44973f0ac4534a50f8177', //原生小说广告页id
    fiction3: 'cb60f0ec7d8abfbdb2a5bee68e755b79', //原生小说广告页id
    fiction4: '1dba6ee3ac050b64c0f2ee5244978e6b', //原生小说广告页id
    fiction5: '087295de4fc186c2adb982c93514ee8b', //原生512 2.0自渲染512x512
    tableScreen: '3870bb46c9f6ef9bfdc918a4429c893e',//插屏广告
    banner: '',//1080*171
    nativeAd_cfd: '00c456c34d1efed9cac4f40a4b2cb294',//拆福袋原生//2.0自渲染1280x720
    taku: {
      stimulateAd: 'b66dad13196b75',
      tableScreenAd: 'b66dad13196b75'
    },

    openScreen: ''
  },
  OPPO: {
    lotteryPageNativeAd: '1728887',//场景-转盘弹出层
    nativeAd: '1728888', //原生//记账小管家-原生-在用-开红包
    stimulateAd: '1728884',//幸运大转盘-激励视频
    tableScreen: '1728892',//插屏广告
    fiction1: '1728905', //原生小说广告页id
    fiction2: '1728910', //原生小说广告页id
    fiction3: '1728916', //原生小说广告页id
    fiction4: '1728920', //原生小说广告页id
    fiction5: '1728924', //原生512 2.0自渲染512x512
    banner: '1728928',//1080*171
    nativeAd_cfd: '1728931',//拆福袋原生//2.0自渲染1280x720
    taku: {
      stimulateAd: 'b66dacc756ede7',
      tableScreenAd: 'b66dacc756ede7'
    },
    openScreen: '1728893'
  },
  oppo: {
    lotteryPageNativeAd: '1728887',//场景-转盘弹出层
    nativeAd: '1728888', //原生//记账小管家-原生-在用-开红包
    stimulateAd: '1728884',//幸运大转盘-激励视频
    tableScreen: '1728892',//插屏广告
    fiction1: '1728905', //原生小说广告页id
    fiction2: '1728910', //原生小说广告页id
    fiction3: '1728916', //原生小说广告页id
    fiction4: '1728920', //原生小说广告页id
    fiction5: '1728924', //原生512 2.0自渲染512x512
    banner: '1728928',//1080*171
    nativeAd_cfd: '1728931',//拆福袋原生//2.0自渲染1280x720
    taku: {
      stimulateAd: 'b66dacc756ede7',
      tableScreenAd: 'b66dacc756ede7'
    },
    openScreen: '1728893'
  },
  HUAWEI: {
    banner: 'w4brvyloy0',
    nativeAd: 'y82ss9y9f7', //原生
    tableScreen: 'l4ai02av3y',
    stimulateAd: 'o0rbevcepx',
    lotteryPageNativeAd: 'b9flx2el39',
    nativeAd_cfd: 'y82ss9y9f7',
  },
  huawei: {
    banner: 'w4brvyloy0',
    nativeAd: 'y82ss9y9f7', //原生
    nativeAd: 'y82ss9y9f7',
    tableScreen: 'l4ai02av3y',
    stimulateAd: 'o0rbevcepx',
    lotteryPageNativeAd: 'b9flx2el39',
  },
}
const publicKey = `MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAqaj0Y3k54jCyTq47t73S
cBX9uBsSScDo7/uZ+PhHYh9eQqHNW1bBjKGV4t3Y8Wokhv783krxhIqzkPf9nHeZ
2yWqoQlPa3qOUc7Wf/HpX2+eHGRjF1/RLARJmMcEgQYB3WGbdRedu0FjQSGd+OfS
S/W7Heh2ZGlF/aSHj2NYhYE4p7x4jjQIi+ueKZvVJNZpu0vhQaF45jpqQDULPL+M
kkQePmupjp/PR4Ra8BVg4DwJuI6K8jL77YWaxeQRbMrEiQ0ZbTKRQ4o8N73iIM97
E/h8PbDl5FbuNn0k8urkYnmv56AMdkVEyIOUwNEa8oU9QKz37o5Z2L7+yqx2zmLp
VwIDAQAB`
// 私钥
const privateKey = ''

const currentService = 'prod'
const appConfig = {
  prod: {
    BASEHOST: 'https://api.ihaituo.cn',
  },
  dev: {
    BASEHOST: 'http://192.168.3.48:9999',
  },
  uat: {
    BASEHOST: 'https://mini.cnyings.com',
  },
  test: {
    BASEHOST: 'https://test.ipandata.com',
  },
}

export default {

  appId: 'bzk',
  adCodeData,
  publicKey,
  privateKey,
  BASEHOST: appConfig[currentService].BASEHOST,
}
