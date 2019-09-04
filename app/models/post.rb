# frozen_string_literal: true

class Post
  include Mongoid::Document
  include Mongoid::Timestamps

  field :title, type: String
  validates_presence_of :title

  field :description, type: String
  validates_presence_of :description

  field :truncated_preview, type: String

  has_many :comments
end
