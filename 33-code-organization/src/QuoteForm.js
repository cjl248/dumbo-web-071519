class QuoteForm {
  constructor(args){
    this.formElement = document.querySelector("#new-quote-form")
    this.formElement.addEventListener("submit", this.onFormSubmit)
    this.newQuoteCallback = args.newQuoteCallback
  }

  onFormSubmit = (event) => {
    event.preventDefault()
    QuotesAdapter.createQuote(this.getValuesFromForm(), (newlyCreatedQuote) => {
      this.formElement.reset()
      this.newQuoteCallback(newlyCreatedQuote)
      // do something clever here
    })
  }

  getValuesFromForm(){
    // console.log(this.formElement)
    return { 
      quote: this.getValueFromForm("new-quote"),
      author: this.getValueFromForm("author"),
    }
  }

  getValueFromForm(elementId) {
    return this.formElement.querySelector("#" + elementId).value
  }
}