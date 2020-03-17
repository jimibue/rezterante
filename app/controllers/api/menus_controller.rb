class Api::MenusController < ApplicationController
  def index
    render json: Menu.getItemsHash
  end

  def create
    menu = Menu.new(menu_params)
    if menu.save
      render json: menu
    else
      render json: { erros: menu.errors }
    end
  end

  private

  def menu_params
    params.require(:menu).permit(:name)
  end
end
