document.addEventListener('DOMContentLoaded', function () {
    const pageFlip = new St.PageFlip(
        document.getElementById('book'),
        {
            width: 450,             // Width of a SINGLE page
            height: 620,            // Height of a SINGLE page
            size: "fixed",          // Fix dimensions so layout doesn't overflow
            minWidth: 300,
            maxWidth: 500,
            minHeight: 400,
            maxHeight: 700,
            maxShadowOpacity: 0.6,  // Realistic page shadows
            showCover: true,        // Cover page stays solo on the right
            mobileScrollSupport: false
        }
    );

    // Load HTML pages
    pageFlip.loadFromHTML(document.querySelectorAll('.page'));
});