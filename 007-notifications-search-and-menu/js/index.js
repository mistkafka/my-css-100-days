const $topSearchInput = document.querySelector('#top-search-input');
const $topSearchIcon = document.querySelector('#top-search-icon');
$topSearchIcon.addEventListener('click', () => {
  $topSearchInput.classList.toggle('active');
});


const $container = document.querySelector('#container');
const $menuIcon = document.querySelector('#menu-icon');
$menuIcon.addEventListener('click', () => {
  $container.classList.toggle('show-sidebar')
});

