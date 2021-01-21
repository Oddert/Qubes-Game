
function debounce(func, wait=20, immediate=true) {
  let timeout;
  return function () {
    var context = this;
    var args = arguments;
    let later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args)
    }
    let callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  };
};

let onionSelected = false
let currentTarget

function drawOnionGraph () {
  const canvasWidth = window.innerWidth - 20
  const canvasHeight = window.innerHeight - 20

  const max = (val1, val2) => val2 > val1 ? val2 : val1
  const min = (val1, val2) => val1 < val2 ? val1 : val2

  const radius = min(canvasWidth, canvasHeight) * .5 * .75
  const segmant = radius / 5
  const sectionWidth = segmant - (radius / 15)

  // console.log(radius, segmant)

  d3.select('#Onion_Theory__diagram__container')
    .selectAll('*')
    .remove()

  const svg = d3.select('#Onion_Theory__diagram__container')
    .append('svg')
    .attr('width', canvasWidth)
    .attr('height', canvasHeight)
    .attr('class', 'Onion_Theory__diagram--dynamic')
    // .style('border', '1px solid red')

  const canvas = svg.append('g')
    .attr('class', 'Onion_Theory__diagram--dynamic__canvas')

  const description = d3.select('#Onion_Theory__diagram__descriptions')

  description.attr('class', 'Onion_Theory__diagram__descriptions')

  const arcBsck = d3.arc()
    .outerRadius(radius)
    .innerRadius(radius + (radius / 15) * 5)
    .startAngle(0 * Math.PI / 180)
    .endAngle(360 * Math.PI / 180)

  const arcOne = d3.arc()
    .innerRadius(radius - sectionWidth)
    .outerRadius(radius)
    .startAngle(90 * Math.PI / 180)
    .endAngle(360 * Math.PI / 180)

  const arcTwo = d3.arc()
    .innerRadius((radius - (segmant * 1)) - sectionWidth)
    .outerRadius(radius - (segmant * 1))
    .startAngle(90 * Math.PI / 180)
    .endAngle(360 * Math.PI / 180)

  const arcThree = d3.arc()
    .innerRadius((radius - (segmant * 2)) - sectionWidth)
    .outerRadius(radius - (segmant * 2))
    .startAngle(90 * Math.PI / 180)
    .endAngle(360 * Math.PI / 180)

  const arcFour = d3.arc()
    .innerRadius((radius - (segmant * 3)) - sectionWidth)
    .outerRadius(radius - (segmant * 3))
    .startAngle(90 * Math.PI / 180)
    .endAngle(360 * Math.PI / 180)

  const arcFive = d3.arc()
    .innerRadius((radius - (segmant * 4)) - sectionWidth)
    // .innerRadius(0)
    .outerRadius(radius - (segmant * 4))
    .startAngle(90 * Math.PI / 180)
    .endAngle(360 * Math.PI / 180)


  const colours = [
    { default: '#e06454', hover: '#FA7E6E', antihover: '#bec3c7', active: '#bec3c7', inactive: '#ecf0f1' },
    { default: '#fbb464', hover: '#FFCE7E', antihover: '#bec3c7', active: '#bec3c7', inactive: '#ecf0f1' },
    { default: '#5fc095', hover: '#79DAAF', antihover: '#bec3c7', active: '#bec3c7', inactive: '#ecf0f1' }, //92F3C8
    { default: '#3aaad4', hover: '#54C4EE', antihover: '#bec3c7', active: '#bec3c7', inactive: '#ecf0f1' },
    { default: '#b892c0', hover: '#D2ACDA', antihover: '#bec3c7', active: '#bec3c7', inactive: '#ecf0f1' }, //EBC5F3
    { default: 'red', hover: 'red', antihover: 'red', active: 'red', inactive: 'red' }
  ]

  const back = canvas.append('path')
    .attr('d', arcBsck)
    .attr('transform', `translate(${canvasWidth / 2}, ${canvasHeight / 2})`)
    .attr('fill', 'rgba(0,0,0,0)')
    .on('mouseout', () => highlight(5, false))



  const ringOne = canvas.append('path')
    .attr('d', arcOne)
    .attr('class', 'Onion_Theory__diagram--dynamic__ring')
    .attr('fill', colours[0].default)
    .attr('transform', `translate(${canvasWidth / 2}, ${canvasHeight / 2})`)
    .on('mouseover', () => highlight(0, true))
    .on('click', () => select(0))
    // .on('mouseout', () => highlight(1, false))

  const ringTwo = canvas.append('path')
    .attr('d', arcTwo)
    .attr('class', 'Onion_Theory__diagram--dynamic__ring')
    .attr('fill', colours[1].default)
    .attr('transform', `translate(${canvasWidth / 2}, ${canvasHeight / 2})`)
    .on('mouseover', () => highlight(1, true))
    .on('click', () => select(1))
    // .on('mouseout', () => highlight(2, false))

  const ringThree = canvas.append('path')
    .attr('d', arcThree)
    .attr('class', 'Onion_Theory__diagram--dynamic__ring')
    .attr('fill', colours[2].default)
    .attr('transform', `translate(${canvasWidth / 2}, ${canvasHeight / 2})`)
    .on('mouseover', () => highlight(2, true))
    .on('click', () => select(2))
    // .on('mouseout', () => highlight(3, false))

  const ringFour = canvas.append('path')
    .attr('d', arcFour)
    .attr('class', 'Onion_Theory__diagram--dynamic__ring')
    .attr('fill', colours[3].default)
    .attr('transform', `translate(${canvasWidth / 2}, ${canvasHeight / 2})`)
    .on('mouseover', () => highlight(3, true))
    .on('click', () => select(3))
    // .on('mouseout', () => highlight(4, false))

  const ringFive = canvas.append('path')
    .attr('d', arcFive)
    .attr('class', 'Onion_Theory__diagram--dynamic__ring')
    .attr('fill', colours[4].default)
    .attr('transform', `translate(${canvasWidth / 2}, ${canvasHeight / 2})`)
    .on('mouseover', () => highlight(4, true))
    .on('click', () => select(4))
    // .on('mouseout', () => highlight(5, false))

    // svg.on('mouseout', () => highlight(5, false))

  const textOne = canvas.append('text')
    .text('1) Likes and Dislikes')
    .style('font-size', '14px')
    .attr('x', (canvasWidth / 2) + 20)
    .attr('y', (canvasHeight / 2) - (radius - (segmant * 1)) - sectionWidth)
    .on('click', () => select(0))

  const textTwo = canvas.append('text')
    .text('2) Goals and Aspirations')
    .style('font-size', '14px')
    .attr('x', (canvasWidth / 2) + 20)
    .attr('y', (canvasHeight / 2) - (radius - (segmant * 2)) - sectionWidth)
    .on('click', () => select(1))

  const textThree = canvas.append('text')
    .text('3) Religious and Spiritual Convictions')
    .style('font-size', '14px')
    .attr('x', (canvasWidth / 2) + 20)
    .attr('y', (canvasHeight / 2) - (radius - (segmant * 3)) - sectionWidth)
    .on('click', () => select(2))

  const textFour = canvas.append('text')
    .text('4) Deep Fears and Fantasies')
    .style('font-size', '14px')
    .attr('x', (canvasWidth / 2) + 20)
    .attr('y', (canvasHeight / 2) - (radius - (segmant * 4)) - sectionWidth)
    .on('click', () => select(3))

  const textFive = canvas.append('text')
    .text('5) The Concept of the Self')
    .style('font-size', '14px')
    .attr('x', (canvasWidth / 2) + 20)
    .attr('y', (canvasHeight / 2) - (radius - (segmant * 5)) - sectionWidth)
    .on('click', () => select(4))

  function highlight (target, activate) {
    const rings = [ringOne, ringTwo, ringThree, ringFour, ringFive]
    const texts = [textOne, textTwo, textThree, textFour, textFive]
    const thisRing = rings.splice(target, 1)
    const thisText = texts.splice(target, 1)
    // console.log({ currentTarget })

    if (activate) {
      // console.log(`(197): Activate: ${activate}`, onionSelected ? 'inactive' : 'default')
      rings.forEach((each, idx) => {
        each.attr('fill', colours[idx].inactive)
        each.style('opacity', '.5')
      })
      texts.forEach((each, idx) => {
        // each.attr('fill', '#bec3c7')
        each.style('opacity', '.25')
      })
    } else {
      rings.forEach((each, idx) => {
        // console.log(`(207): Activate: ${activate}`, { target, currentTarget }, onionSelected && target === currentTarget ? 'inactive' : 'default')
        each.attr('fill', onionSelected && idx !== currentTarget ? colours[idx].inactive : colours[idx].hover)
        each.style('opacity', '1')
      })
      texts.forEach((each, idx) => {
        each.attr('fill', 'black')
        each.style('opacity', '1')
      })
    }
    thisRing.forEach(each => {
      each.attr('fill', activate ? colours[target].hover : colours[target].default)
      each.style('opacity', '1')
    })
    thisText.forEach(each => each.style('opacity', '1'))
  }

  function select (target) {
    const rings = [ringOne, ringTwo, ringThree, ringFour, ringFive]
    const texts = [textOne, textTwo, textThree, textFour, textFive]
    const thisRing = rings.splice(target-1, 1)
    // const thisText = texts.splice(target-1, 1)

    // console.log(canvasWidth, canvasWidth / 4)
    // description.attr('class', 'Onion_Theory__diagram__descriptions show')
    let descDOM = document.querySelector('.Onion_Theory__diagram__descriptions')
    descDOM.classList.add('show')

    texts.forEach(each => each.style('display', 'none'))

    let canvasSelectOffsetX = canvasWidth / 4
    let canvasSelectOffsetY = descDOM.scrollHeight > canvasHeight / 2
      ? (descDOM.scrollHeight - (canvasHeight / 2))
      : radius * 0

    descDOM.querySelectorAll('li').forEach((each, idx) => idx === target ? each.classList.add('show') : each.classList.remove('show'))
    canvas.style('transform', `translate(-${canvasSelectOffsetX}px, ${canvasSelectOffsetY}px)`)

    description.style('position', 'absolute')
      .style('box-sizing', 'border-box')
      .style('top', `0px`)
      .style('left', `${(canvasWidth / 4) + 50}px`)

    onionSelected = true
    currentTarget = target
    // setTimeout(deselect, 6000)
  }

// no type on code plz thank
// =========================

  function deselect () {
    const texts = [textOne, textTwo, textThree, textFour, textFive]
    texts.forEach(each => {
      each.style('display', null)
      each.attr('fill', 'black')
      each.style('opacity', '1')
    })
    canvas.style('transform', `translate(0px, 0px)`)
    description.style('position', 'absolute')
      .style('top', `0px`)
      .style('left', `${(canvasWidth / 4) + 50}px`)
      let descDOM = document.querySelector('.Onion_Theory__diagram__descriptions')
      descDOM.classList.remove('show')
      onionSelected = false
  }
}

drawOnionGraph()

function handleScrollCheck () {
  const svg = document.getElementById('Onion_Theory__diagram__container')
  const rect = svg.getBoundingClientRect()
  // console.log(svg.offsetHeight, rect.top)
  if (rect.top < 0) {
    if (-rect.top > svg.offsetHeight && onionSelected) {
      onionSelected = false
      drawOnionGraph()
    }
  } else {
    if (rect.top > svg.offsetHeight && onionSelected) {
      onionSelected = false
      drawOnionGraph()
    }
  }
}

window.addEventListener('resize', debounce(drawOnionGraph))
window.addEventListener('scroll', debounce(handleScrollCheck))
