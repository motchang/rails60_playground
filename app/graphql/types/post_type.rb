# frozen_string_literal: true

module Types
  class PostType < Types::BaseObject
    description 'A blog post'

    field :id, ID, null: false
    field :title, String, null: false
    field :description, String, null: false
    # fields should be queried in camel-case (this will be `truncatedPreview`)
    field :truncated_preview, String, null: true
    # Fields can return lists of other objects:
    field :comments, [Types::CommentType], null: true,
                                           # And fields can have their own descriptions:
                                           description: "This post's comments, or null if this post has comments disabled."
  end
end
