class CreateFields < ActiveRecord::Migration
  def self.up
    create_table :fields do |t|
      t.integer :fieldID      
      t.string :fieldName
      t.integer :fieldPosition
      
      t.timestamps
    end
  end

  def self.down
    drop_table :fields
  end
end
