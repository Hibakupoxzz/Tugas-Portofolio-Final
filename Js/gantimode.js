window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  const body = document.body;
  const btn = document.getElementById('mode-toggle');

  // if (savedTheme === 'dark') {
  //   body.classList.add('dark-mode');
  //   if (btn) btn.textContent = '🌞';
  // } else {
  //   body.classList.remove('dark-mode');
  //   if (btn) btn.textContent = '🌙';
  // }
});

function toggleMode() {
  const body = document.body;
  const btn = document.getElementById('mode-toggle');
  body.classList.toggle('dark-mode');

  const isDark = body.classList.contains('dark-mode');
  if (btn) btn.textContent = isDark ? '🌞' : '🌙';

  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}
