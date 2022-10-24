const ele = document.querySelector('.recommendCard');
const btn = document.querySelector('.fa-angle-right');
let scroll = 0;

btn.addEventListener('click', () => {
    ele.style.overflowX = 'scroll';
    scroll += 100;
    console.log(scroll);
    ele.scrollTo(scroll, 0);
    /* setDefault(); */
})

/* 
function setDefault(){
    setTimeout(() => {
        ele.style.overflowX = element.style.overflowX;
    }, 2000)
} */