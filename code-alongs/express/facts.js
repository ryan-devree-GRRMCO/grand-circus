const randomFacts = [
    'My name stands for Bradley James',
    'I love pizza',
    'I played trumpet in marching band in high school and college',
    'I started an underground fight club at Our Daily Bread Ministries',
    "I'm a Teapot"
];

const getRandomFact = () => {
    return randomFacts[Math.floor(Math.random() * Math.floor(randomFacts.length))];
}

module.exports = { randomFacts, getRandomFact };