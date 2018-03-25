var serif_1 = document.getElementById("seri1");
var serif_2 = document.getElementById("seri2");
var help    = document.getElementById("help");
serif_1.style.animation = "fadeout 1.5s forwards";
setTimeout(function(){serif_2.style.animation = "fadeout 1.5s forwards";},1500);
setTimeout(function(){serif_1.style.animation = "fadein 3s forwards ";
					  serif_2.style.animation = "fadein 3s forwards ";
						},3000);
setTimeout(function(){
help.style.display = "block";
draggable(document.getElementById("prop1"));
draggable(document.getElementById("prop2"));
draggable(document.getElementById("prop3"));
},6000);
/*----------------------------------------*/
function draggable(elem){
    var x_b = 0,x_a=0,y_b=0,y_a=0;
    fin = false;/*why var fin doesnt work....*/
	elem.addEventListener("mousedown",mousedown);
	function mousedown(e){
	e = e || window.event;
	x_b = e.clientX;
	y_b = e.clientY;
	document.onmouseup = stopAndconfirm;
	document.onmousemove = drag;
	help.style.display = "none";
	}
	function drag(e){
	e = e||window.event;
	x_a = e.clientX-x_b;
	y_a = e.clientY-y_b;
	x_b = e.clientX;
	y_b = e.clientY;
	elem.style.top = (elem.offsetTop + y_a) + "px";
	elem.style.left = (elem.offsetLeft + x_a) + "px";
	}
	function stopAndconfirm(e){
	help.style.display = "block";
	e = e||window.event;
	x_b = e.clientX;
	y_b = e.clientY;
	if(!((x_b>1114)&&(x_b<1190)&&(y_b>328)&&(y_b<583) )||fin){
		if(elem.id == "prop1"){/*cancel*/
		elem.style.top = "65%";
		elem.style.left = "22%";
		}
		else if(elem.id == "prop2"){
		elem.style.top = "72%";
		elem.style.left = "10%";
		}
		else if(elem.id == "prop3"){
		elem.style.top = "83%";
		elem.style.left = "3%";
		}
	}
	else{/*excuted*/		 
		 if(elem.id == "prop1"){blow(); fin = true;help.style.display = "none";}
	else if(elem.id == "prop2"){sail();}
	else   {					padding();}
	}
	document.onmouseup = null;
    document.onmousemove = null;
	}
	var bird = document.getElementById("chr");
	var failinfo = document.getElementById("failinfo");
	var sailset = document.getElementsByClassName("sailuse");
	var paduse = document.getElementById("pad");
	var padbro = document.getElementById("brokenpad");
	function blow(){
	var wind = document.getElementById("wind");
	document.getElementById("usehuru").style.display = "block";
	elem.style.animation = "use 2s forwards ";
	failinfo.style.display = "none";
	//sailset[1].style.display = "none";/*let the sail remain same place*/
	setTimeout(function(){
	elem.style.display="none";wind.style.display = "block";},2000);
	
	wind.style.animation = "fuki 2s forwards linear";
	setTimeout(function(){wind.style.display = "none";},4000);
	bird.style.animation = "flt  2s forwards 2s ease-in";
	setTimeout(function(){bird.style.display = "none";},8000);
	}
	function sail(){
	failinfo.style.display = "none";
	elem.style.animation = "use 2s forwards ";//0 is off 1 is on
	sailset[0].style.display = "block";
	setTimeout(function(){
	sailset[0].style.display = "none";
	sailset[1].style.display = "block";
	},1500);
	setTimeout(function(){
	elem.style.display="none";
	failinfo.style.display = "block";
	},2000);
	}
	function padding(){
	failinfo.style.display = "none";
	elem.style.display="none";
	paduse.style.display = "block";
	setTimeout(function(){/*padding done ,disappear brokenpad start*/
	paduse.style.display = "none";
	padbro.style.display = "block"
	padbro.style.animation = "use 4s forwards ";}
	,800);
	setTimeout(function(){
	failinfo.style.display = "block";
	padbro.style.display = "none";}
	,2300);
	}
  }
 
/*----------------------test-----------------------*/
//document.addEventListener("mousemove",showCoords);
function showCoords(event) {
    var x = event.clientX;
    var y = event.clientY;
    var coords = "X coords: " + x + ", Y coords: " + y;
    document.getElementById("demo").innerHTML  = coords;
}
