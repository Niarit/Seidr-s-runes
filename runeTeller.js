let runes = [];
function runeReading() {
    let randomNumber = Math.floor(Math.random() * runes.length);
    document.getElementById('fortune').innerHTML = runes[randomNumber];
};

function reset() {
    document.getElementById('fortune').innerHTML = '';
};