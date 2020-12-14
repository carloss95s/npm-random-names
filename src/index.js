const names = [
    "Oscar",
    "Rene",
    "Carlos",
    "Andrea",
    "Juan",
    "Johan",
    "Carolina",
    "Paulina"
];

const randomName = () => {
    const name = names[Math.floor(Math.random() * names.length)];
    console.log(name);
}

module.exports = {randomName};