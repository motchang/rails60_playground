# frozen_string_literal: true

module Types
  class CommentType < Types::BaseObject
    field :id, ID, null: false
    field :post, Types::PostType, null: false
    field :description, String, null: false
  end
end
