class Day < ActiveRecord::Base
  #validates_uniqueness_of :date
  validates_presence_of :field1, :field2, :field3, :field4, :field5
end
