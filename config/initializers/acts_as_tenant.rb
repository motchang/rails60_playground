# frozen_string_literal: true

module ActsAsTenant
  class << self
    def default_tenant=(_)
      raise StandardError, 'DO NOT USE DEFAULT TENANT'
    end
  end
end

ActsAsTenant.configure do |config|
  config.require_tenant = true
end
