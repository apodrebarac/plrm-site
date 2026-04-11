/* ============================================================
   PLRM — main.js
   Lightbox for gallery images + keyboard nav
   ============================================================ */

(function () {

  /* ── Lightbox ── */
  const lightbox  = document.querySelector('.lightbox');
  const lbImg     = lightbox && lightbox.querySelector('img');
  const lbClose   = lightbox && lightbox.querySelector('.lightbox-close');

  function openLightbox(src, alt) {
    lbImg.src = src;
    lbImg.alt = alt || '';
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
    lbImg.src = '';
  }

  if (lightbox) {
    // Click gallery images
    document.querySelectorAll('.gallery img').forEach(function (img) {
      img.addEventListener('click', function () {
        openLightbox(img.src, img.alt);
      });
    });

    // Close on overlay click
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox || e.target === lbClose) closeLightbox();
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeLightbox();
    });
  }

})();
