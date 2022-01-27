# frozen_string_literal: true

source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.6.6'

gem 'rails', '~> 6.1.4'

gem 'puma', '~> 5.6'

gem 'pg'

group :production do
  gem 'rails_12factor'
end

gem 'config'
gem 'jbuilder', '~> 2.11'
gem 'slim-rails'

gem 'bootsnap', '>= 1.4.2', require: false

group :development, :test do
  gem 'dotenv-rails'

  gem 'pry-byebug'
  gem 'pry-doc'
  gem 'pry-rails'
  gem 'pry-stack_explorer'

  gem 'factory_bot_rails'
  gem 'rspec-rails'
end

group :development do
  gem 'listen', '>= 3.0.5', '< 3.6'

  gem 'brakeman', '5.0.4', require: false
  gem 'rubocop', require: false
  gem 'rubocop-checkstyle_formatter', require: false
  gem 'rubocop-performance', require: false
  gem 'rubocop-rails', require: false

  gem 'web-console', '>= 3.3.0'

  gem 'annotate'
  gem 'rails-erd'
end

group :test do
  gem 'capybara', '>= 2.15'
  gem 'selenium-webdriver'
  gem 'webdrivers'

  gem 'rspec_junit_formatter'
end
