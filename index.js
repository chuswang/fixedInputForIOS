//解决键盘收起页面问题

  let judgeDeviceType = function() {
    let ua = window.navigator.userAgent.toLocaleLowerCase();
    let isIOS = /iphone|ipad|ipod|/.test(ua);
    let isAndroid = /android/.test(ua);
    return {
      isIOS,
      isAndroid
    };
  }();
  function listenKeybord($input) {
    if (judgeDeviceType.isIOS) {
      // alert('ios')
      $input.addEventListener(
        'blur',
        function() {
          let wechatInfo = window.navigator.userAgent.match(
            /MicroMessenger\/([\d\.]+)/i
          );
          if (!wechatInfo) return;
          let wechatVersion = wechatInfo[1];
          let version = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
          if (+wechatVersion.replace(/\./g, '') >= 674 && +version[1] >= 12) {
            // 需要加个延迟
            setTimeout(function(){
              window.scrollTo(
              0,
              Math.max(
                document.body.clientHeight,
                document.documentElement.clientHeight
              )
            );
            },100)
            
          }
        },
        false
      );
    }
  }
  let inputs = document.querySelectorAll('input[type=text],select');
  for (let i = 0; i < inputs.length; i++) {
    listenKeybord(inputs[i]);
  }
