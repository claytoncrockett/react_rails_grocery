class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.string :name
      t.boolean :purchased
      t.string :category
      t.integer :price

      t.timestamps
    end
  end
end
