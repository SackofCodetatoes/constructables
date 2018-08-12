Rails.application.routes.draw do
  get 'project/create'
  get 'project/index'
  get 'project/show'
  get 'project/new'
  get 'project/edit'
  get 'project/update'
  get 'project/destroy'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :show, :update, :edit]
    resource :session, only: [:create, :destroy]
  end
  root "static_pages#root"
end
