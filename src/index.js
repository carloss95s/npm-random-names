const messages = [
    "Oscar",
    "Rene",
    "Carlos",
    "Andrea",
    "Juan"
    "Johan"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.[length])];
    console.log(message);
}

module.exports = {randomMsg};