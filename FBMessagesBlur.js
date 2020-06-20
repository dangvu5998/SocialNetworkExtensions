chrome.storage.sync.get(null, function (result) {
  if(result['fbMsgBlur']) {
    setInterval(() => {
      // blur messages in messenger 
      $('._3058').addClass("contentBlur messagesCustomize messagesContentBlur")
      // blur sidebar in messenger 
      $('._6zkb._7t1l._6zkc').addClass("contentBlur messagesCustomize messagesContentBlur")

      // get messages box in main fb
      let messageBox = $('.poy2od1o.i09qtzwb.n7fi1qx3')
      // blur incoming messages in main facebook
      messageBox.find('.g5ia77u1.ii04i59q').addClass("contentBlur messagesCustomize messagesContentBlur")
      // blur outgoing messages in main facebook
      messageBox.find('.j83agx80.r8blr3vg').addClass("contentBlur messagesCustomize messagesContentBlur")
      // blur reply messages in main facebook
      messageBox.find('.l9j0dhe7.enqfppq2').addClass("contentBlur messagesCustomize messagesContentBlur")

      // blur popup messages in main facebook
      $('.oi9244e8.knvmm38d').find('.l9j0dhe7').find('div > a').addClass("contentBlur messagesCustomize messagesContentBlur")
    }, 1000);
  }
});
