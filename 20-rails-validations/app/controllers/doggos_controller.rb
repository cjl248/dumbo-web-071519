class DoggosController < ApplicationController
  before_action :find_doggo, only: [:show, :edit, :update, :destroy, :spells]

  def index
    if params[:search]
      @doggos = Doggo.where("name like ?", "%#{params[:search]}%")
    else
      @doggos = Doggo.all
    end
    # render :index
  end

  def show
    @doggo_spell = DoggoSpell.new
    @spells = Spell.all
  end

  def new
    @doggo = Doggo.new
    @spells = Spell.all
  end

  def create
    # byebug
    @doggo = Doggo.create(doggo_params)
    @doggo.spell_ids = params[:doggo][:spell_ids]
    # redirect_to "/doggos/#{@doggo.id}"
    # redirect_to doggo_path(@doggo)
    redirect_to @doggo
  end

  def edit
  end

  def update
    @doggo.update(doggo_params)
    redirect_to @doggo
  end

  def destroy
    @doggo.destroy
    redirect_to doggos_path
  end

  def spells
    @doggo_spell = DoggoSpell.new
    @spells = Spell.all
  end

  private

  def doggo_params
    params.require(:doggo).permit(:name, :house, :wand_core)
  end

  def find_doggo
    @doggo = Doggo.find(params[:id])
  end













end
