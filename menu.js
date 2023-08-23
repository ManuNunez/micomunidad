const menuBtn = document.getElementById('menuBtn');
const menuItems = document.getElementById('menuItems');

menuBtn.addEventListener('click', () => {
    menuItems.style.display = menuItems.style.display === 'none' ? 'block' : 'none';
});