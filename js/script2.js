// smooth scroll
$(document).ready(function () {
  $('.navbar-nav').on('click', 'a', function () {
    $('.navbar-nav a.active').removeClass('active');
    $(this).addClass('active');
  })
});
// about

// baca selengkapnya
const parentContainer = document.querySelector('.read_container');
parentContainer.addEventListener('click', event => {

  const current = event.target;
  const isbacaBtn = current.className.includes('btn_baca');
  if (!isbacaBtn) return;
  const currentText = event.target.parentNode.querySelector('.baca_text');
  currentText.classList.toggle('baca_show');
  current.textContent = current.textContent.includes('Selengkapnya') ? "Tutup" : "Selengkapnya...";
});




