/**
 * Function to update the copyright statement at the foot of the page.
 * Will update the year to the last year / the current year.
 * @returns {null}
 */
function updateCopyrightYear() {
    const elem = document.querySelector('#copyright-year')
    const yPrev = new Date()
    const yCurr = new Date()
    yPrev.setFullYear(yPrev.getFullYear() - 1)
    elem.textContent = `${yPrev.getFullYear()}/${yCurr.getFullYear()}`
}

/**
 * Updates the current location in social media share strings to the current location.
 * This would have been performed by the templating engine in the past.
 * Intended to make the page compatable with any hosting environment.
 * @returns {null}
 */
function updateSocialLinks() {
    const location = window.location.href
    const twitter = `https://twitter.com/intent/tweet?text=${location} A Social Game to help incarcerated fathers reconnect with their kids. -By Design Against Crime ${location}://designagainstcrime.com/`
    const facebook = `https://www.facebook.com/sharer.php?u=${location}`
    const linkedin = `https://www.linkedin.com/shareArticle?mini=true&url=${location}&title=Bloqs Question Blocks&summary=A Social Game to help incarcerated fathers reconnect with their kids. -By Design Against Crime`
    document.querySelector('#social-twitter').href = twitter
    document.querySelector('#social-facebook').href = facebook
    document.querySelector('#social-linkedin').href = linkedin
    document.querySelector('#social-button').dataset.link = location
    document.querySelector('#notifier-text').innerHTML = location
}

/**
 * Schedules page load functions.
 */
function onLoad() {
    updateCopyrightYear()
    updateSocialLinks()
}

document.addEventListener('DOMContentLoaded', onLoad)
