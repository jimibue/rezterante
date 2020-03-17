class Menu < ApplicationRecord
  has_many :items, dependent: :destroy

  def self.getItemsHash
    menus = Menu.all
    newArray = menus.map do |menu|
      { name: menu.name, menu_id: menu.id, items: menu.items }
    end
    return newArray.to_json
  end
end
