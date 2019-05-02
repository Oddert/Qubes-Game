

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





const flashNotif = str => {
  const notif = document.querySelector('.notifier')
  notif.hidden = false
  notif.querySelector('span').textContent = str
  notif.classList.add('show')
  setTimeout(() => {
    notif.classList.add('fade')
    setTimeout(() => {
      notif.classList.remove('show', 'fade')
      setTimeout(() => notif.hidden = true, 300)
    }, 1000)
  }, 2000)
}

const copy = str => {
  const shadow_input = document.createElement('textarea')
  shadow_input.value = str
  document.body.appendChild(shadow_input)
  shadow_input.select()
  document.execCommand("copy")
  document.body.removeChild(shadow_input)
  flashNotif(shadow_input.value)
  console.log('Copied text:', shadow_input.value)
}

const copyLinkButton = document.querySelector('.social.link')

if (copyLinkButton) {
  copyLinkButton.onclick = e => copy(e.target.closest('.social.link').dataset.link)
}
