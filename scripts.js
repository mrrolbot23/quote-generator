let apiQuotes = [];

function newQuote() {
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  console.log(quote);
  return quote;
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

// On load
getQuotes();
