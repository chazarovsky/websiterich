
window.onload = function() {
	//---------------INIT-------------
         //A canvas is a rectangular area on an HTML page. By default, a canvas has no border and no content. lo guarda en la variable canvas.
	var canvas = document.getElementById("timberland-canvas"),
        //Renderiza a 2d el canvas y lo guarda en ctx
	ctx = canvas.getContext("2d"), 
        //pone la imagen ese "contexto"
	hiddenImage = document.getElementById("timberland-region-map").getElementsByClassName("fallback-image"),
	currentKey = 'midwest',
	scaleFactor = 1,
	originalScale = {},
	debugmode = false,
	xoffset = 0,
	yoffset = 0,
	urls = {
		west: 'http://35.235.95.12:3000/',
		midwest: 'http://35.235.95.12:3000/',
		south: 'http://35.235.68.160:5608/app/kibana#/dashboard/478f6740-7b3e-11e9-a55e-6b9ca2fb3578?_g=(refreshInterval:(pause:!t,value:0),time:(from:now-90d,mode:quick,to:now))&_a=(description:"rsp%20demo",filters:!(),fullScreenMode:!t,options:(darkTheme:!f,hidePanelTitles:!f,useMargins:!t),panels:!((embeddableConfig:(),gridData:(h:13,i:"1",w:24,x:0,y:0),id:"3ad5a6e0-7b3e-11e9-a55e-6b9ca2fb3578",panelIndex:"1",title:Mensajes,type:visualization,version:"6.5.4"),(embeddableConfig:(),gridData:(h:13,i:"2",w:24,x:24,y:0),id:fa738210-7b43-11e9-a55e-6b9ca2fb3578,panelIndex:"2",title:"",type:visualization,version:"6.5.4"),(embeddableConfig:(),gridData:(h:10,i:"3",w:48,x:0,y:13),id:d5094d60-7b44-11e9-a55e-6b9ca2fb3578,panelIndex:"3",title:Neutral,type:visualization,version:"6.5.4")),query:(language:lucene,query:""),timeRestore:!f,title:rsp_demo,viewMode:full)',
		northeast: 'https://github.com/chazarovsky/websiterich/blob/master/3.9.0/images/RSPcanvas.jpeg?raw=true'
	},
	images = {
		west: 'https://github.com/chazarovsky/websiterich/blob/master/3.9.0/images/texto1.png?raw=true',
		midwest: 'https://github.com/chazarovsky/websiterich/blob/master/3.9.0/images/texto2.png?raw=true',
		south: 'https://github.com/chazarovsky/websiterich/blob/master/3.9.0/images/texto03-01.png?raw=true',
		northeast: 'https://github.com/chazarovsky/websiterich/blob/master/3.9.0/images/lineaBlanca-01.png?raw=true'
	},
	polygons = {
		west: [
            /*
            {x:0, y:0},        // .  1
            {x:100, y:0},      //  |  2
            {x:100, y:100},    // -|_  3
            {x:0, y:100},      //  -|_| 4
            */
            
            {x:265, y:800},        // .  1
            {x:720, y:800},      //  -  2
            {x:720, y:1000},    // -|_  3
            {x:265, y:1000},      //  -|_| 4
        
            
		],
		midwest: [
            
            {x:700, y:480},        // .  1
            {x:960, y:480},      //  -  2
            {x:960, y:650},    // -|_  3
            {x:700, y:650},      //  -|_| 4

		],
		south: [
            
			{x:1300, y:530},        // .  1
            {x:1750, y:530},      //  -  2
            {x:1750, y:765},    // -|_  3
            {x:1300, y:765},    //  -|_| 4
		],
        
		northeast: [
            {x:100, y:85},        // .  1
            {x:800, y:85},      //  -  2
            {x:800, y:220},    // -|_  3
            {x:100, y:220},      //  -|_| 4
		]
	};

	//------------FUNCTIONS-----------
	Function.prototype.throttle = function (milliseconds, context) {
		//prevents calls to a function before the allotted time has been reached
	    var baseFunction = this,
	        lastEventTimestamp = null,
	        limit = milliseconds;

	    return function () {
	        var self = context || this,
	            args = arguments,
	            now = Date.now();

	        if (!lastEventTimestamp || now - lastEventTimestamp >= limit) {
	            lastEventTimestamp = now;
	            baseFunction.apply(self, args);
	        }
	    };
	};

	function initialExecution(){
		var lastObj = images[Object.keys(images)[Object.keys(images).length - 1]];
		originalScale = {x:lastObj.width, y:lastObj.height};
		resizeCanvas();
		setScaleFactor();
	}

	function preloadImages(){
		//Preload all images and set the original image scale. Then resize/refresh the canvas		
		Object.keys(images).forEach(function(key) {
			img = new Image();
			img.src = images[key];
			images[key] = img;
		});
		//onload of last image run initial execution
		var lastObj = images[Object.keys(images)[Object.keys(images).length - 1]];
		lastObj.onload = function(){
			initialExecution();		
			var elem = document.getElementById("timberland-region-map").getElementsByClassName("loader");
			elem[0].parentNode.removeChild(elem[0]);
		}
	}

	function resizeCanvas(){
		//set absolutely positioned canvas height and width to that of the hidden image
		canvas.width = hiddenImage[0].width;
		canvas.height = hiddenImage[0].height;

		//clear the canvas
		clearCanvas();

		//define the global xoffset and yoffset vars by getting the offset of the hidden image
		var viewportOffset = hiddenImage[0].getBoundingClientRect();
		yoffset = viewportOffset.top + window.scrollY;
		xoffset = viewportOffset.left + window.scrollX;

		//Redraw
		if(currentKey == 'none'){
			clearCanvas();
		}else{
			drawImage(images[currentKey],0,0,canvas.width, canvas.height);
		}
	}

	function clearCanvas(){
		//just blasts the canvas data
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	}

	function setScaleFactor(){
		//define the scale factor
		//a decimal percentage which represents the scale of the image relative to its native size
		scaleFactor = canvas.width / originalScale.x;
	}

	function drawImage(img,x,y,w,h){
		//clear the canvas then draw the provided image
		clearCanvas();
		ctx.drawImage(img,x,y,w,h);

		//If debug mode is set we iterate through all of the points in the polygon objects
		//then draw them as canvas strokes for debugging.
		if(debugmode) {
			ctx.beginPath();
			Object.keys(polygons).forEach(function(key) {
				ctx.moveTo(scaleValue(polygons[key][0].x), scaleValue(polygons[key][0].y));
				for(var i = polygons[key].length; i--; ctx.lineTo(scaleValue(polygons[key][i].x), scaleValue(polygons[key][i].y)));
				ctx.stroke();				
			});
			ctx.closePath();
		}
	}

	function processHover(e){
		//get the original key and the mouse coordinates
		ogkey = currentKey;
		coords = getRelativeMousePos(e, xoffset, yoffset);
		
		var BreakException= {};
		try {
			//detect which polygon the pointer is in (if any)
			Object.keys(polygons).forEach(function(key) {
				if (isPointInPoly(polygons[key], coords)) {
					currentKey = key;
					throw BreakException;
				}else{
					currentKey = 'none';
				}
			});
		} catch(g) {
			if (g!==BreakException) throw g;
		}

		//only if the global currentKey value has changed will we redraw
		if(currentKey != ogkey){
			if(currentKey == 'none'){
				clearCanvas();
			}else{
				drawImage(images[currentKey],0,0,canvas.width, canvas.height);
			}
		}
	}

	function getRelativeMousePos(e, xoffset, yoffset){
		//get mouse position relative to the canvas object
		var ex = e.pageX - xoffset;
		var wy = e.pageY - yoffset;
		return {x:ex,y:wy};
	}

	function isPointInPoly(poly, point) {
		//draw vectors from mouse location to detect of a given point is within a polygon
	    var x = point.x, y = point.y;
	    var inside = false;
	    for (var i = 0, j = poly.length - 1; i < poly.length; j = i++) {
	        var xi = scaleValue(poly[i].x), yi = scaleValue(poly[i].y);
	        var xj = scaleValue(poly[j].x), yj = scaleValue(poly[j].y);
	        var intersect = ((yi > y) != (yj > y))
	            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
	        if (intersect) inside = !inside;
	    }
	    return inside;
	}

	function scaleValue(value){
		//scale a provided value by the scalefactor
		//this way we can define the polygons at the native image size
		//but it scales the values relative to the hidden image element
		return value*scaleFactor;
	}


	//------------EXECUTION-----------
	preloadImages();

	//---------EVENT BINDINGS--------
	window.addEventListener('resize', function () {
		resizeCanvas();
		setScaleFactor();
	});

	canvas.addEventListener('mousemove', function (e) {
		processHover(e);
	}.throttle(50));

	canvas.addEventListener('mouseleave', function (e) {
		currentKey = 'none';
		resizeCanvas();
	});

	canvas.addEventListener('click', function (e) {
		if(debugmode) {
			//Set the global var debugmode = true; to get coordinates in console on click.
			//It will also enable the drawing of your polygons
			//Quickly build poly objects by clicking the points in order then copying out of console.
			coords = getRelativeMousePos(e, xoffset, yoffset);
			console.log('{x:'+(coords.x)+', y:'+coords.y+'},');	
		}else{
			if(currentKey!='none')window.open(urls[currentKey],currentKey);
		}
	});
};