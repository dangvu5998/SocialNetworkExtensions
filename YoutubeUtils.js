$(document).ready(function() {
  let showController = true;
  document.querySelector('#player-container').addEventListener('keyup', function(e) {
    if(e.code === 'KeyN') {
      if(showController) {
        $('.ytp-chrome-bottom').hide();
        $('.ytp-chrome-top').hide();
        showController = false;
      } else {
        $('.ytp-chrome-bottom').show();
        $('.ytp-chrome-top').show();
        showController = true;
      }

    }
  })
});
