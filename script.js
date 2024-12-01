function toggleMobileNav() {
  const nav = document.getElementById('nav');

  const isNavHidden = nav.style.display === 'none';

  if (isNavHidden) {
    nav.style.display = 'flex';
  } else {
    nav.style.display = 'none';
  }
}
