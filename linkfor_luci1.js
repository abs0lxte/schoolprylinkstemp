// andromeda.js
(function() {
    // Remove existing content (optional)
    document.body.innerHTML = '';

    // Add rainbow label
    const label = document.createElement('div');
    label.className = 'rainbow-text';
    label.textContent = 'anti unblocker by abs0lute 😴';
    document.body.appendChild(label);

    // Add iframe
    const iframe = document.createElement('iframe');
    iframe.src = 'https://example.com'; // CHANGE THIS URL to your target
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    iframe.style.overflow = 'hidden';
    document.body.appendChild(iframe);

    // Add rainbow animation CSS
    const style = document.createElement('style');
    style.textContent = `
        html, body, div, iframe {
            margin: 0;
            padding: 0;
            height: 100%;
            border: none;
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
            0% { color: #FF7F00; } 
            14% { color: #FF5500; }
            28% { color: #FF2200; }
            42% { color: #9900CC; }
            57% { color: #6600FF; }
            71% { color: #0033FF; }
            85% { color: #00FFFF; }
            100% { color: #FF7F00; }
        }
    `;
    document.head.appendChild(style);

    // beforeunload protection
    window.addEventListener('beforeunload', function(e) {
        e.preventDefault();
        e.returnValue = '';
    });
})();
