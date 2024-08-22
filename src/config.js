const adCodeData = {
  vivo: {
    appid: 111256983,

    lotteryPageNativeAd: '2c7b992aa9464e86a69b213d8082798d',//场景-转盘弹出层
    nativeAd: 'e75ed6c8b54943ed8af05d1611c75f61', //原生//记账小管家-原生-在用-开红包
    stimulateAd: 'b5223a83ef4443b087580b81de4f4375',//幸运大转盘-激励视频
    tableScreen:'0213f0e9f1ef4d5083c2cbf3daf76cea',//插屏广告
    fiction1: '87befbe313b04195959f6b873ca23df8', //原生小说广告页id
    fiction2: '6c0ff227715a4e3991653be3fddbf09a', //原生小说广告页id
    fiction3: '2e0ca5229f2042baab8d9fc1f84ef007', //原生小说广告页id
    fiction4: 'eff21e44e084cd3a5a4b16d09cc8db6', //原生小说广告页id
    fiction5: 'ae234c1e5b764f0c88d7dfbfedbc9487', //原生512 2.0自渲染512x512
    banner: '123',//1080*171
    nativeAd_cfd:'a7d784a6dff644ff85037298e1e85c8c',//拆福袋原生//2.0自渲染1280x720
  },
  xiaomi: {
    nativeAd: '3ebda492da8090a8e28b3544df52da61', //原生
    tableScreen: 'l4ai02av3y',
    stimulateAd: '182b9c7d8701f5c50a0d5f1cb9fcf2b0',
    banner: 'f25c41f2e050f7bd045186ba095b6c8c',
    lotteryPageNativeAd: '3ebda492da8090a8e28b3544df52da61',
    nativeAd_cfd:'y82ss9y9f7',
  },
  OPPO: {
    lotteryPageNativeAd: '1692402',//场景-转盘弹出层
    nativeAd: '1692403', //原生//记账小管家-原生-在用-开红包
    stimulateAd: '1692404',//幸运大转盘-激励视频
    tableScreen:'1692405',//插屏广告
    fiction1: '1692407', //原生小说广告页id
    fiction2: '1692408', //原生小说广告页id
    fiction3: '1692409', //原生小说广告页id
    fiction4: '1692410', //原生小说广告页id
    fiction5: '1692411', //原生512 2.0自渲染512x512
    banner: '1692412',//1080*171
    nativeAd_cfd:'1692413',//拆福袋原生//2.0自渲染1280x720

  },
  HUAWEI: {
    banner: 'w4brvyloy0',
    nativeAd: 'y82ss9y9f7', //原生
    tableScreen: 'l4ai02av3y',
    stimulateAd: 'o0rbevcepx',
    lotteryPageNativeAd: 'b9flx2el39',
    nativeAd_cfd:'y82ss9y9f7',
  },
  huawei: {
    banner: 'w4brvyloy0',
    nativeAd: 'y82ss9y9f7', //原生
    nativeAd_cfd:'y82ss9y9f7',
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

const currentService = 'test'
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
