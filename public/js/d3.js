

const radius = 150
const segmant = radius / 5
const sectionWidth = segmant - (radius / 15)

console.log(radius, segmant)

const svg = d3.select('#root')
                .append('svg')
                .attr('width', 600)
                .attr('height', 400)

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

const ringOne = svg.append('path')
  .attr('d', arcOne)
  .attr('transform', 'translate(300, 200)')
  .on('mouseover', () => highlight(1, true))
  // .on('mouseout', () => highlight(1, false))

const ringTwo = svg.append('path')
  .attr('d', arcTwo)
  .attr('transform', 'translate(300, 200)')
  .on('mouseover', () => highlight(2, true))
  // .on('mouseout', () => highlight(2, false))

const ringThree = svg.append('path')
  .attr('d', arcThree)
  .attr('transform', 'translate(300, 200)')
  .on('mouseover', () => highlight(3, true))
  // .on('mouseout', () => highlight(3, false))

const ringFour = svg.append('path')
  .attr('d', arcFour)
  .attr('transform', 'translate(300, 200)')
  .on('mouseover', () => highlight(4, true))
  // .on('mouseout', () => highlight(4, false))

const ringFive = svg.append('path')
  .attr('d', arcFive)
  .attr('transform', 'translate(300, 200)')
  .on('mouseover', () => highlight(5, true))
  // .on('mouseout', () => highlight(5, false))

svg.on('mouseout', () => highlight(0, false))

let selected = false

function highlight (target, activate) {
  const rings = [ringOne, ringTwo, ringThree, ringFour, ringFive]//.filter((e, idx) => !(idx + 1 === target))
  const thisRing = rings.splice(target-1, 1)
  rings.forEach(each => each.attr('fill', 'black'))
  thisRing.forEach(each => each.attr('fill', activate ? '#2d3e50' : 'black'))
}

function select (target) {
  const rings = [ringOne, ringTwo, ringThree, ringFour, ringFive]//.filter((e, idx) => !(idx + 1 === target))
  const thisRing = rings.splice(target-1, 1)
  
}
