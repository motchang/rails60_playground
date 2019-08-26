# frozen_string_literal: true

RSpec.configure do |config|
  config.before(:each) do
    ActsAsTenant.current_tenant = nil
  end

  config.after(:each) do
    ActsAsTenant.current_tenant = nil
  end

  def current_tenant(tenant)
    ActsAsTenant.current_tenant = tenant
  end

  def with_tenant(tenant)
    ActsAsTenant.with_tenant(tenant) do
      yield
    end
  end

  def without_tenant
    ActsAsTenant.without_tenant do
      yield
    end
  end
end
