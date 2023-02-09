const list = document.querySelectorAll('.dropdown-top');
let windowWidth;

windowWidth = window.innerWidth;

window.addEventListener('resize', onResize, false);

function onResize() {
    windowWidth = window.innerWidth;
}

list.forEach((item) => {
    item.addEventListener('click', function(e) {
        const listBody = e.currentTarget.parentNode;
        
        if (windowWidth < 600) {
            listBody.classList.toggle('open');
        }
    });
});