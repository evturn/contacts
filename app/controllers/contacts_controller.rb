class ContactsController < ApplicationController

  def index
    Contact.all.to_json
  end

end