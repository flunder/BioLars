    /**
    * o------------------------------------------------------------------------------o
    * | This file is part of the RGraph package - you can learn more at:             |
    * |                                                                              |
    * |                          http://www.rgraph.net                               |
    * |                                                                              |
    * | This package is licensed under the RGraph license. For all kinds of business |
    * | purposes there is a small one-time licensing fee to pay and for non          |
    * | commercial  purposes it is free to use. You can read the full license here:  |
    * |                                                                              |
    * |                      http://www.rgraph.net/LICENSE.txt                       |
    * o------------------------------------------------------------------------------o
    */




    /**
    * This is the RGraph.skeleton.js file which you can use as a base for creating new graph types.
    */



    
    /**
    * Having this here means that the RGraph libraries can be included in any order, instead of you having
    * to include the common core library first.
    */
    if (typeof(RGraph) == 'undefined') RGraph = {};




    /**
    * The chart constructor. This function sets up the object. It takes the ID (the HTML attribute) of the canvas as the
    * first argument and the data as the second. If you need to change this, you can.
    * 
    * @param string id    The canvas tag ID
    * @param array  data  The chart data
    */
    RGraph.Skeleton = function (id, data)
    {
        /**
        * Set these as object properties so they don't have to be constantly retrieved. Note that using a dollar
        * function - $() - can cause conflicts with popular javascript libraries, eg jQuery. It's therefore best
        * to stick to document.getElementById(). Setting the canvas and context as object properties means you
        * can reference them like this: myObj.canvas
        *                               myObj.context
        */
        this.id      = id;
        this.canvas  = document.getElementById(id);
        this.context = this.canvas.getContext ? this.canvas.getContext("2d") : null;

        /**
        * This puts a reference to this object on to the canvas. Useful in event handling.
        */
        this.canvas.__object__ = this;

        /**
        * This defines the type of this graph type and should be a one word description.
        */
        this.type = 'skeleton';

        /**
        * This facilitates easy object identification, and should be true
        */
        this.isRGraph = true;

        /**
        * This does a few things, for example adding the .fillText() method to the canvas 2D context when
        * it doesn't exist. This facilitates the graphs to be still shown in older browser (though without
        * text obviously). You'll find the function in RGraph.common.core.js
        */
        RGraph.OldBrowserCompat(this.context);


        /**
        * Some example background properties, as used by the method RGraph.background.Draw()
        */
        this.properties = {
            'chart.colors':                 ['red','blue'],  // Default colors
            'chart.background.barcolor1':   'rgba(0,0,0,0)', // Fully transparent
            'chart.background.barcolor2':   'rgba(0,0,0,0)', // Fully transparent
            'chart.background.grid':        true,            // Enabled
            'chart.background.grid.color':  '#ddd',          // The color of the grid - gray
            'chart.background.grid.width':  1,               // The linewidth of the grid lines
            'chart.background.grid.hsize':  20,              // The horizontal size of the grid
            'chart.background.grid.vsize':  20,              // The vertical size of the grid
            'chart.background.grid.vlines': true,            // Whether vertical grid lines are enabled
            'chart.background.grid.hlines': true,            // Whether horizontal grid lines are enabled
            'chart.background.grid.border': true,            // A gray border arount the background
            'chart.background.grid.autofit':false,           // Instead of hsize/vsize your specify this to control the gridsize
            'chart.background.grid.autofit.numhlines': 7,    // When using autofit, this controls how many horizontal grid lines there are
            'chart.background.grid.autofit.numvlines': 20    // When using autofit, this controls how many vertical grid lines there are
        }

        /**
        * A simple check that the browser has canvas support
        */
        if (!this.canvas) {
            alert('[BAR] No canvas support');
            return;
        }

        /**
        * Store the data that was passed to this constructor
        */
        this.data = data;
        
        /**
        * This can be used to store the coordinates of shapes on the graph
        */
        this.coords = [];
    }




    /**
    * A setter method for setting graph properties. It can be used like this: obj.Set('chart.background.grid', false);
    * 
    * @param name  string The name of the property to set
    * @param value mixed  The value of the property
    */
    RGraph.Skeleton.prototype.Set = function (name, value)
    {
        this.properties[name.toLowerCase()] = value;
    }




    /**
    * A getter method for retrieving graph properties. It can be used like this: obj.Get('chart.background.grid');
    * This can be used inside your methods that draw the graph.
    * 
    * @param name  string The name of the property to get
    */
    RGraph.Skeleton.prototype.Get = function (name)
    {
        return this.properties[name];
    }




    /**
    * The function you call to draw the chart after you have set all of the graph properties
    */
    RGraph.Bar.prototype.Draw = function ()
    {
        /**
        * Fire the custom RGraph onbeforedraw event (which should be fired before the chart is drawn)
        */
        RGraph.FireCustomEvent(this, 'onbeforedraw');

        /**
        * Clear all of this canvases event handlers (the ones installed by RGraph)
        */
        RGraph.ClearEventListeners(this.id);
        
        /**
        * Resolves the colors array, which allows the colors to be a function
        */
        RGraph.ResolveColors(this, this.Get('chart.colors'));




        // Draw the chart here...



        
        /**
        * Fire the custom RGraph ondraw event (which should be fired when you have drawn the chart)
        */
        RGraph.FireCustomEvent(this, 'ondraw');
    }
