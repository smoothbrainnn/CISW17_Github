function generateQuote(){
  //create quotes array
  const quotes = ["Be yourself; everyone else is already taken.",
                  "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
                  "So many books, so little time.",
                  "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
                  "You only live once, but if you do it right, once is enough.",
                  "Be the change that you wish to see in the world.",
                  "In three words I can sum up everything I've learned about life: it goes on.",
                  "If you tell the truth, you don't have to remember anything."];

  //create authors array
  const authors = ["Oscar Wilde",
                  "Albert Einstein",
                  "Frank Zappa",
                  "Dr. Seuss",
                  "Mae West",
                  "Mahatma Gandhi",
                  "Robert Frost",
                  "Mark Twain"];

  //pick a random quote
  var x = Math.floor(Math.random() * quotes.length);

  //write quote
  writtenQuote = document.getElementById("quote");
  writtenQuote.innerHTML = "\"" + quotes[x] + "\" -" + authors[x];
}