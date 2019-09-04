# frozen_string_literal: true

class Types::CommentType < Types::BaseObject
  field :id, ID, null: false
  field :post, Types::PostType, null: false
  field :description, String, null: false
end
