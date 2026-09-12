/* =========================================================
   Bioinformatics Unit — IMBB-FORTH
   Shared JavaScript
   ========================================================= */

// ── Mobile navigation ─────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links  = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }
});

// ── Tab switching (Resources page) ───────────────────────
function showTab(name) {
  document.querySelectorAll('.tab-content').forEach(function (el) {
    el.classList.remove('active-tab');
  });
  document.querySelectorAll('.tab-btn').forEach(function (el) {
    el.classList.remove('active');
  });
  var target = document.getElementById('tab-' + name);
  if (target) target.classList.add('active-tab');
  if (event && event.target) event.target.classList.add('active');
}
