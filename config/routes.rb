Rails.application.routes.draw do

root "root#root"
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :projects, only: [:create, :show, :new, :index] do
      resources :rewards, only: [:index, :create]
    end
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
