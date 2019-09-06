// import QuoteCard from './QuoteCard.js'

class QuotesList {
  constructor(){
    this.quoteUl = document.querySelector("#quote-list")
    QuotesAdapter.getQuotes(this.setQuoteList)
  }

  setQuoteList = data => {
    // console.log(data)
    this.quoteCards = data.map(quote => {
      // console.log(quote)
      return new QuoteCard(quote)
    })
    this.render()
  }

  addNewQuote = (quoteData) => {
    const quoteCard = new QuoteCard(quoteData)
    this.quoteCards.push(quoteCard)
    this.renderOneQuote(quoteCard)
  }

  renderOneQuote = (quoteInstance) => {
    this.quoteUl.append(quoteInstance.render())
  }

  render(){
    this.quoteCards.forEach(this.renderOneQuote)
    // const testCard = new QuoteCard({
    //   quote: "Learn from others' mistakes, life is too short to make them all yourself",
    //   author: "Eleanor Roosevelt" 
    // })
    // // console.log(testCard.render())
    // this.quoteUl.innerHTML += testCard.render()
  }
}