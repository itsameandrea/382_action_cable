Rails.application.routes.draw do
  devise_for :users


  resources :chatrooms, only: :show do
    # /chatrooms/:chatroom_id/messages
    resources :messages, only: :create
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
