const ele = document.querySelector('.recommendCard');
const btn = document.querySelector('.recommendDiv .fa-angle-right');
const Name = document.querySelector('.scroll .name');
const tag1 = document.querySelector('.scroll .tag1');
const tag2 = document.querySelector('.scroll .tag2');
const tag3 = document.querySelector('.scroll .tag3');
const description = document.querySelector('.scroll .description');
const link = document.querySelector('.scroll');
const img = document.querySelector('.scroll .img');
const left = document.querySelector('.corousel .fa-angle-left');
const right = document.querySelector('.corousel .fa-angle-right');
const inputField = document.querySelector('.inputField');
const inputline = document.querySelector('.inputbox .line');
let scroll = 0;


btn.addEventListener('click', () => {
    ele.style.overflowX = 'scroll';
    scroll += 300;
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


data = [
    {
        name: 'Baaghi 3',
        tag1: 'Hindi',
        tag2: 'Action',
        tag3: '2020',
        href: '#baaghi-3',
        img: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6535/846535-h',
        description: "In a twisted turn off events, when a group of deadly terrorists kidnap Ronnie's elder brother in Syria, he sets off on a mission to bring him back."
    },
    {
        name: 'Good Luck Jerry',
        tag1: 'Hindi',
        tag2: 'Comedy',
        tag3: '2022',
        href: '#good-luck-jerry',
        img: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/900/1310900-h-98df00bccbf2',
        description: "In dire need of money, Jerry gets drawn into the dangerous world of drug trafficing. Things go awry when she decides to quit."
    },
    {
        name: 'Babli Bouncer',
        tag1: 'Hindi',
        tag2: 'Comedy',
        tag3: '2022',
        href: '#babli-bouncer',
        img: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5615/1355615-h-6b80705830d5',
        description: "A first-of-its-kind for her village, Babli takes up a bouncer's job to win over her love, leading to a series of funny and heart-warning events."
    }
]

let index = 0;
function corousel() {
    Name.innerText = data[index].name;
    tag1.innerText = data[index].tag1;
    tag2.innerText = data[index].tag2;
    tag3.innerText = data[index].tag3;
    description.innerText = data[index].description;
    img.src = data[index].img;
    link.href = data[index].href;
    link.style.animation = 'animate 200ms ease-in-out'
    setTimeout(() => {
        link.style.animation = 'none'
    }, 400);
}

corousel();

left.addEventListener('click', () => {
    if (index === 0) {
        index = data.length - 1;
        corousel();
    }
    else {
        index--;
        corousel();
    }
})

right.addEventListener('click', () => {
    if (index === data.length - 1) {
        index = 0;
        corousel();
    }
    else {
        index++;
        corousel();
    }
})

setInterval(() => {
    if (index === data.length - 1) {
        index = 0;
        corousel();
    }
    else {
        index++;
        corousel();
    }
}, 5000)

inputField.addEventListener('focus', () => {
    inputline.style.background = '#1f80e0';
})

inputField.addEventListener('blur', () => {
    inputline.style.background = 'var(--primary)';
})