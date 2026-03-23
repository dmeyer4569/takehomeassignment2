
// a few of my favs
const quotes = [
    "The problem is not the problem. The problem is your attitude about the problem. Do you understand? - Captain Jack Sparrow",
    "It’s not who I am underneath, but what I do that defines me. - Bruce Wayne",
    "Life moves pretty fast. If you don't stop and look around once in a while, you could miss it. - Ferris Bueller",
    "I’m not bad. I’m just drawn that way. - Jessica Rabbit",
    "Great men are not born great, they grow great. - Vito Corleone",
    "Get busy living, or get busy dying. - Red",
    "I’m the king of the world! - Jack Dawson",
    "Just keep swimming. - Dory",
    "Why so serious? - The Joker",
    "Me? I'm dishonest, and a dishonest man you can always trust to be dishonest. Honestly. It's the honest ones you want to watch out for, because you can never predict when they're going to do something incredibly... stupid. - Jack Sparrow"
];

const button = document.getElementById('quoteBtn');
const display = document.getElementById('displayQuote');

// left click listener
button.addEventListener('click', function() {
    
    // generate a random number and get the quote at said index
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    
    // dynamically update webpage
    display.textContent = randomQuote;
});