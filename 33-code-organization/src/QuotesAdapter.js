class QuotesAdapter {
 
  static getQuotes(callback) {
    fetch("http://localhost:3000/quotes?_embed=likes")
      .then(res => res.json())
      .then(callback)
  } 

  static createQuote(newQuote, callback) {
    // console.log(newQuote)
    const config = this.config("POST", newQuote)
    fetch("http://localhost:3000/quotes", config)
      .then(res => res.json())
      .then(callback)
  } 

  static createLike(quoteId, callback) {
    // console.log(newQuote)
    const config = this.config("POST", { quoteId: quoteId })
    fetch("http://localhost:3000/likes", config)
      .then(res => res.json())
      .then(callback)
  } 

  static config(method, body){
    return {
      method: method,
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(body)
    }
  }

}

const QuoteAdapter = QuotesAdapter