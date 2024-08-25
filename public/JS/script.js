document.getElementById('copyButton').addEventListener('click', function() {
    const shortUrl = document.querySelector('.sh-url');
    const resultContainer = document.querySelector('.result');
    
    navigator.clipboard.writeText(`flink-n946.onrender.com/${shortUrl.innerText.split('/')[1]}`)
    .then(() => {
        const tooltip = document.createElement('span');
        tooltip.className = 'tooltip';
        tooltip.innerText = 'Copied!';
        
        resultContainer.appendChild(tooltip);
        
        setTimeout(() => {
            tooltip.style.opacity = '1';
        }, 10);
        
        setTimeout(() => {
            tooltip.remove();
        }, 2000);
    })
    .catch(err => {
        console.error('Failed to copy: ', err);
    });
});

const sideBar = document.querySelector('.side-bar');
const cross = document.querySelector('.cross-icon')

document.querySelector('.menu-icon').addEventListener('click', () => {
    sideBar.style.left = '0';
})
cross.addEventListener('click', () => {
    sideBar.style.left = '-17rem';
})
