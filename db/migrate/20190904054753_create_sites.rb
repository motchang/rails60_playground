# frozen_string_literal: true

class CreateSites < ActiveRecord::Migration[6.0]
  def change
    create_table :sites do |t|
      t.string :fqdn

      t.timestamps
    end

    add_index :sites, :fqdn, unique: true
  end
end
