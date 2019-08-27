class Rails60PlaygroundSchema < GraphQL::Schema
  mutation(Types::MutationType)
  query(Types::QueryType)
end
