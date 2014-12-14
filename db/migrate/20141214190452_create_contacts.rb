class CreateContacts < ActiveRecord::Migration
  def change
    create_table :contacts do |t|
      t.string :firstName, :default => 'John'
      t.string :lastName, :default => 'Doe'
      t.string :gender
      t.integer :phone
      t.timestamps
    end
  end
end
