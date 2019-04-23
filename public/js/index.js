
const navLogo = document.querySelector('.Nav__logo')

function scrollTop (e) {
  e.preventDefault()
  window.scrollTo(0, 50)
}

function overrideLogoButton () {
  const link = navLogo.querySelector('a')
  link.href = ''
  link.addEventListener('click', scrollTop)
}

function init() {
  overrideLogoButton()
}

document.addEventListener('DOMContentLoaded', init)
