


const canvasWidth = window.innerWidth - 110
const canvasHeight = window.innerHeight - 110

const max = (val1, val2) => val2 > val1 ? val2 : val1
const min = (val1, val2) => val1 < val2 ? val1 : val2

const radius = min(canvasWidth, canvasHeight) * .5 * .75
const segmant = radius / 5
const sectionWidth = segmant - (radius / 15)

console.log(radius, segmant)

d3.select('#Onion_Theory__diagram')
  .selectAll('*')
  .remove()

const svg = d3.select('#Onion_Theory__diagram')
  .append('svg')
  .attr('width', canvasWidth)
  .attr('height', canvasHeight)
  .style('border', '1px solid red')

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

console.log('outer: ', {
  one: radius,
  two: radius - (segmant * 1),
  three: radius - (segmant * 2),
  four: radius - (segmant * 3),
  five: radius - (segmant * 4),
})

console.log('inner: ', {
  one: radius - sectionWidth,
  two: (radius - (segmant * 1)) - sectionWidth,
  three: (radius - (segmant * 2)) - sectionWidth,
  four: (radius - (segmant * 3)) - sectionWidth,
  five: (radius - (segmant * 4)) - sectionWidth
})


const colours = [
  { default: '#e06454', hover: 'tomato', antihover: '#bec3c7', active: '#bec3c7', inactive: '#ffffff' },
  { default: '#fbb464', hover: 'orange', antihover: '#bec3c7', active: '#bec3c7', inactive: '#ffffff' },
  { default: '#5fc095', hover: 'limegreen', antihover: '#bec3c7', active: '#bec3c7', inactive: '#ffffff' },
  { default: '#3aaad4', hover: 'steelblue', antihover: '#bec3c7', active: '#bec3c7', inactive: '#ffffff' },
  { default: '#b892c0', hover: 'purple', antihover: '#bec3c7', active: '#bec3c7', inactive: '#ffffff' },
  { default: 'red', hover: 'red', antihover: 'red', active: 'red', inactive: 'red' }
]

const back = svg.append('path')
  .attr('d', arcBsck)
  .attr('transform', `translate(${canvasWidth / 2}, ${canvasHeight / 2})`)
  .attr('fill', 'rgba(0,0,0,0)')
  .on('mouseout', () => highlight(5, false))



const ringOne = svg.append('path')
  .attr('d', arcOne)
  .attr('transform', `translate(${canvasWidth / 2}, ${canvasHeight / 2})`)
  .on('mouseover', () => highlight(0, true))
  .attr('fill', colours[0].default)
  // .on('mouseout', () => highlight(1, false))

const ringTwo = svg.append('path')
  .attr('d', arcTwo)
  .attr('transform', `translate(${canvasWidth / 2}, ${canvasHeight / 2})`)
  .on('mouseover', () => highlight(1, true))
  .attr('fill', colours[1].default)
  // .on('mouseout', () => highlight(2, false))

const ringThree = svg.append('path')
  .attr('d', arcThree)
  .attr('transform', `translate(${canvasWidth / 2}, ${canvasHeight / 2})`)
  .on('mouseover', () => highlight(2, true))
  .attr('fill', colours[2].default)
  // .on('mouseout', () => highlight(3, false))

const ringFour = svg.append('path')
  .attr('d', arcFour)
  .attr('transform', `translate(${canvasWidth / 2}, ${canvasHeight / 2})`)
  .on('mouseover', () => highlight(3, true))
  .attr('fill', colours[3].default)
  // .on('mouseout', () => highlight(4, false))

const ringFive = svg.append('path')
  .attr('d', arcFive)
  .attr('transform', `translate(${canvasWidth / 2}, ${canvasHeight / 2})`)
  .on('mouseover', () => highlight(4, true))
  .attr('fill', colours[4].default)
  // .on('mouseout', () => highlight(5, false))

// svg.on('mouseout', () => highlight(5, false))

let selected = false

function highlight (target, activate) {
  const rings = [ringOne, ringTwo, ringThree, ringFour, ringFive]//.filter((e, idx) => !(idx + 1 === target))
  const thisRing = rings.splice(target, 1)

  if (activate) {
    rings.forEach((each, idx) => { each.attr('fill', colours[idx].inactive) })
  } else {
    rings.forEach((each, idx) => each.attr('fill', colours[idx].default))
  }
  thisRing.forEach(each => each.attr('fill', activate ? colours[target].hover : colours[target].default))
}

function select (target) {
  const rings = [ringOne, ringTwo, ringThree, ringFour, ringFive]//.filter((e, idx) => !(idx + 1 === target))
  const thisRing = rings.splice(target-1, 1)

}
