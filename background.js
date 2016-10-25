chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('window.html', {
    'outerBounds': {
      'width': 1300,
      'height': 800
    },
    "frame": {color: "#173c60"},
  });
});
