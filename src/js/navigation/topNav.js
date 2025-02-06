export function initializeTopNav() {
  function displayTopNav() {
    const topNav = document.getElementById('top-nav-list');
    if (topNav.className === 'top-nav') {
      topNav.className += ' responsive-nav';
    } else {
      topNav.className = 'top-nav';
    }
  }

  document
    .getElementById('top-nav-icon')
    .addEventListener('click', displayTopNav);
}
