chrome.storage.sync.get(null, function (result) {
  if(result['fbMsgBlur']) {
    setInterval(() => {
      // blur incoming messages in main facebook
      $("[data-testid=messenger_incoming_text_row] .ljqsnud1").addClass("contentBlur messagesCustomize messagesContentBlur");
      // blur outgoing messages in main facebook
      $("[data-testid=outgoing_message] .ljqsnud1").addClass("contentBlur messagesCustomize messagesContentBlur");
      // aside messenger
      $("[data-testid=MWJewelThreadListContainer] [data-testid=mwthreadlist-item]").addClass("contentBlur messagesCustomize messagesContentBlur");

    }, 1500);
  }
});
