class CreateDays < ActiveRecord::Migration
  def self.up
    create_table :days do |t|
      t.string :date
      t.string :field1
      t.string :field2
      t.string :field3
      t.string :field4
      t.string :field5
      t.string :field6     
      t.string :comment          
      t.timestamps
    end
  end

  def self.down
    drop_table :days
  end
end
