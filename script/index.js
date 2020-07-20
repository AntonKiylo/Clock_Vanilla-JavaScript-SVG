const svgNS = 'http://www.w3.org/2000/svg';
const clockSize = 500;

function createClock(clockSize) {
    let svg = document.createElementNS(svgNS, 'svg');
    svg.setAttributeNS(null, 'width', clockSize);
    svg.setAttributeNS(null, 'height', clockSize);
    svg.setAttributeNS(null, 'id', 'svg');
    svg.setAttributeNS(null, 'display', 'block');
    svg.setAttributeNS(null, 'style', 'margin: 20px auto')
    document.body.appendChild(svg);

    let svgWidth = svg.getAttributeNS(null, 'width');
    let svgHeight = svg.getAttributeNS(null, 'height');

    /***********************************/

    let clockDisc = document.createElementNS(svgNS, 'circle');
    clockDisc.setAttributeNS(null, 'cx', svgWidth / 2);
    clockDisc.setAttributeNS(null, 'cy', svgHeight / 2);
    clockDisc.setAttributeNS(null, 'r', svgHeight / 2);
    clockDisc.setAttributeNS(null, 'fill', '#e1e1e1');
    clockDisc.setAttributeNS(null, 'id', 'clockDisc');
    svg.appendChild(clockDisc);

    /***********************************/

    let digitalClock = document.createElementNS(svgNS, 'text');
    digitalClock.setAttributeNS(null, 'x', svgWidth / 2);
    digitalClock.setAttributeNS(null, 'y', (svgHeight / 2) / 1.5);
    digitalClock.setAttributeNS(null, 'font-family', 'sans-serif');
    digitalClock.setAttributeNS(null, 'text-anchor', 'middle');
    digitalClock.setAttributeNS(null, 'font-size', clockSize/15);
    digitalClock.setAttributeNS(null, 'id', 'digit');
    svg.appendChild(digitalClock);

    /***********************************/

    for (let i = 1; i <= 12; i++) {
        let smallCircles = document.createElementNS(svgNS, 'circle');
        smallCircles.setAttributeNS(null, 'cx', 0);
        smallCircles.setAttributeNS(null, 'cy', 0);
        smallCircles.setAttributeNS(null, 'r', clockSize/15);
        smallCircles.setAttributeNS(null, 'fill', '#fff');
        smallCircles.setAttributeNS(null, 'class', 'smallCircles');
        svg.appendChild(smallCircles);

        let numbers = document.createElementNS(svgNS, 'text');
        numbers.setAttributeNS(null, 'x', 0);
        numbers.setAttributeNS(null, 'y', 0);
        numbers.setAttributeNS(null, 'font-family', 'sans-serif');
        numbers.setAttributeNS(null, 'font-size', clockSize/20);
        numbers.setAttributeNS(null, 'text-anchor', 'middle');
        numbers.setAttributeNS(null, 'dominant-baseline', 'middle')
        numbers.setAttributeNS(null, 'class', 'numbers');
        numbers.innerHTML = i;
        svg.appendChild(numbers);
    }

    /***********************************/

    let hourHand = document.createElementNS(svgNS, 'line');
    hourHand.setAttributeNS(null, 'x1', svgWidth / 2);
    hourHand.setAttributeNS(null, 'x2', svgHeight / 2);
    hourHand.setAttributeNS(null, 'y1', svgWidth / 2);
    hourHand.setAttributeNS(null, 'y2', (svgHeight / 2) / 3);
    hourHand.setAttributeNS(null, 'stroke', 'grey');
    hourHand.setAttributeNS(null, 'stroke-width', 3);
    hourHand.setAttributeNS(null, 'transform-origin', '50%');
    hourHand.setAttributeNS(null, 'id', 'hourHand');
    svg.appendChild(hourHand);

    let minHand = document.createElementNS(svgNS, 'line');
    minHand.setAttributeNS(null, 'x1', svgWidth / 2);
    minHand.setAttributeNS(null, 'x2', svgHeight / 2);
    minHand.setAttributeNS(null, 'y1', svgWidth / 2);
    minHand.setAttributeNS(null, 'y2', (svgHeight / 2) / 5);
    minHand.setAttributeNS(null, 'stroke', 'grey');
    minHand.setAttributeNS(null, 'stroke-width', 3);
    minHand.setAttributeNS(null, 'transform-origin', '50%');
    minHand.setAttributeNS(null, 'id', 'minHand');
    svg.appendChild(minHand);

    let secHand = document.createElementNS(svgNS, 'line');
    secHand.setAttributeNS(null, 'x1', svgWidth / 2);
    secHand.setAttributeNS(null, 'x2', svgHeight / 2);
    secHand.setAttributeNS(null, 'y1', svgWidth / 2);
    secHand.setAttributeNS(null, 'y2', (svgHeight / 2) / 5);
    secHand.setAttributeNS(null, 'stroke', 'red');
    secHand.setAttributeNS(null, 'stroke-width', 2);
    secHand.setAttributeNS(null, 'transform-origin', '50%');
    secHand.setAttributeNS(null, 'id', 'secHand');
    svg.appendChild(secHand);
}

createClock(clockSize);

/***********************************/

let smallCircles = document.querySelectorAll('.smallCircles');
let clockDisc = document.getElementById('clockDisc');
let numbers = document.querySelectorAll('.numbers');

let radius = document.getElementById('svg').getAttributeNS(null, 'width')/2.5;
let angle = 0;

for (let c = 0; c < smallCircles.length; c++) {
    angle += 30;
    let newAngle = angle/180*Math.PI; 

    let clockDiscCenterX = parseFloat(clockDisc.getAttributeNS(null, 'cx'));
    let clockDiscCenterY = parseFloat(clockDisc.getAttributeNS(null, 'cy'));

    let clockNumbersCenterX = clockDiscCenterX + radius * Math.sin(newAngle);
    let clockNumbersCenterY = clockDiscCenterY - radius * Math.cos(newAngle);

    smallCircles[c].setAttributeNS(null, 'cx', `${Math.round(clockNumbersCenterX - parseFloat(smallCircles[c].getAttributeNS(null, 'cx')))}`);
    smallCircles[c].setAttributeNS(null, 'cy', `${Math.round(clockNumbersCenterY - parseFloat(smallCircles[c].getAttributeNS(null, 'cy')))}`);

    numbers[c].setAttributeNS(null, 'x', `${smallCircles[c].getAttributeNS(null, 'cx')}`);
    numbers[c].setAttributeNS(null, 'y', `${smallCircles[c].getAttributeNS(null, 'cy')}`);
}

/***********************************/

function moveClockHands() {
    let date = new Date();
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();

    let secAngle = seconds * 6;
    let minAngle = minutes * 6 + seconds * (360/3600);
    let hourAngle = hours * 30 + minutes * (360/720);

    secHand.style.transform = `rotate(${secAngle}deg)`;
    minHand.style.transform = `rotate(${minAngle}deg)`;
    hourHand.style.transform = `rotate(${hourAngle}deg)`;

    document.getElementById('digit').innerHTML = `${hours}:${(minutes < 10 ? '0' : '') + minutes}:${(seconds < 10 ? '0' : '') + seconds}`;

    setTimeout(moveClockHands, 1000)
}

moveClockHands();