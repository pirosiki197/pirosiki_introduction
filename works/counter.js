let count = 0;
const countUp = () => {
    count++;
    const countElement = document.querySelector('#count');
    countElement.innerHTML = '回数: ' + count;
}

const countReset = () => {
    count = 0;
    const countElement = document.querySelector('#count');
    countElement.innerHTML = '回数: ' + count;
}