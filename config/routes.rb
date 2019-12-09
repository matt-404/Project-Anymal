Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'

  resources :users
  resources :categories do
    resources :posts
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get '/users/:user_id/categories', to: 'categories#index_by_user'
  post '/users/:user_id/categories', to: 'categories#create_by_user'
end
