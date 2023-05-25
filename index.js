const names = ['Charlie', 'Samip', 'Ali'];
function writeCards(names){
    const newCards = [];
    for(let i = 0 ; i < names.length; i++){
    newCards.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return newCards;
}

function countDown(number){
    let count = 10;
    while (count >= 0){
    console.log(count--);
    }
}