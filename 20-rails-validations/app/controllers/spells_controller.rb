class SpellsController < ApplicationController
  before_action :find_spell, only: [:show, :edit, :update, :destroy]

  def index
    @spells = Spell.all
  end

  def show
  end

  def new
    @spell = Spell.new
  end

  def create
    @spell = Spell.create(spell_params)
    redirect_to @spell
  end

  def edit
  end

  def update
    @spell.update(spell_params)
    redirect_to @spell
  end

  def destroy
    @spell.destroy
    redirect_to spells_path
  end

  private

  def spell_params
    params.require(:spell).permit(:description, :incantation, :intensity)
  end

  def find_spell
    @spell = Spell.find(params[:id])
  end

end
