const evaluations = ['shit', 'vanilla', 'strong', 'flag bound'];
const clubs = ['Pies', 'Dons', 'Dockers', 'Eagles', 'Blues'];
const timeline = ['next year', 'in a few years', 'until the heat death of the universe']

const footyFortuneTeller = () => {
    let randEval = Math.floor(Math.random() * evaluations.length);
    let randClub = Math.floor(Math.random() * clubs.length);
    let randTime = Math.floor(Math.random() * timeline.length);
    console.log(`I can't tell you much, but I can give you one prediction with absolute certainty, I can tell you that ${timeline[randTime]}, the ${clubs[randClub]} will be ${evaluations[randEval]}`);
}

footyFortuneTeller('Essendon');