const menuBtn = document.getElementById('menuBtn')
const mobMenu = document.getElementsByClassName('mobile-menu-list')[0]
menuBtn.addEventListener('click', function() {
  event.stopPropagation()
  if (mobMenu.style.display == 'block') {
    mobMenu.style.display = 'none';
  } else mobMenu.style.display = 'block';
})
