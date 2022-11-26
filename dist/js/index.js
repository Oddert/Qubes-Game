/* eslint-disable no-use-before-define */


const navLogo = document.querySelector('.Nav--logo')
const nav = document.querySelector('.Nav')
const navToggle = document.querySelector('.Nav__toggle')

let navDropOpen = false

function closeMenuListener(e) {
    if (!nav.contains(e.target)) {
        toggleNavDrop()
    }
}

function toggleNavDrop(open) {
    if (open) navDropOpen = true
    else navDropOpen = !navDropOpen
    if (navDropOpen && !nav.classList.contains('open')) {
        nav.classList.add('open')
        document.addEventListener('click', closeMenuListener)
    }
    if (!navDropOpen && nav.classList.contains('open')) {
        nav.classList.remove('open')
        document.removeEventListener('click', closeMenuListener)
    }
}

function scrollTop(e) {
    e.preventDefault()
    window.scrollTo(0, 50)
}

function initOverrideLogoButton() {
    const link = navLogo.querySelector('a')
    link.href = ''
    link.addEventListener('click', scrollTop)
}

function init() {
    initOverrideLogoButton()
}

navToggle.onclick = () => toggleNavDrop()

document.addEventListener('DOMContentLoaded', init)


const flashNotif = (str) => {
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

const copy = (str) => {
    const shadowInput = document.createElement('textarea')
    shadowInput.value = str
    document.body.appendChild(shadowInput)
    shadowInput.select()
    document.execCommand('copy')
    document.body.removeChild(shadowInput)
    flashNotif(shadowInput.value)
    console.log('Copied text:', shadowInput.value)
}

const copyLinkButton = document.querySelector('.social.link')

if (copyLinkButton) {
    copyLinkButton.onclick = e => copy(e.target.closest('.social.link').dataset.link)
}
