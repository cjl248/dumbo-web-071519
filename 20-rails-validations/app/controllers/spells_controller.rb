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
    if @spell.valid?
      redirect_to @spell
    else
      flash[:errors] = @spell.errors.full_messages
      redirect_to new_spell_path
    end
  end

  def edit
  end

  def update
    if @spell.update(spell_params)
      redirect_to @spell
    else
      flash[:errors] = @spell.errors.full_messages
      redirect_to edit_spell_path(@spell)
    end

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
