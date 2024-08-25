const sideBar = document.querySelector('.side-bar');
const cross = document.querySelector('.cross-icon')

document.querySelector('.menu-icon').addEventListener('click', () => {
    sideBar.style.left = '0';
})
cross.addEventListener('click', () => {
    sideBar.style.left = '-17rem';
})
