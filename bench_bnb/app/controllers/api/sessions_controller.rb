class Api::SessionsController < ApplicationController
  def create 
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    
    if @user 
      login(@user)
      render 'api/users/show'
    else 
      render json: ["You don't belong here!! Try again."], status: 401
    end 
  end 
  
  def destroy 
    if current_user 
      logout      #will create this method later 
      render {}
    else 
      render status: 404  
    end 
  end 
end
