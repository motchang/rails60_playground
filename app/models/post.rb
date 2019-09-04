# frozen_string_literal: true

class Post
  include Mongoid::Document
  include Mongoid::Timestamps

  field :title, type: String
  field :description, type: String
  field :truncated_preview, type: String

  validates_presence_of :title
  validates_presence_of :description

  has_many :comments
end
