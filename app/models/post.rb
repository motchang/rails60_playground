# frozen_string_literal: true

class Post
  include Mongoid::Document
  include Mongoid::Timestamps
  include Mongoid::ActiveRecordBridge

  field :title, type: String
  field :description, type: String
  field :truncated_preview, type: String

  has_many :comments
  belongs_to_record :user

  validates_presence_of :title
  validates_presence_of :description
  validates_presence_of :user
end
