# Part I

* AUTHENTICation
  - Making sure you are a user who you claim you are

* AUTHORization
  - Allowing that user to access their information

# Key questions for Authentication

*  What is the difference between Authorization and Authentication?
*  What is hashing and how does it make password storage more secure?
  'abc123' -> "rihjiosrjg;.hfbhkjnfilbjflibjf"
  'abc123' -> "rihjiosrjg;.hfbhkjnfilbjflibjf"
  'def123' -> "giajdiogjfigbfjblsfb/fbgifblsfjbfx"
  'ghi123' -> "bghsdiobgdlsjvlsd.dvdnvljdsnklvjn"

*  What are rainbow tables and how can they defeat a password hashing strategy?
  'a' -> "girjoigjsfilgjlisdg.dfisdjvlijxvd."
  "aa" -> "gihadilgvjhiadlfjlsa.bfibffkdlj"
  'abc123' -> "rihjiosrjg;.hfbhkjnfilbjflibjf"
  'def123' -> "giajdiogjfigbfjblsfb/fbgifblsfjbfx"
  'ghi123' -> "bghsdiobgdlsjvlsd.dvdnvljdsnklvjn"

*  What is salting? What is a salt? How can it defeat a rainbow tables attack?
  'abc123' -> 'abc123RANDOM' -> 'roiyuiotujilnc.bfhdifjbgoidhjgi'
  'abc123' -> 'abc123IGAILESDNID' -> 'gjrlijg/dgijdgjd/dfihdvizjf'


## Let's implement
BCrypt
0) Uncomment out BCrypt in gemfile
1) Create a migration with `password_digest`
2) In the model, use the macro `has_secure_password`

* Sign up
* Log in

# Part II

# Key questions for Authorization

* How do we keep track of which user has logged in?
* How can we display who's logged in?
* How can we limit user behavior based on who's logged in?
* How do we log out?

## Let's implement

* List of a user's votes
* Delete a vote
* Log out
  * Route
  * View
