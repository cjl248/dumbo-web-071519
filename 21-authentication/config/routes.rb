Rails.application.routes.draw do
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :colors, only: [:index] do
    resources :votes, only: [:create]
  end

  # resources :login
  get "/welcome", to: 'login#new'
  post '/login', to: 'login#create'

  root "colors#index"
end
