const btn = document.querySelector('.burger');
const navBtn = document.querySelector('.nav__btn');
const body = document.querySelector('body');

btn.addEventListener('click', () => {
    btn.classList.toggle('is-active');
    navBtn.classList.toggle('nav__btn--active');
    body.classList.toggle('lock');
});

const navBtnWork = document.querySelector('.work');

navBtnWork.addEventListener('click', () => {
    btn.classList.remove('is-active');
    navBtn.classList.remove('nav__btn--active');
    descContent.classList.remove('description--active');
    body.classList.remove('lock');
});

const navBtnAbout = document.querySelector('.about');
const descContent = document.querySelector('.description');

navBtnAbout.addEventListener('click', () => {
    descContent.classList.toggle('description--active');
    btn.classList.remove('is-active');
    navBtn.classList.remove('nav__btn--active');
    body.classList.toggle('lock');
});

const smoothLinks = document.querySelectorAll("a[href^='#']");
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener("click", function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute("href");

        document.querySelector(id).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
};


/* let popup = document.querySelector('.popup');
let popupActive = document.querySelectorAll('.content__link');

popupActive.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        popup.classList.add('popup--active');
    });
});

document.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.classList.remove('popup--active');
    }
}) */

const popupFirstActive = document.querySelector('.content__link.kambio');
const popupFirst = document.querySelector('.popup.kambio');

popupFirstActive.addEventListener('click', () => {
    popupFirst.classList.add('popup--active');
    body.classList.toggle('lock');
});

popupFirst.addEventListener('click', () => {
    popupFirst.classList.remove('popup--active');
    body.classList.toggle('lock');
});

const popupSecondActive = document.querySelector('.content__link.avior');
const popupSecond = document.querySelector('.popup.avior');

popupSecondActive.addEventListener('click', () => {
    popupSecond.classList.add('popup--active');
    body.classList.toggle('lock');
});

popupSecond.addEventListener('click', () => {
    popupSecond.classList.remove('popup--active');
    body.classList.toggle('lock');
});

const popupThirdActive = document.querySelector('.content__link.portfolio');
const popupThird = document.querySelector('.popup.portfolio');

popupThirdActive.addEventListener('click', () => {
    popupThird.classList.add('popup--active');
    body.classList.toggle('lock');
});

popupThird.addEventListener('click', () => {
    popupThird.classList.remove('popup--active');
    body.classList.toggle('lock');
});

const popupFourthActive = document.querySelector('.content__link.casino');
const popupFourth = document.querySelector('.popup.casino');

popupFourthActive.addEventListener('click', () => {
    popupFourth.classList.add('popup--active');
    body.classList.toggle('lock');
});

popupFourth.addEventListener('click', () => {
    popupFourth.classList.remove('popup--active');
    body.classList.toggle('lock');
});

const popupFifthActive = document.querySelector('.content__link.hotel');
const popupFifth = document.querySelector('.popup.hotel');

popupFifthActive.addEventListener('click', () => {
    popupFifth.classList.add('popup--active');
    body.classList.toggle('lock');
});

popupFifth.addEventListener('click', () => {
    popupFifth.classList.remove('popup--active');
    body.classList.toggle('lock');
});

const popupSixthActive = document.querySelector('.content__link.hlegal');
const popupSixth = document.querySelector('.popup.hlegal');

popupSixthActive.addEventListener('click', () => {
    popupSixth.classList.add('popup--active');
    body.classList.toggle('lock');
});

popupSixth.addEventListener('click', () => {
    popupSixth.classList.remove('popup--active');
    body.classList.toggle('lock');
});