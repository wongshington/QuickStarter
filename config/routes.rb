Rails.application.routes.draw do

root "root#root"
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :projects, only: [:create, :show, :new, :index]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
