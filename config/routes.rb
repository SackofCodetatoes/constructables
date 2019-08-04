Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do 
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show, :update, :edit]
    resources :projects, only: [:create, :update, :show, :index, :destroy] do 
      resources :comments, only: [:create, :show, :destroy, :update]
    end
    resources :steps, only: [:create, :index, :show, :destroy, :update]
    resources :search, only: [:index, :show]
  end
  root "static_pages#root"
end
