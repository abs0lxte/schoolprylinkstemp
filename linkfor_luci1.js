// feature.js

window.onload = function() {
  // Show opening message
  document.getElementById('status').textContent = 'Opening link...';

  const blankWindow = window.open('about:blank', '_blank');

  if (blankWindow) {
    blankWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
    <title>Home</title>
    <link rel="icon" type="image/svg+xml" href="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Google_Classroom_Logo.svg/960px-Google_Classroom_Logo.svg.png?_=202210171637384">
    <style type="text/css">
    html, body, div, iframe {
      margin: 0;
      padding: 0;
      height: 100%;
      border: none;
    }
    iframe {
      display: block;
      width: 100%;
      height: 100%;
      border: none;
      overflow: auto;
    }
    .rainbow-text {
      position: fixed;
      top: 15px;
      right: 15px;
      z-index: 1000;
      font-family: Arial, sans-serif;
      font-size: 18px;
      font-weight: bold;
      text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
      animation: rainbow 3s linear infinite;
      pointer-events: none;
    }
    @keyframes rainbow {
      0% { color: #ff0000; } 
      14% { color: #ff7f00; }
      28% { color: #ffff00; }
      42% { color: #00ff00; }
      57% { color: #0000ff; }
      71% { color: #4b0082; }
      85% { color: #9400d3; }
      100% { color: #ff0000; }
    }
    </style>
    </head>
    <body>
    <div class="rainbow-text">made by abs0lute</div>
    <iframe src="https://playernation.skills-sims.com/" frameborder="0" width="100%" height="100%"></iframe>
    </body>
    </html>
    `);

    blankWindow.document.close();

    document.getElementById('status').textContent = 'Link opened!';

    setTimeout(function() {
      window.close();
    }, 2000);

  } else {
    document.getElementById('status').textContent = 'Popup blocked! Please allow popups.';
    document.getElementById('message').textContent = 'Enable popups and refresh.';
  }

  window.onbeforeunload = function() {
    return "You might have unsaved changes. Are you sure you want to leave?";
  };
};
