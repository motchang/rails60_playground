# frozen_string_literal: true

Rails.application.config.generators do |gen|
  gen.template_engine = :slim
  gen.jbuilder false
  gen.assets false
  gen.helper false
end
