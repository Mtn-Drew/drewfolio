// Select DOM  items

const menuBtn = document.querySelector('.menu-btn')
const menu = document.querySelector('.menu')
const menuNav = document.querySelector('.menu-nav')
const menuBranding = document.querySelector('.menu-branding')
const navItems = document.querySelectorAll('.nav-item')
const homeBtn = document.querySelector('#home-when-home')
const navLink = document.querySelector('.nav-link')

const pwGithubLink = document.querySelector('.pw-github-link')
const gmGithubLink = document.querySelector('.gm-github-link')
const scGithubLink = document.querySelector('.sc-github-link')
const scApiGithubLink = document.querySelector('.sc-api-github-link')
const sgGithubLink = document.querySelector('.sg-github-link')

const gmCard = document.querySelector('#gm')
const gmDesc = document.querySelector('#gm-desc')
const scCard = document.querySelector('#sc')
const scDesc = document.querySelector('#sc-desc')
const sgCard = document.querySelector('#sg')
const sgDesc = document.querySelector('#sg-desc')
const pwCard = document.querySelector('#pw')
const pwDesc = document.querySelector('#pw-desc')

//set initial state of menu
let showMenu = false

window.onload= setTimeout(reverseMenu,500)

menuBtn.addEventListener('click', toggleMenu)

if(homeBtn){
  homeBtn.addEventListener('click', toggleMenu)
}

function reverseMenu() {
  menuBtn.classList.remove('close')
  menu.classList.remove('show')
  menuNav.classList.remove('show')
  menuBranding.classList.remove('show')
  navItems.forEach(item=> item.classList.remove('show'))
}

function toggleMenu() {
  if (!showMenu){
    menuBtn.classList.add('close')
    menu.classList.add('show')
    menuNav.classList.add('show')
    menuBranding.classList.add('show')
    navItems.forEach(item=> item.classList.add('show'))

    //set menu state
    showMenu = true
  } else {
    menuBtn.classList.remove('close')
    menu.classList.remove('show')
    menuNav.classList.remove('show')
    menuBranding.classList.remove('show')
    navItems.forEach(item=> item.classList.remove('show'))

    //set menu state
    showMenu=false
  }
}

//project one
const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = false; // Auto scroll
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for next slide
  if (current.nextElementSibling) {
    // Add current to next sibling
    current.nextElementSibling.classList.add('current');
  } else {
    // Add current to start
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for prev slide
  if (current.previousElementSibling) {
    // Add current to prev sibling
    current.previousElementSibling.classList.add('current');
  } else {
    // Add current to last
    slides[slides.length - 1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

// Button events
if (next) {
  next.addEventListener('click', e => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
})}

if (prev) {
  prev.addEventListener('click', e => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
})}

// Auto slide
if (auto) {
  // Run next slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}

// My Work card github buttons
pwGithubLink.addEventListener('click', (e)=>{
  window.open("https://github.com/Mtn-Drew/drewfolio",'_blank')
  e.stopPropagation()
})
scGithubLink.addEventListener('click', (e)=>{
  //window.open("https://github.com/Mtn-Drew/stamp-champ",'_blank')
  window.open("https://github.com/Mtn-Drew/stamp-champ",'_blank')
  e.stopPropagation()
})
scApiGithubLink.addEventListener('click', (e)=>{
  window.open("https://github.com/Mtn-Drew/stamp-api",'_blank')
  e.stopPropagation()
  //window.open("https://github.com/Mtn-Drew/stamp-api",'_blank')
})
sgGithubLink.addEventListener('click', (e)=>{
  window.open("https://github.com/Mtn-Drew/grocery",'_blank')
  e.stopPropagation()
})

const addReveal = (el) =>{
  el.classList.add('text-revealed')
}

// Paragraph descriptions
gmCard.addEventListener('mouseenter', ()=>{
  gmDesc.classList.remove('text-hidden')
  addReveal(gmDesc)

})
gmCard.addEventListener('mouseleave', ()=>{
  gmDesc.classList.add('text-hidden')
})

scCard.addEventListener('mouseenter', ()=>{
  scDesc.classList.remove('text-hidden')
})
scCard.addEventListener('mouseleave', ()=>{
  scDesc.classList.add('text-hidden')
})

sgCard.addEventListener('mouseenter', ()=>{
  sgDesc.classList.remove('text-hidden')
})
sgCard.addEventListener('mouseleave', ()=>{
  sgDesc.classList.add('text-hidden')
})

pwCard.addEventListener('mouseenter', ()=>{
  pwDesc.classList.remove('text-hidden')
})
pwCard.addEventListener('mouseleave', ()=>{
  pwDesc.classList.add('text-hidden')
})

