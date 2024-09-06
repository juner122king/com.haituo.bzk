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
    nativeAd: '2fc6ab11d04944c7832a07351f5fa19e',//拆福袋原生//2.0自渲染1280x720
  },
  xiaomi: {
    nativeAd: '3ebda492da8090a8e28b3544df52da61', //原生
    tableScreen: 'l4ai02av3y',
    stimulateAd: '182b9c7d8701f5c50a0d5f1cb9fcf2b0',
    banner: 'f25c41f2e050f7bd045186ba095b6c8c',
    lotteryPageNativeAd: '3ebda492da8090a8e28b3544df52da61',
    nativeAd: 'y82ss9y9f7',
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
    nativeAd: '1728931',//拆福袋原生//2.0自渲染1280x720
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
    nativeAd: '1728931',//拆福袋原生//2.0自渲染1280x720
  },
  HUAWEI: {
    banner: 'w4brvyloy0',
    nativeAd: 'y82ss9y9f7', //原生
    tableScreen: 'l4ai02av3y',
    stimulateAd: 'o0rbevcepx',
    lotteryPageNativeAd: 'b9flx2el39',
    nativeAd: 'y82ss9y9f7',
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
  adCodeData,
  publicKey,
  privateKey,
  BASEHOST: appConfig[currentService].BASEHOST,
}
