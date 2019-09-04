# frozen_string_literal: true

# rubocop:disable Metrics/AbcSize
module Mongoid
  module ActiveRecordBridge
    extend ActiveSupport::Concern

    included do
      def self.belongs_to_record(association_name, options = {})
        association_class = (options[:class_name] || association_name.to_s.singularize.classify).constantize

        class_eval do
          send(:field, "#{association_name}_id".to_sym, type: Integer)
          send(:index, "#{association_name}_id": 1)

          define_method association_name.to_s do
            instance_variable_get("@#{association_name}".to_sym) ||
              if (association_name_id = eval("#{association_name}_id")) # rubocop:disable Security/Eval, Style/EvalWithLocation
                instance_variable_set("@#{association_name}".to_sym, association_class.where(id: association_name_id).first)
              end
          end

          define_method "#{association_name}=" do |object|
            instance_variable_set("@#{association_name}".to_sym, object)

            send("#{association_name}_id=".to_sym, (object.try :id))
          end
        end
      end

      def self.has_one_record(association_name, options = {})
        association_class = (options[:class_name] || association_name.to_s.singularize.classify).constantize

        class_eval do
          send(:field, "#{association_name}_id".to_sym, type: Integer)
          send(:index, "#{association_name}_id": 1)

          define_method association_name do
            instance_variable_get("@#{association_name}".to_sym) ||
              if (association_name_id = eval("#{association_name}_id")) # rubocop:disable Security/Eval, Style/EvalWithLocation
                instance_variable_set("@#{association_name}".to_sym, association_class.where(id: association_name_id).first)
              end
          end

          define_method "#{association_name}=" do |object|
            instance_variable_set("@#{association_name}".to_sym, object)
          end
        end
      end
    end
  end
end
# rubocop:enable Metrics/AbcSize
