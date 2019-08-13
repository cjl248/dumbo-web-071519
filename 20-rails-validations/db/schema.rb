# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_08_12_152322) do

  create_table "doggo_spells", force: :cascade do |t|
    t.string "location"
    t.integer "doggo_id"
    t.integer "spell_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["doggo_id"], name: "index_doggo_spells_on_doggo_id"
    t.index ["spell_id"], name: "index_doggo_spells_on_spell_id"
  end

  create_table "doggos", force: :cascade do |t|
    t.string "name"
    t.string "house"
    t.string "wand_core"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "spells", force: :cascade do |t|
    t.string "description"
    t.string "incantation"
    t.integer "intensity"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
