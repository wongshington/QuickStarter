Rails.application.routes.draw do

root "root#root"
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create] do
      member do
        post 'purchased_reward'
      end
    end
    resource :session, only: [:create, :destroy]
    resources :projects, only: [:create, :show, :new, :index, :update] do
      resources :rewards, only: [:index, :create, :update]
    end
    # resources :project_rewards, only: [:create]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
