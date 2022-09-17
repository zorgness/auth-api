class CurrentUserController < ApplicationController
  before_action :authenticate_user!
  def index
    render json: User.find(current_user.id), status: :ok
  end
end
