Rails.application.routes.draw do

root "root#root"
  namespace :api, defaults: {format: :json} do
    resources :categories, only: [:index, :show]
    resources :users, only: [:create, :show] do
      member do
        post 'purchased_reward'
      end
    end
    resource :session, only: [:create, :destroy]
    resource :supporters, only: [:create]
    resources :projects, only: [:create, :show, :index, :update] do
      resources :rewards, only: [:index, :create, :update, :show]
    end
    resources :project_searches, only: [:index] do
      # might not need this line below
      get 'projects', on: :collection
    end
    # resources :project_rewards, only: [:create]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
