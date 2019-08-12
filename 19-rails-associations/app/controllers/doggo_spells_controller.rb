class DoggoSpellsController < ApplicationController

  def new
    @doggo_spell = DoggoSpell.new
    @doggos = Doggo.all
    @spells = Spell.all
  end

  def create
    @doggo_spell = DoggoSpell.create(doggo_spell_params)
    redirect_to @doggo_spell.doggo
  end

  private
  def doggo_spell_params
    params.require(:doggo_spell).permit(:doggo_id, :spell_id, :location)
  end
end
