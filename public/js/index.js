

const navLogo = document.querySelector('.Nav--logo')
const nav = document.querySelector('.Nav')
const navToggle = document.querySelector('.Nav__toggle')

let navDropOpen = false

function toggleNavDrop (open) {
  if (open) navDropOpen = true
  else navDropOpen = !navDropOpen
  if (navDropOpen && !nav.classList.contains('open')) nav.classList.add('open')
  if (!navDropOpen && nav.classList.contains('open')) nav.classList.remove('open')
}

function scrollTop (e) {
  e.preventDefault()
  window.scrollTo(0, 50)
}

function initOverrideLogoButton () {
  const link = navLogo.querySelector('a')
  link.href = ''
  link.addEventListener('click', scrollTop)
}

function init() {
  initOverrideLogoButton()
}

navToggle.onclick = e => toggleNavDrop()

document.addEventListener('DOMContentLoaded', init)
