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

    @tl = Time.now.strftime("%Y-%m-%d")
   
    @fields = Field.all
    
    @lastEntry = Day.last
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
        format.html { redirect_to(@day, :notice => 'Day was successfully created.') }
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
