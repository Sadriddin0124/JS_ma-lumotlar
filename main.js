let menu__link1 = document.getElementById('menu__link')
let menu = document.getElementById('menu')
let div1 = document.getElementById('div1')
let div2 = document.getElementById('div2')
let div3 = document.getElementById('div3')
const Click = () => {
    // let none = menu.style.display = 'none'    
    // let block = menu.style.display = 'block'
    if (menu.style.display === 'none') {
        menu.style.display = 'block'
        div1.classList.add('div1')
        div2.classList.add('div2')
        div3.classList.add('div3')
    } else  {
        menu.style.display = 'none'
        div1.classList.remove('div1')
        div2.classList.remove('div2')
        div3.classList.remove('div3')
    }
    
}

// const Remove = () => {
//     let menu = document.getElementById('menu')
//     menu.classList.add('menu')
//     menu.classList.remove('navbar__menu1')
// }












 