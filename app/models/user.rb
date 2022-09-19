class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :jwt_authenticatable,
         jwt_revocation_strategy: JwtDenylist
  # has_secure_password
  validates :email, presence: true
  validates :email, uniqueness: true
  validates :username, presence: true
  validates :username, uniqueness: true
  validates :username, length: { minimum: 4 }
end
