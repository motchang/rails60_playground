FactoryBot.define do
  factory :site do
    fqdn { "MyString" }
  end
end

# == Schema Information
#
# Table name: sites
#
#  id         :integer          not null, primary key
#  fqdn       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_sites_on_fqdn  (fqdn) UNIQUE
#
