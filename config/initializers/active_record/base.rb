# frozen_string_literal: true

# from: https://gist.github.com/reddyonrails/11276291
# rubocop:disable Metrics/AbcSize
module ActiveRecord
  class Base
    def self.has_many_documents(association_name)
      define_method association_name.to_s do
        association_name.to_s.singularize.classify.constantize.where("#{self.class.name.underscore}_id": id)
      end
    end

    def self.has_one_document(association_name, options = {})
      association_class_name = if options.present?
                                 options[:class_name]
                               else
                                 association_name.to_s.singularize.classify
                               end
      association_class = association_class_name.constantize

      if options.present? && options[:conditions].present?
        class_eval do
          define_method association_name.to_s do
            association_class.options[:conditions].where("#{name.underscore}_id": id).first
          end
        end
      else
        define_method association_name.to_s do
          association_class.where("#{name.underscore}_id": id).first
        end
      end

      define_method "#{association_name}=" do |object|
        instance_variable_set('@{association_name}'.to_sym, object)

        send("#{association_name}_id=", object.try(:id))
      end
    end
  end
end
# rubocop:enable Metrics/AbcSize
