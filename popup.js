//set Default value
chrome.storage.sync.get(null, function (result) {
  for (var name in result) {
    $("#" + name).prop("checked", result[name]);
  }
});

//onChange button checkbox
$('input[type="checkbox"]').change((e) => {
  const { name, checked } = e.target;
  chrome.storage.sync.set({ [name]: checked });
});
