let menu__link1 = document.getElementById('menu__link')
let menu = document.getElementById('menu')
const Click = () => {
    menu.classList.add('navbar__menu1')
    
    
}

const Remove = () => {
    let menu = document.getElementById('menu')
    menu.classList.add('menu')
    menu.classList.remove('navbar__menu1')
}