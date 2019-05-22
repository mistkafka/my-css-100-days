const $topSearchInput = document.querySelector('#top-search-input');
const $topSearchIcon = document.querySelector('#top-search-icon');
$topSearchIcon.addEventListener('click', () => {
  $topSearchInput.classList.toggle('active');
  if ($topSearchInput.classList.contains('show')) {
    window.setTimeout(() => {
      $topSearchInput.classList.remove('show');
    }, 1000 * 0.4)
  } else {
    $topSearchInput.classList.add('show');
  }
});


const $container = document.querySelector('#container');
const $menuIcon = document.querySelector('#menu-icon');
$menuIcon.addEventListener('click', () => {
  $container.classList.toggle('show-sidebar')
});

