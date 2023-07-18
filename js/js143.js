window.onload = function () {
    var head = document.getElementsByTagName('head')[0];

    // Preconnect to Google Fonts
    var preconnectGoogleFonts = document.createElement('link');
    preconnectGoogleFonts.rel = 'preconnect';
    preconnectGoogleFonts.href = 'https://fonts.googleapis.com';
    head.appendChild(preconnectGoogleFonts);

    var preconnectGoogleFontsStatic = document.createElement('link');
    preconnectGoogleFontsStatic.rel = 'preconnect';
    preconnectGoogleFontsStatic.href = 'https://fonts.gstatic.com';
    preconnectGoogleFontsStatic.crossOrigin = true;
    head.appendChild(preconnectGoogleFontsStatic);

    // Load Google Fonts CSS
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap';
    head.appendChild(link);
};