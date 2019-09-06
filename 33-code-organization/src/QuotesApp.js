class QuotesApp {

  constructor(){
    this.quotesList = new QuotesList()
    new QuoteForm({
      newQuoteCallback: this.quotesList.addNewQuote
    })
  }
  
}