// Adriatic Beach Duel — shared behaviour for every page
(function () {
  // Mobile menu
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('nav-menu');
  if (toggle && menu) {
    var setOpen = function (open) {
      menu.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open);
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    };
    toggle.addEventListener('click', function () { setOpen(!menu.classList.contains('open')); });
    menu.addEventListener('click', function (e) { if (e.target.tagName === 'A') setOpen(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
  }

  // Back to top
  var btn = document.querySelector('.back-top');
  if (btn) {
    window.addEventListener('scroll', function () {
      btn.classList.toggle('show', window.scrollY > 600);
    }, { passive: true });
    btn.addEventListener('click', function () { window.scrollTo({ top: 0 }); });
  }

  // Footer year
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
