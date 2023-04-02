const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote-button");

let apiQuotes = [];

function newQuote() {
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  quoteText.textContent = quote.text;
  if (quote.author == null) {
    quoteAuthor.textContent = "Unknown";
  } else {
    quoteAuthor.textContent = quote.author;
  }
}

// Get quotes from API
async function getQuotes() {
  const apiURL = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  try {
    const response = await fetch(apiURL);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    //Catch error here
  }
}

function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent}. -${quoteAuthor.textContent}`;
  window.open(twitterUrl, "_blank");
}
// On load
getQuotes();

newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);
