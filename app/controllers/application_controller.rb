# frozen_string_literal: true

class ApplicationController < ActionController::Base
  # https://github.com/ErwinM/acts_as_tenant#setting-the-current-tenant-in-a-controller-manually
  set_current_tenant_through_filter
  before_action :detect_current_site

  private

  def detect_current_site
    current_site = Site.find_by!(fqdn: request.env['SERVER_NAME'])
    Rails.logger.debug("current_site: #{current_site}")
    set_current_tenant(current_site)
  end
end
