json.extract! order, :id, :item_name, :placed_time, :delivery_time, :price, :created_at, :updated_at
json.url order_url(order, format: :json)
