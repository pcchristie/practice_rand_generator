const responses = ['shit', 'vanilla', 'strong', 'flag bound'];

const footyFortuneTeller = (club) => {
    let rand = Math.floor(Math.random() * 4);
    console.log(`Here's what I think about ${club}... they are ${responses[rand]}`);
}

console.log(responses);

footyFortuneTeller('Essendon');