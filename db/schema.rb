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

ActiveRecord::Schema.define(version: 20160802230626) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "answer_tasks", force: :cascade do |t|
    t.string   "validation_string"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
  end

  create_table "photo_tasks", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "submissions", force: :cascade do |t|
    t.string   "name"
    t.string   "answer"
    t.string   "image_string"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.integer  "task_id"
    t.integer  "user_id"
  end

  create_table "tasks", force: :cascade do |t|
    t.string   "name"
    t.text     "description"
    t.integer  "points"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.string   "type"
    t.string   "answer"
    t.string   "task_type"
  end

  create_table "users", force: :cascade do |t|
    t.string   "username"
    t.string   "email",            null: false
    t.string   "crypted_password"
    t.string   "salt"
    t.string   "first_name"
    t.string   "last_name"
    t.integer  "age"
    t.integer  "score"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "guest_token"
    t.string   "icon"
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
  end

end
