# frozen_string_literal: true

Rails.application.config.generators do |gen|
  gen.template_engine = :slim
  gen.jbuilder false
  gen.assets false
  gen.helper false

  # Don't generate system test files.
  gen.system_tests = false
  gen.test_framework :rspec,
                     javascripts: false,
                     stylesheets: false,
                     helper: false,
                     fixtures: true,
                     view_specs: false,
                     helper_specs: true,
                     routing_specs: false
  gen.factory_bot dir: 'spec/factories'
  gen.orm :active_record
end
