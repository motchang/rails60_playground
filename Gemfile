# frozen_string_literal: true

source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.6.4'

gem 'rails', '~> 6.0.3'

gem 'puma', '~> 5.1'

group :development, :test do
  gem 'sqlite3', '~> 1.4'
end

group :production do
  gem 'pg'
  gem 'rails_12factor'
end

gem 'config'
gem 'jbuilder', '~> 2.10'
gem 'slim-rails'

gem 'bootsnap', '>= 1.4.2', require: false

group :development, :test do
  gem 'dotenv-rails'

  gem 'pry-byebug'
  gem 'pry-coolline'
  gem 'pry-doc'
  gem 'pry-rails'
  gem 'pry-stack_explorer'

  gem 'factory_bot_rails'
  gem 'rspec-rails'
end

group :development do
  gem 'listen', '>= 3.0.5', '< 3.4'

  gem 'brakeman', '4.10.0', require: false
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
