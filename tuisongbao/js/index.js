$(function(){
  var APP_ID = '56ce9c4e6aa3e7fc460e6fb7';
  var APP_SECRET = '1f1a163ec1bd549700bf2d72';
  var options = {
    // 认证用户的地址
    authEndpoint: 'http://local.example.com/tuisongbao/controller/auth.php',
    // 认证用户请求方式，默认为 `xhr` ，使用 XMLHttpRequest ，但是该方式在 IE8/9 上存在跨域问题，如果你配置的 authEndpoint 跨域并且需要支持 IE8/9 ，应使用 `jsonp` ，同时请确保你的服务端支持 `jsonp` 请求，该设置在所有浏览器上生效，并非仅在 IE8/9 上生效
    authTransport: 'jsonp',
    // 可选，如果配置，认证请求将携带该值，可以用来表明用户身份。当结合 jsonp 使用时，该值如果为 Object ，会被序列化成 JSON 字符串。
    authData: 'authData-sample',
    // 使用扩展功能（Chat 本地缓存，多媒体消息）时必须指定 engine.js 在 Web 服务器上的父级路径
    basePath: '/tuisongbao/bower_components/tuisongbao-realtime-engine-client/',
    // 可选， 作用是在网络不可用时， SDK 支持某些 API 的调用。详情请参照 Chat 章的缓存策略
    supportOffline: true,
    // Chat 相关选项，不使用 Chat 模式则无需配置
    chat: {
        // 开启本地缓存, 此功能支持 Chrome, Firefox, IE11
      enableCache: true,
      // 启用多媒体消息(图片，语音，视频)发送功能，开启此选项将会异步加载额外的资源文件
      enableMediaMessage: true
    }
  };
  var engine = new Engine(APP_ID, options);
  console.log(engine);

  // var connection = engine.connection;
  // connection.bind('state_changed', function (states) {
  //   console.log(states.previous, states.current);
  // });
  // connection.bind('connecting_in', function (delay) {
  //   console.log('重连将在 ' + delay + 'ms 后进行');
  // });
  // connection.bind('connecting', function () {
  //   // 提醒用户网络不稳定，正在尝试建立连接
  //   console.log('用户网络不稳定，正在尝试建立连接');
  // });
  // connection.bind('error', function (err) {
  //   console.log('err', err);
  // });
  // connection.bind('connected', function () {
  //   console.log('socketId', connection.socketId);
  // });

  // // Pub/Sub
  // // console.log('channels', engine.channels);
  // var channels = engine.channels;
  // var coolChannel = channels.subscribe('cool-channel');
  // coolChannel.bind('cool-event', function (data) {
  //   // 处理逻辑
  //   console.log('cool-event', data);
  // });
  // coolChannel.bind('engine:subscription_succeeded', function(users) {
  //   console.log('订阅 channel ' + coolChannel.name + ' 成功');
  //   console.log('users', users);//已存在的channel会有一个users参数
  // });
  // coolChannel.bind('engine:subscription_error', function (err) {
  //   console.log('订阅 channel ' + coolChannel.name + ' 失败', err);
  //   // 重新 subscribe ?
  // });

  // coolChannel.bind('engine:user_added', function (user) {
  //   console.log('新用户：', user.id, user.info);
  // });
  // coolChannel.bind('engine:user_removed', function (user) {
  //   console.log('用户离开：', user.id, user.info);
  // })

  // Chat
  var chatManager = engine.chatManager;
  chatManager.bind('login:succeeded', function() {
    console.log('登录成功');
  });
  chatManager.bind('login:failed', function(err) {
    console.log('登录失败');
  });
  chatManager.bind('message:new', function(message) {
    console.log('新消息');
  });
  chatManager.login();

  // Conversations
});