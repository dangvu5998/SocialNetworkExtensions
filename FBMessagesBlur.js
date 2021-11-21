chrome.storage.sync.get(null, function (result) {
  if(result['fbMsgBlur']) {
    setInterval(() => {
      $("[data-scope=messages_table] .j83agx80.cbu4d94t.l9j0dhe7").addClass("contentBlur messagesCustomize messagesContentBlur");
      $(".jm1wdb64.f10w8fjw.e9vueds3.m9osqain .m9osqain").addClass("contentBlur messagesCustomize messagesContentBlur");
    }, 1500);
  }
});
