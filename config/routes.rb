Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :show, :update, :edit]
    resource :session, only: [:create, :destroy]
    resources :projects, only: [:create, :update, :show, :index, :destroy]
    resources :steps, only: [:create, :index, :show, :destroy, :update]
  end
  root "static_pages#root"
end
