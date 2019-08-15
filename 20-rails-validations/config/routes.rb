Rails.application.routes.draw do
  get "/doggos/:id/spells", to: 'doggos#spells', as: 'dog_spell_for_what'
  resources :doggo_spells
  resources :spells
  resources :doggos
  # get '/doggos', to: 'doggos#index', as: "doggos"
  # get '/doggos/:id', to: 'doggos#show', as: "doggo"
  # get '/doggos/new', to: 'doggos#new', as: "new_doggo"
  # post '/doggos', to: 'doggos#create'
  # get '/doggos/:id/edit', to: 'doggos#edit', as: "edit_doggo"
  # put '/doggos/:id', to: 'doggos#update'
  # patch '/doggos/:id', to: 'doggos#update'
  # delete '/doggos/:id', to: 'doggos#destroy'

end
