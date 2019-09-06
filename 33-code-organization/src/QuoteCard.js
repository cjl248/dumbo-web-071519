class QuoteCard {

  constructor(quoteData){
    this.quoteId = quoteData.id
    this.quote = quoteData.quote
    this.author = quoteData.author
    this.likesCount = quoteData.likes ? quoteData.likes.length : 0
    // console.log(quoteData.likes)
  }

  increaseLikeCount = () => {
    this.likeCountElement.innerText++
  }

  likeButtonClicked = () => {
    QuotesAdapter.createLike(this.quoteId, this.increaseLikeCount)
  }

  render(){
    const li = document.createElement("li")
    li.className = "quote-card"
    li.innerHTML = `<blockquote class="blockquote">
        <p class="mb-0">${ this.quote }</p>
        <footer class="blockquote-footer">${ this.author }</footer>
        <br>
        <button class='btn-success'>Likes: <span class="like-count">${ this.likesCount }</span></button>
        <button class='btn-danger'>Delete</button>
      </blockquote>`

    this.likeCountElement = li.querySelector(".like-count")

    li.querySelector(".btn-success").addEventListener("click", this.likeButtonClicked)

    return li
  }

}