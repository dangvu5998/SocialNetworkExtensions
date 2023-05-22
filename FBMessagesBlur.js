chrome.storage.sync.get(null, function (result) {
  if(result['fbMsgBlur']) {
    setInterval(() => {
      $("[data-scope=messages_table] .x78zum5.xdt5ytf.x1n2onr6").addClass("contentBlur messagesCustomize messagesContentBlur");
      $("[role=row] .xurb0ha.x1sxyh0.x1n2onr6").addClass("contentBlur messagesCustomize messagesContentBlur");
    }, 1500);
  }
});
