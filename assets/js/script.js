const togglebutton = document.getElementsByClassName('toggle_button')[0]
const navbarnav = document.getElementsByClassName('navbar_nav')[0]

togglebutton.addEventListener('click', () => {
    navbarnav.classList.toggle('active')
})
