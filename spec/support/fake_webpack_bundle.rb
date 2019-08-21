# frozen_string_literal: true

# see: https://inside.pixiv.blog/subal/4615
module FakeWebpackBundle
  extend ActiveSupport::Concern

  included do
    before do
      # コントローラーのテスト時に、webpack の吐いた js ファイルなどがいなくてもテストを続行したいので、空文字を返す
      # :asset_bundle_path さえモックしておけば、:javascript_bundle_tag などはしなくて ok（ただ src が空の <script> ができるだけなので）
      allow_any_instance_of(WebpackBundleHelper).to receive(:asset_bundle_path).and_return('')
    end
  end
end
