document.addEventListener('DOMContentLoaded', () => {
    const pageFlip = new St.PageFlip(document.getElementById('book'), {
        width: 400,          // base page width
        height: 550,         // base page height
        size: 'stretch',
        minWidth: 300,
        maxWidth: 500,
        minHeight: 400,
        maxHeight: 700,
        maxShadowOpacity: 0.5,
        showCover: true,
        mobileScrollSupport: false // Prevents touch drag conflict on mobile
    });

    // Load pages
    pageFlip.loadFromHTML(document.querySelectorAll('.page'));

    // --- AUTOMATIC PAGE TURN ON TAP ---
    const bookContainer = document.getElementById('book');

    bookContainer.addEventListener('click', (e) => {
        // Prevent accidental page flip if clicking on links or social buttons
        if (e.target.closest('a') || e.target.closest('button')) {
            return;
        }

        const rect = bookContainer.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const width = rect.width;

        // If clicked on the right half -> turn to next page
        if (clickX > width / 2) {
            pageFlip.flipNext();
        } 
        // If clicked on the left half -> turn to previous page
        else {
            pageFlip.flipPrev();
        }
    });

    // Mobile Arrow Controls Support
    const prevBtn = document.getElementById('prev-page-btn');
    const nextBtn = document.getElementById('next-page-btn');

    if (prevBtn) prevBtn.addEventListener('click', () => pageFlip.flipPrev());
    if (nextBtn) nextBtn.addEventListener('click', () => pageFlip.flipNext());
});
