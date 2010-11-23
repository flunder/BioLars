class DaysController < ApplicationController

  def index
    @days = Day.all
    @fields = Field.all

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @days }
    end
  end

  def show
    @day = Day.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @day }
    end
  end

  def new
    
    # Prepare data for graph
    
  	@field_data1 = []
  	@field_data2 = []
  	@field_data3 = []
  	@field_data4 = []
  	@field_data5 = []
  	@daysToShow = Day.last(10)    
    
    
    #doubled atm
    @fields = Field.all
    
    @lastEntry = Day.last                  # fails if there is none
    @lastDay = Day.find(@lastEntry.id)
    
    @day = Day.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @day }
    end
  end

  def edit
    @day = Day.find(params[:id])
  end

  def create
    @day = Day.new(params[:day])

    respond_to do |format|
      if @day.save
        format.html { redirect_to(:root, :notice => 'Day was successfully created.') }
        format.xml  { render :xml => @day, :status => :created, :location => @day }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @day.errors, :status => :unprocessable_entity }
      end
    end
  end

  def update
    @day = Day.find(params[:id])

    respond_to do |format|
      if @day.update_attributes(params[:day])
        format.html { redirect_to(@day, :notice => 'Day was successfully updated.') }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @day.errors, :status => :unprocessable_entity }
      end
    end
  end

  def destroy
    @day = Day.find(params[:id])
    @day.destroy

    respond_to do |format|
      format.html { redirect_to(days_url) }
      format.xml  { head :ok }
    end
  end
end
