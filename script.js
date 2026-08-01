document.addEventListener('DOMContentLoaded', () => {
    const isMobile = window.innerWidth <= 600;

    const pageFlip = new St.PageFlip(document.getElementById('book'), {
        width: isMobile ? window.innerWidth - 30 : 400,
        height: isMobile ? window.innerHeight - 80 : 550,
        size: 'stretch',
        minWidth: 280,
        maxWidth: 500,
        minHeight: 400,
        maxHeight: 750,
        maxShadowOpacity: 0.5,
        showCover: true,
        usePortrait: isMobile,       // 👈 Displays 1 page at a time on phones
        clickToFlip: false,         
        mobileScrollSupport: true    // 👈 Allows vertical scroll inside cards
    });

    pageFlip.loadFromHTML(document.querySelectorAll('.page'));

    // Responsive resize handler
    window.addEventListener('resize', () => {
        const mobileCheck = window.innerWidth <= 600;
        pageFlip.updateFromHtml(document.querySelectorAll('.page'));
    });

    // Single Tap Navigation
    document.querySelectorAll('.page').forEach(page => {
        page.addEventListener('pointerdown', (e) => {
            if (e.target.closest('a') || e.target.closest('button')) {
                return;
            }

            const rect = page.getBoundingClientRect();
            const clickX = e.clientX - rect.left;

            e.stopPropagation();

            if (clickX > rect.width / 2) {
                pageFlip.flipNext('top');
            } else {
                pageFlip.flipPrev('top');
            }
        });
    });
});
