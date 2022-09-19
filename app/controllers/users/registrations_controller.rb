class Users::RegistrationsController < Devise::RegistrationsController
  respond_to :json
  private
  def respond_with(resource, _opts = {})
    resource.persisted? ? register_success : register_failed
  end
  def register_success
    user = User.find(current_user.id)
    render json: { user: user, message: 'Signed up.' }
  end
  def register_failed
    render json: { message: "Signed up failure." }
  end
end
