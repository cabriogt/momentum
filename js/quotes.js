const quotes = [
    {
        quote: "Life could be wonderful if people would leave you alone.",
        author: "Charlie Chaplin",
    },
    {
        quote: "He that can have patience can have what he will.",
        author: "Benjamin Franklin",
    },
    {
        quote: "Life is a tragedy when seen in close-up, but a comedy in long-shot.",
        author: "Charlie Chaplin",
    },
    {
        quote: "The journey is the reward.",
        author: "Steve Jobs",
    },
    {
        quote: "Destiny is no matter of chance. It is a matter of choice. It is not a thing to be waited for, it is a thing to be achieved.",
        author: "William Jennings Bryan",
    },
    {
        quote: "The best victory is when the opponent surrenders of its own accord before there are any actual hostilities...It is best to win without fighting.",
        author: "Sun-tzu",
    },
    {
        quote: "The only devils in this world are those running around in our own hearts, and that is where all our battles should be fought.",
        author: "Mahatma Gandhi",
    },
    {
        quote: "A good plan, violently executed now, is better than a perfect plan next week.",
        author: "George S. Patton",
    },
    {
        quote: "My philosophy is that not only are you responsible for your life, but doing the best at this moment puts you in the best place for the next moment.",
        author: "Oprah Winfrey",
    },
    {
        quote: "Self-confidence is the first requisite to great undertakings.",
        author: "Samuel Johnson",
    }

];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

