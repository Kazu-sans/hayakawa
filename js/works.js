/* =============================================
   早川タイル張工事 — works.js
   Gallery filter
   ============================================= */

(function () {
  'use strict';

  const btns  = document.querySelectorAll('.f-btn');
  const cards = document.querySelectorAll('.gallery-card');
  if (!btns.length || !cards.length) return;

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      // Update active button
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Show/hide cards
      cards.forEach(card => {
        const cat = card.dataset.cat;
        const show = filter === 'all' || cat === filter;
        if (show) {
          card.classList.remove('hide');
          // Re-trigger reveal
          card.style.opacity = '0';
          card.style.transform = 'translateY(16px)';
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              card.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            });
          });
        } else {
          card.classList.add('hide');
        }
      });
    });
  });

})();
