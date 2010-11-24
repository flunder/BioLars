class DaysController < ApplicationController

  respond_to :html
  before_filter :check_if_new

  def testing
    @days = Day.all 
  end

  def index
    @days = Day.all
    @fields = Field.all

    respond_with(@days)
  end

  def show
    @day = Day.find(params[:id])

    respond_with(@days)
  end

  def new
        
    #doubled atm
    @fields = Field.all
    
    @lastEntry = Day.last                  # fails if there is none
    @lastDay = Day.find(@lastEntry.id)
    
    @day = Day.new

    respond_with(@days)
  end

  def edit
    @day = Day.find(params[:id])
  end

  def create
    @day = Day.new(params[:day])

    if @day.save
      flash[:notice] = "Day was successfully created."
    end
    
    respond_with(@day)
    # respond_with(@movie) can take a location like this:
    # respond_with(@movie, location => movies_url)
    # railscast 224

  end

  def update
    @day = Day.find(params[:id])

    if @day.update_attributes(params[:movie])
      flash[:notice] = "Day was successfully updated."
    end
    
    respond_with(@day)
  end

  def destroy
    @day = Day.find(params[:id])
    @day.destroy
    
    respond_with(@day)
  end
  
  def check_if_new
    unless Day.last
      Day.create(:date => Time.now.strftime("%Y-%m-%d"), :field1 => '63', :field2 => '63', :field3 => '63', :field4 => '63', :field5 => '63', :field6 => '63', :comment => 'Welcome!')
      redirect_to fields_path, :notice => "Please setup your fields first!"
    end
  end  
  
end
