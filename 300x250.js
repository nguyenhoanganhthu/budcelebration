(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib._300x250 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_363 = function() {
		this.clickthrough_btn.addEventListener("click", clickThroughFunc.bind(this));
				function clickThroughFunc()
				{
					this.gotoAndPlay(1);
					this.mc.gotoAndPlay(1);
				}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(363).call(this.frame_363));

	// Layer 5
	this.clickthrough_btn = new lib.button63();
	this.clickthrough_btn.setTransform(271,6.1);
	this.clickthrough_btn._off = true;
	new cjs.ButtonHelper(this.clickthrough_btn, 0, 1, 2, false, new lib.button63(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickthrough_btn).wait(363).to({_off:false},0).wait(1));

	// Layer 1
	this.mc = new lib.main();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mc}]}).wait(364));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


// symbols:
(lib.anhsang = function() {
	this.initialize(img.anhsang);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,37,36);


(lib.dt001 = function() {
	this.initialize(img.dt001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,272,40);


(lib.dt002 = function() {
	this.initialize(img.dt002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,325,40);


(lib.dt01 = function() {
	this.initialize(img.dt01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,119);


(lib.dt02 = function() {
	this.initialize(img.dt02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,259);


(lib.dt03 = function() {
	this.initialize(img.dt03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,265);


(lib.text4g = function() {
	this.initialize(img.text4g);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,15);


(lib.Tween2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.anhsang();
	this.instance.setTransform(15.8,-52,1,2.846,36.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-45.4,-52,90.9,104.3);


(lib.Symbol39 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmGBaQgNgJgBgOIAbAAQAEANAQAAQALAAAFgGQAGgHAAgLIAAgNIgBAAQgEAIgIAEQgJAEgIAAQgVgBgLgOQgKgNAAgWQAAgSALgOQAMgPATAAQAUAAAJAQIABAAIAAgNIAZAAIAABaIgBALIgEALQgDAGgFAEQgFAFgKADQgJADgOAAQgQAAgNgIgAl3gKQgFAJAAAJQAAAJACAFQADAIAEADQAFAFAIAAQALAAAGgIQAGgHAAgMQAAgMgGgIQgFgJgMAAQgLABgGAHgALoBfIAAgWIAYAAIAAAWgALOA5QgJgJAAgOQAAgTAOgIQAHgEAQgCIAJgBIALgBQAGgDAAgEQAAgGgFgDQgDgCgJAAQgKAAgEAFQgCADgBAGIgaAAQABgOAGgIQALgNAZAAQAQAAAOAGQANAGAAATIAAA4IABAHIAEADIAAAEIgcAAQgCgFgBgHQgGAHgGADQgKAFgKABQgNgBgJgHgAL3AQIgGABQgIACgEACQgGAEAAAHQAAAHAEADQAEADAFAAQAJAAAHgFQAHgFAAgNIAAgKQgEADgIABgAGAAxQgMgPAAgXQAAgUAMgQQANgQAaAAQAbAAAMAQQANAQAAAUQAAAWgNAQQgNAQgaAAQgaAAgNgQgAGVgLQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgNgGgJQgHgIgLAAQgLAAgHAIgAJvAxIgBAAIAAAMIgZAAIAAiGIAbAAIAAAyQAKgPAVAAQAQAAAMAOQANAOAAAWQAAAYgNAOQgMAOgQAAQgYAAgIgPgAJ0gJQgFAJAAAMQAAANAFAJQAGAJAMAAQALAAAGgJQAGgIAAgOQAAgMgGgJQgGgIgLgBQgMABgGAIgAgDAxQgNgNAAgWQAAgWANgPQAMgPAXAAQASAAAOAKQANAKABARIgaAAQgDgRgRAAQgLAAgHAKQgFAIAAANQAAANAFAIQAFAJAMAAQATABADgVIAaAAQgDAVgNAJQgMALgUAAQgWAAgMgPgAh2A5QgJgIAAgPQAAgKAFgHQAEgGAIgDIAggFQAHgBAEgCQAFgCAAgEQAAgIgFgDQgDgCgKgBQgRAAAAAPIgbAAQABgRANgIQAOgIASAAQArAAAAAcIAAAyQAAAPADAGIgbAAIgCgKQgMANgVAAQgPgBgJgGgAhCAPIgGACIgNACQgIABgDADQgEADAAAHQAAANAQAAQAWgBAAgWIAAgKgAjfAxQgNgNAAgWQAAgWANgPQAOgPAXAAQASAAAOAKQANAKABARIgaAAQgDgRgRAAQgLAAgHAKQgFAIAAANQAAANAFAIQAFAJAMAAQATABADgVIAaAAQgDAVgNAJQgMALgUAAQgWAAgOgPgApwAxQgOgNAAgYQAAgVAOgOQAOgPAXAAQAXAAAOAPQAOAOAAAVQAAAYgOANQgNAPgYAAQgXAAgOgPgApdgJQgGAJAAAMQAAANAGAJQAGAJAMAAQANAAAFgJQAGgHAAgPQAAgMgGgJQgFgIgNgBQgMABgGAIgANEA5QgJgFAAgNIAAg4IgQAAIAAgSIAQAAIAAgeIAbAAIAAAeIAUAAIAAASIgUAAIAAAvQAAAGADADQACACAHAAIAIgBIAAAVIgQABQgPAAgHgFgAHuA9IAAhgIAbAAIAABggAFHA9IAAg4QAAgLgEgFQgDgFgKgBQgLAAgFAHQgFAGAAAOIAAAzIgbAAIAAhgIAaAAIAAAOIAAAAQAKgRAUAAQAVAAAHAKQAIAKAAATIAAA8gACgA9IAAg4QAAgLgEgFQgEgFgJgBQgMAAgEAHQgFAGAAAOIAAAzIgbAAIAAiGIAbAAIAAA0IAAAAQAGgJAHgDQAIgFAIAAQAUAAAIAKQAIALAAASIAAA8gAnFA9IAAg4QAAgLgDgFQgFgFgJgBQgLAAgFAHQgFAGAAAOIAAAzIgbAAIAAhgIAaAAIAAAOIABAAQAKgRAUAAQAUAAAIAKQAHALAAASIAAA8gAqrA9IAAg4QAAgLgEgFQgEgFgJgBQgMAAgEAHQgFAGAAAOIAAAzIgbAAIAAiGIAbAAIAAA0IAAAAQAFgJAIgDQAIgFAIAAQAUAAAIAKQAIALAAASIAAA8gAtpA9IAAiGIA9AAQAYAAALANQAMAMAAATQAAATgMAKQgLANgYAAIgfAAIAAAwgAtLgJIAXAAQAMABAHgFQAHgFAAgLQAAgMgHgEQgHgFgMABIgXAAgAhdgwIASgbIAeAAIgdAbgAG1gwIgMgQIgMAQIgWAAIAWgcIAYAAIAHAJIAAgGQAMAAAAgJQAAgDgDgCQgCgCgDAAIgFgBIgBgGIAJgBQAMAAAFAHQACAEAAADQAAALgMACIgCAEIgLAAIANASgAHugyIAAgXIAbAAIAAAXgAMBgzIgMgQIgMAQIgWAAIAWgdIAYAAIAWAdg");
	this.shape.setTransform(87.5,9.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,175,19.7);


(lib.Symbol38copy = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E63D18").s().p("A3bM8IAA53MAu2APaIAAKdg");
	this.shape.setTransform(150,61.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-21.7,300,165.7);


(lib.Symbol38 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E63D18").s().p("A3bLnIAA3NMAu2APaIAAHzg");
	this.shape.setTransform(150,69.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-4.7,300,148.7);


(lib.Symbol37copy = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#41BFF9").s().p("A3bhKIAAtMMAu2AAAIAAcsg");
	this.shape.setTransform(150,91.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,183.8);


(lib.Symbol37 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#41BFF9").s().p("A3bAOIAAv+MAu2AAAIAAfgg");
	this.shape.setTransform(150,100.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,201.8);


(lib.Symbol35 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.text4g();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64,15);


(lib.Symbol34 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAbAmIAAg5IAAAAIgWA5IgJAAIgVg5IAAA5IgOAAIAAhLIATAAIAUA6IAVg6IASAAIAABLg");
	this.shape.setTransform(76.1,6.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgbAyIAAhMIA2AAIAAAMIgoAAIAAASIAkAAIAAALIgkAAIAAAXIApAAIAAAMgAAHghIgHgKIgGAKIgLAAIAMgPIAKAAIAMAPg");
	this.shape_1.setTransform(68.2,5.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AARAmIAAgjIghAAIAAAjIgOAAIAAhLIAOAAIAAAeIAhAAIAAgeIANAAIAABLg");
	this.shape_2.setTransform(60.6,6.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgFAmIAAhAIgZAAIAAgLIA9AAIAAALIgZAAIAABAg");
	this.shape_3.setTransform(53.5,6.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgWAfQgIgHAAgPIAAgvIANAAIAAArIACAMQAAADADADQACACADABQAEABADAAQAFAAADgBQADgBACgCQADgDAAgDIACgMIAAgrIANAAIAAAvQAAAPgIAHQgJAIgOAAQgOAAgIgIg");
	this.shape_4.setTransform(43.4,6.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeA1IAAhLIA2AAIAAALIgoAAIAAASIAlAAIAAALIglAAIAAAXIAoAAIAAAMgAAFgeIgGgKIgHAKIgKAAIAMgQIAKAAIALAQgAARghIAAgEQAHgBAAgEQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAIgDgBIgFAAIAAgFIAGgBQADAAAEADQADABABAFQgBAGgHACIAAACg");
	this.shape_5.setTransform(36.7,5.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgFAmIAAhLIALAAIAABLg");
	this.shape_6.setTransform(31.2,6.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AARAmIAAgjIghAAIAAAjIgOAAIAAhLIAOAAIAAAeIAhAAIAAgeIANAAIAABLg");
	this.shape_7.setTransform(25.8,6.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAbAmIAAg5IAAAAIgVA5IgKAAIgVg5IAAAAIAAA5IgOAAIAAhLIAUAAIATA6IAVg6IASAAIAABLg");
	this.shape_8.setTransform(14.1,6.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAAAyIAAhMIAMAAIAABMgAADghIgOgPIANAAIAKAPg");
	this.shape_9.setTransform(7.3,5.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgFAmIAAhAIgZAAIAAgLIA9AAIAAALIgZAAIAABAg");
	this.shape_10.setTransform(3.1,6.8);

	this.addChild(this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,80.1,10.9);


(lib.Symbol33 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.5).p("AoHhoIQPAAIAADRIwPAAg");
	this.shape.setTransform(52,10.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,104,21.2);


(lib.Symbol27 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.5).p("AnEAAIOJAA");
	this.shape.setTransform(45.3,14.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgZAfQgHgJAAgNQAAgLAHgIQAHgJALAAQAFABADACQAFACACAEIAAAAIAAgMIgPAAIAAgJIAPAAIAAgHIAQAAIAAAHIAJAAIAAAJIgJAAIAAA8IgPAAIAAgHQgFAIgKABQgMgBgHgIgAgNgBQgDADAAAHQAAAJADAFQADAFAHAAQAGAAADgFQADgFAAgJQAAgHgDgDQgEgFgFgBQgHABgDAFg");
	this.shape_1.setTransform(86.8,22.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgiA0QgNgQAAgkQAAgjANgQQANgQAVAAQAJAAAJADQAJAEAHAIQAGAHAEAOQAEAOAAARQAAARgEAPQgEAOgGAHQgJAJgHACQgHAEgLAAQgVAAgNgQgAgIgrQgEACgCAFIgDAJIgCAKIgBAbIABAMIADAMQACAEAFAEQAFAEAEAAQAFAAAFgEQAFgDACgFQABgEABgIIACgMIAAgQIgCgQIgCgJIgEgHIgFgFIgIgCQgDAAgFACg");
	this.shape_2.setTransform(76.9,26.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AghA0QgOgQAAgkQAAgjAOgQQANgQAUAAQAIAAALADQAIAEAGAIQAHAHAFAOQADAMAAATQAAATgDANQgFAPgHAGQgGAJgJACQgIAEgKAAQgVAAgMgQgAgHgrQgEACgDAFIgEAJIgCAKIAAAbIABAMQACAIACAEQACAFAEADQAFAEAEAAQAFAAAFgEQAFgDABgFIAEgMIABgWIgBgWIgDgJIgEgHIgGgFIgHgCQgEAAgDACg");
	this.shape_3.setTransform(66.6,26.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgiA0QgNgPAAglQAAgkANgPQAOgQAUAAQAIAAAKADQAJAEAGAIQAHAHAEAOQAEAMAAATQAAATgEANQgDAPgIAGQgHAJgIACQgIAEgKAAQgVAAgNgQgAgIgrQgDACgDAFIgEAJIgBAKIgBAbIABAMQABAIACAEQACAFAFADQAFAEAEAAQAFAAAFgEQAFgEABgEIAEgMIABgcIgCgQIgCgJIgEgHIgGgFQgEgCgDAAQgEAAgEACg");
	this.shape_4.setTransform(56.3,26.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgOAOIAAgbIAdAAIAAAbg");
	this.shape_5.setTransform(48.7,31.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgiA0QgNgQAAgkQAAgjANgQQAOgQAUAAQAIAAAKADQAJAFAHAHQAGAHAEAOQAEAOAAARQAAARgEAPQgEAOgGAHQgJAJgHACQgIAEgKAAQgVAAgNgQgAgIgrQgEACgCAFIgEAJIgBAKIgBARIABAWIADAMIAHAIQAEAEAFAAQAFAAAFgEQAEgDADgFIACgMIACgMIAAgQIgCgQIgCgJIgEgHIgGgFQgEgCgDAAQgDAAgFACg");
	this.shape_6.setTransform(41,26.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgfA7QgLgKgCgRIAZAAQABAHAFAEQAFAFAGAAQAGAAAFgEQAEgEAEgGIADgNQACgHgBgGIAAgBQgKAPgRABQgIAAgJgFQgHgDgHgGQgKgKAAgSQAAgTANgPQANgOAUAAQAMAAALAGQAKAGAGAKQAFALADAKQACANAAALQAAAMgDAMQgDALgGALQgGAKgKAGQgKAGgMAAQgSAAgLgJgAgOglQgGAGAAALQAAAKAFAHQAFAFAKAAQAJAAAEgFQAHgGAAgLQAAgKgHgHQgFgIgIAAQgJAAgFAIg");
	this.shape_7.setTransform(30.7,26.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgeA7QgMgKgDgRIAaAAQACAHAEAEQAGAFAGAAQAFAAAEgEQAGgEACgGIAFgNIABgNIAAgBQgLAPgSABQgHAAgJgFQgIgDgFgGQgLgKAAgSQAAgTANgPQANgOAVAAQALAAALAGQAKAGAGAKQAFAKACALQADANAAALQAAAMgDAMQgCAKgHAMQgFAKgLAGQgLAGgKAAQgTAAgKgJgAgPglQgFAHAAAKQAAAKAFAHQAFAFAKAAQAIAAAGgFQAGgHgBgKQAAgKgFgHQgHgIgHAAQgJAAgGAIg");
	this.shape_8.setTransform(20.4,26.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgNAOIAAgbIAbAAIAAAbg");
	this.shape_9.setTransform(12.7,31.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAGBBIAAgeIg2AAIAAgZIA3hKIAYAAIAABNIASAAIAAAWIgSAAIAAAegAgbANIAhAAIAAgsIgBAAg");
	this.shape_10.setTransform(5.1,26.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgFAfIAAgNIALAAIAAANgAgFgQIAAgOIALAAIAAAOg");
	this.shape_11.setTransform(66.6,6.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAPAfIAAgoQAAgFgDgEQgEgDgFAAQgIAAgFAFQgEAFAAAJIAAAhIgKAAIAAg8IAJAAIAAAKIABAAQAFgLANAAQALgBAGAHQAEAGAAAKIAAAng");
	this.shape_12.setTransform(61.7,6.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgXAvQgFgGAAgIQAAgIAFgFQAFgFAJgCIAPgBQAEgBACgDIAAgEQAAgIgNAAQgJAAgCAEQgCABgCAFIgJAAQAAgKAHgFQAIgEAJAAQAKAAAGAEQAIAEAAAIIAAAkIAAACIADABIAEAAIAAAIIgIABQgFAAgDgEIgBgGQgEAFgGADQgFADgHAAQgHAAgHgFgAAAAVIgEABQgFAAgDACQgGADAAAGQABAEADADQADADAFAAQAGAAADgDQAJgDAAgLIAAgJQgEADgIABgAAFgRIgGgMIgIAMIgKAAIAMgRIAKAAIAMARgAgVglQAAgFACgDQADgFAHAAQADAAAGADIAFABQAEABACgDIABgDIAFAAQgBANgLAAIgIgCQgFgCgDAAQgEgBgBAGg");
	this.shape_13.setTransform(55.2,5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgVAiQgHgJAAgOQAAgNAHgJQAIgJANAAQADAAAHACQAGADADAFIAAggIAKAAIAABUIgKAAIAAgJQgFAKgOAAQgNAAgIgJgAgNgEQgEAFAAAKQAAAKAFAHQAEAGAIAAQAKAAAEgHQAFgGAAgKQAAgKgFgFQgFgHgJAAQgIAAgFAHg");
	this.shape_14.setTransform(48,5.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgcAsIAAhVIAKAAIAAAJIABAAQAEgLANABQAOAAAIAJQAHAKAAAOQAAAMgHAJQgIAJgNAAQgEAAgGgCQgGgDgCgFIgBAAIAAAhgAgNgaQgFAGAAALQAAAIAFAGQAFAHAIAAQAKAAAEgHQAEgFAAgKQAAgKgFgGQgEgHgJAAQgJAAgEAHg");
	this.shape_15.setTransform(38.1,8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgXAtQgFgGAAgIQAAgJAEgEQAGgFAJgCIAPgBQAEgBABgDIABgEQAAgIgNAAQgIAAgEAEQgCACgBAEIgKAAQAAgKAIgFQAIgEAJAAQAIAAAIAEQAIAEAAAIIAAAkIAAACIADABIAEAAIAAAIIgIABQgGAAgCgEIgCgGQgDAEgGAEQgEADgIAAQgJAAgFgFgAAAATIgEABIgIACQgGADAAAGQABAFADACQADADAFAAQAFAAAEgDQAIgDABgLIAAgJQgEADgIABgAAGgUIgGgLIgIALIgKAAIAMgRIAKAAIACAEIAJgQIAOAAIgQARIgGAAIAIAMg");
	this.shape_16.setTransform(31.2,5.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAPAqIAAgqQAAgDgDgEQgDgDgGAAQgIAAgFAFQgEAFAAAHIAAAjIgLAAIAAhUIALAAIAAAhQACgFAGgDQAGgCAEAAQALgBAGAHQAEAFAAAJIAAApg");
	this.shape_17.setTransform(24.5,5.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AANAjQgIAKgMAAQgKAAgFgFQgGgEAAgJQAAgFACgDQABgFAEgBQADgDAEAAIAIgCIAMgDIAEgBIACgCIAAgCQAAgKgMAAQgPAAAAAKIgKAAQABgJAGgFQAIgFAKAAQAXAAgBARIAAAfIABAFQAAAAABABQAAAAAAAAQABAAAAAAQABABAAAAIADgBIAAAIQgDACgFAAQgIAAAAgKgAAEANIgIACQgFABgEADQgEACAAAGQAAAEAEACQACADAGAAQAIAAAEgFQAFgFAAgFIAAgKQgDACgFAAgAgHgaIAJgRIAMAAIgOARg");
	this.shape_18.setTransform(14.9,5.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgDAqIAAg8IAIAAIAAA8gAgDgdIAAgNIAIAAIAAANg");
	this.shape_19.setTransform(10.3,5.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgTAnQgKgHgEgJQgFgKAAgMQAAgSALgNQAKgOASAAQAPAAAKAIQAKAGACAPIgLAAQgCgJgHgFQgHgFgKAAQgNAAgHALQgIALAAANQAAAOAIAKQAJAKALAAQANAAAIgIQAIgHgBgNIgcAAIAAgIIAmAAIAAAsIgHAAIgDgLQgFAHgHADQgIADgIAAQgKAAgKgGg");
	this.shape_20.setTransform(4.3,5.7);

	this.addChild(this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.2,-0.2,90,33.5);


(lib.Symbol26 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.anhsang();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,37,36);


(lib.Symbol25 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.dt001();
	this.instance.setTransform(5.1,-0.9,1,1,18.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.3,-0.9,270.9,123);


(lib.Symbol24 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.dt002();
	this.instance.setTransform(-0.3,0,1,1,18.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.8,0,321.2,139.8);


(lib.Symbol21 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AANAnIAAgnQAAgDgDgDQgCgDgGAAQgGAAgEAFQgFAEAAAGIAAAhIgJAAIAAhNIAJAAIAAAeQADgFAFgCQAFgDADAAQALAAAFAGQAEAFAAAIIAAAmg");
	this.shape.setTransform(71,-10.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAOAdIAAglQAAgFgEgDQgDgDgFAAQgGAAgEAFQgFAFAAAHIAAAfIgJAAIAAg3IAJAAIAAAJQAGgLAKAAQALAAAFAGQAEAFAAAKIAAAkg");
	this.shape_1.setTransform(65.2,-9.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgHAoIAAg3IAHAAIAAA3gAgJgXIAJgQIAKAAIgMAQg");
	this.shape_2.setTransform(61.6,-10.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AANAnIAAgnQAAgDgDgDQgDgDgFAAQgGAAgEAFQgFAEAAAGIAAAhIgJAAIAAhNIAJAAIAAAeQACgFAFgCQAGgDADAAQALAAAFAGQAEAFAAAIIAAAmg");
	this.shape_3.setTransform(57.2,-10.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgSAVQgGgIAAgNQAAgKAGgKQAIgIALAAQAJAAAIAFQAGAFABAJIgKAAQgCgLgMAAQgHAAgFAGQgDAHAAAHQAAAJADAGQAFAGAGAAQAOAAABgOIAKAAQgBAKgGAHQgIAFgKAAQgLAAgHgIg");
	this.shape_4.setTransform(51.5,-9.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AANAnIAAgnQAAgDgCgDQgDgDgGAAQgGAAgFAFQgEAEABAGIAAAhIgKAAIAAhNIAKAAIAAAeQACgFAFgCQAFgDADAAQALAAAFAGQAEAFAAAIIAAAmg");
	this.shape_5.setTransform(42.9,-10.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAOAdIAAglQAAgFgDgDQgDgDgGAAQgGAAgFAFQgEAFAAAHIAAAfIgJAAIAAg3IAJAAIAAAJQAGgLAKAAQALAAAFAGQAEAFAAAKIAAAkg");
	this.shape_6.setTransform(37.1,-9.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgVAkQgFgGAAgHQAAgHAFgFQAFgEAIgCIAOgCQADgBABgBIABgCQAAgKgMAAQgHABgDAEQgCABgBAFIgJAAQAAgKAHgEQAHgEAJAAQAIAAAGAEQAGADAAAIIAAAgIABACIACAAIAEAAIAAAHIgHABQgFABgCgEQgCgCAAgDQgEAEgFADQgDACgHAAQgHAAgGgEgAABAMIgEABIgIACQgFACAAAGQAAAEADACQAEADAEAAQAFAAACgDQAJgDAAgJIAAgIQgEACgGABgAgCgWIAAgDIADgCQAAgBABAAQAAgBAAAAQABgBAAAAQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAIgCgBIgEAAIAAgFIAFAAQAEAAADAFIABAEQAAAFgHACIAAACg");
	this.shape_7.setTransform(31.3,-10.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgUAmIAAgIIAGABQAGAAABgFIAFgKIgXg2IALAAIAOAsIAAAAIAQgsIAKAAIgYA+QgDAKgCACQgEADgGAAg");
	this.shape_8.setTransform(22.9,-8.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAMAgQgIAIgKAAQgJAAgFgEQgFgEAAgIQAAgEABgDQACgEADgCIAGgCIAHgCIAFgBIAHgBIADgBIACgCIAAgCQAAgJgLAAQgNAAgBAJIgJAAQAAgHAHgGQAHgEAJAAQAVAAAAAQIAAAgQAAAAAAAAQABABAAAAQAAAAABAAQAAAAAAAAIADAAIAAAHQgCABgEAAQgIAAAAgIgAAEAMIgIACQgEAAgEACQgDADAAAFQAAAEADACIAIACQAGAAAFgEQAEgEAAgFIAAgJQgCACgFAAgAgGgYIAHgPIAMAAIgNAPg");
	this.shape_9.setTransform(17.6,-10.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAcAnIAAhAIgYBAIgHAAIgYhAIAABAIgKAAIAAhNIANAAIAYBAIAZhAIANAAIAABNg");
	this.shape_10.setTransform(10,-10.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.494,1],-23.7,0,23.8,0.1).s().p("AjtACIAAgEIHbABIAAAEg");
	this.shape_11.setTransform(29.6,15.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgxBAIAAh/IA3AAQAXAAALAMQAKAMAAASQAAARgKAKQgLAMgXAAIgcAAIAAAugAgWgCIAWAAQALAAAGgEQAGgEAAgLQAAgLgGgFQgHgEgKAAIgWAAg");
	this.shape_12.setTransform(48.9,6.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAqBAIAAhZIAAAAIggBZIgTAAIgghYIAAAAIAABYIgbAAIAAh/IAoAAIAcBXIABAAIAchXIAoAAIAAB/g");
	this.shape_13.setTransform(33.9,6.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AghA1QgNgMABgWIAYAAQABALAFAHQAFAHAKAAQAIAAAGgFQAGgGAAgIQAAgFgCgEQAAgCgDgDIgFgDQgCgBgFgBIgEAAIgHAAIAAgQQAFABADgBIAIgCQAEgCADgEQACgDAAgFQAAgHgFgFQgFgFgHAAQgIABgFAFQgFAGAAALIgYAAQABgUALgMQAMgMASAAQAPAAAOAJQAMAKAAAQQAAAKgEAHQgFAGgIADQALADAFAGQAGAHAAALQAAATgOALQgNALgTAAQgUAAgNgMg");
	this.shape_14.setTransform(20.3,6.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AACA+IAAhPIgdAAIAAgUQAPABAJgGQAJgGACgOIAUAAIAAB8g");
	this.shape_15.setTransform(9,6.2);

	this.addChild(this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(5.8,-14.9,67.6,31.3);


(lib.Symbol20 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRAVQgHgIgBgNQAAgMAIgIQAHgIAKAAQAGAAAFACQAFADACADIAFAHIACAJIABAHIgpAAQAAAHAFAFQAEAGAHAAQANAAACgLIAJAAQgCAJgGAFQgGAFgKAAQgMAAgGgIgAgKgQQgEAGgBAGIAfAAQAAgFgFgHQgFgEgGAAQgFAAgFAEg");
	this.shape.setTransform(64.5,-9.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAOAnIAAg3IAKAAIAAA3gAgNAnIAAguIgKAAIAAgJIAKAAIAAgIQAAgHAEgEQAFgDAFAAIAGABIAAAIIgFgBQgCAAgCACQAAAAgBAAQAAABAAAAQAAABgBAAQAAABAAABIAAAIIAJAAIAAAJIgJAAIAAAugAAOgaIAAgLIAKAAIAAALg");
	this.shape_1.setTransform(58.6,-10.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgDAnIAAhNIAHAAIAABNg");
	this.shape_2.setTransform(55.2,-10.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSAVQgHgIAAgNQAAgMAIgIQAHgIAKAAQAGAAAEACQAFADADADIAFAHIACAJIABAHIgpAAQAAAHAEAFQAEAGAIAAQAMAAACgLIAKAAQgCAKgGAEQgHAFgKAAQgKAAgIgIgAgKgQQgFAGAAAGIAfAAQgBgGgEgGQgFgEgGAAQgGAAgEAEg");
	this.shape_3.setTransform(51.3,-9.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgQAYQgGgDgBgLIAKAAQAAAGAEACQAFADAEAAQAOAAAAgIQAAgDgDgDQgCgCgFgBIgQgEQgEAAgDgDQgCgDAAgGQAAgIAGgEQAGgEAJAAQAJAAAFAEQAHAEAAAJIgJAAQAAgEgEgDQgEgCgEAAQgEAAgEABQgEADAAAEIABABIABACIABABIAFADIACAAIACABIAFABIAHACIAGABQADACABADQACACAAAFQAAAGgEAEQgDAEgGABQgFACgGAAQgJAAgHgFg");
	this.shape_4.setTransform(45.8,-9.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AANAnIAAgnQAAgDgCgDQgDgDgGAAQgGAAgEAFQgFAEAAAHIAAAgIgJAAIAAhNIAJAAIAAAeQADgFAFgCQAEgCAEAAQALAAAFAFQAEAGAAAHIAAAmg");
	this.shape_5.setTransform(37.5,-10.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAOAcIAAgkQAAgFgDgDQgDgDgGgBQgGABgEAEQgFAFAAAIIAAAeIgJAAIAAg2IAJAAIAAAJQAGgKAKAAQALgBAFAGQAEAGAAAJIAAAjg");
	this.shape_6.setTransform(31.7,-9.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgVAkQgFgFAAgIQAAgHAFgFQAEgEAJgCIAOgCQADABABgDIABgCQAAgJgMAAQgIAAgCAEQgCABgBAFIgJAAQAAgKAHgEQAHgEAJgBQAHABAHAEQAGADAAAIIAAAgIABACIACABIAEgBIAAAHIgHABQgFAAgCgDQgCgCAAgDQgFAFgEACQgDACgHAAQgIAAgFgEgAABAMIgEABIgIACQgFADAAAFQAAAEADADQADACAFAAQAFAAACgCQAJgFAAgIIAAgIQgEACgGABgAgCgWIAAgDQABAAABgBQAAAAAAAAQAAAAAAgBQAAAAABgBQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAIgCgBIgEAAIAAgEIACgBIADAAQAEABADAEQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAGgHACIAAABg");
	this.shape_7.setTransform(25.9,-10.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgUAmIAAgIIAGABQAFAAADgFIADgKIgWg2IALAAIAOAsIABAAIAPgsIAKAAIgYA+QgDAJgCADQgEADgGAAQgFAAgCgBg");
	this.shape_8.setTransform(17.5,-8.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAMAgQgHAIgLAAQgJAAgFgDQgFgEAAgIQAAgFABgDQACgEADgBIAGgDIAPgDIAHgCIACgCIAAgCQAAgJgLAAQgNAAgBAJIgJAAQAAgIAHgEQAHgFAJAAQAVAAAAAQIAAAgIACABIADAAIAAAHIgGABQgIAAAAgIgAAEAMIgIACQgEAAgEADQgDACAAAFQAAAEADACQADACAFAAQAGAAAFgEQAEgDAAgGIAAgJQgCACgFAAgAgGgXIAHgQIAMAAIgNAQg");
	this.shape_9.setTransform(12.2,-10.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAcAnIAAhAIgYBAIgHAAIgYhAIAABAIgKAAIAAhNIANAAIAYBAIAZhAIANAAIAABNg");
	this.shape_10.setTransform(4.6,-10.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.494,1],-23.7,0,23.8,0.1).s().p("AjtACIAAgEIHbAAIAAAFg");
	this.shape_11.setTransform(18.2,14.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgyBAIAAh/IA4AAQAXAAALAMQALALAAASQAAASgLAKQgMALgWAAIgbAAIAAAvgAgVgDIAVAAQALAAAGgEQAGgDAAgMQAAgLgGgEQgHgEgKAAIgVAAg");
	this.shape_12.setTransform(33.5,4.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAqBAIAAhaIAAAAIggBaIgUAAIgfhZIAABZIgbAAIAAh/IAoAAIAcBWIAAAAIAdhWIAoAAIAAB/g");
	this.shape_13.setTransform(18.6,4.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAAA/QgRAAgOgKQgNgKgBgTIAZAAQACAIAFAFQAFAFAIAAQAJAAAGgHQAGgHAAgKQAAgKgGgHQgGgEgJAAQgGAAgEACQgFABgDAFIgXAAIAMhEIBFAAIAAAVIgyAAIgFAdIAAAAQAKgKANAAQASAAAKANQAKAKAAASQAAATgNAOQgPANgRAAIgBgBg");
	this.shape_14.setTransform(4.9,5.1);

	this.addChild(this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.5,-14.7,72.8,29.7);


(lib.Symbol19 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.dt02();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,200,259);


(lib.Symbol18 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.dt03();
	this.instance.setTransform(1,-0.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1,-0.9,200,265);


(lib.Symbol16 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgWAcQgGgIAAgMQAAgJAGgHQAGgIAKAAQAEAAADACQAEACACAEIABAAIAAgMIgOAAIAAgHIAOAAIAAgHIANAAIAAAHIAIAAIAAAHIgIAAIAAA2IgNAAIAAgGQgFAHgIAAQgLAAgGgHgAgLgBQgDADAAAHQAAAGADAFQADAFAGAAQAEAAADgFQADgEAAgHQAAgHgDgDQgDgFgEAAQgGAAgDAFg");
	this.shape.setTransform(77.4,3.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeAvQgMgPAAggQAAgfAMgOQAMgPASAAQAJAAAHAEQAIADAGAGQAHAJACAKQAEAMAAAQQAAARgEAMQgDALgGAIQgHAHgHADQgHADgJAAQgSAAgMgOgAgHgmQgEADgBADIgEAIIgBAJIgBAYIABALQABAGACAFQACADAEAEQAEADAEAAQAFAAAEgDIAGgHIACgLIACgLIAAgOIgCgPIgCgHQgBgFgCgCIgFgEIgHgCQgDAAgEACg");
	this.shape_1.setTransform(68.6,6.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgeAvQgMgPAAggQAAgfAMgOQAMgPASAAQAJAAAHAEQAIADAGAGQAHAJACAKQAEAMAAAQQAAARgEAMQgDALgGAIQgHAHgHADQgHADgJAAQgSAAgMgOgAgHgmQgDACgCAEIgEAIIgBAJIgBAYIABALQABAGACAFQACADAEAEQAEADAEAAQAFAAAEgDIAGgHIADgLIABgZIgCgPIgCgHQgBgFgCgCIgFgEQgEgCgDAAQgDAAgEACg");
	this.shape_2.setTransform(59.4,6.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeAvQgMgOAAghQAAgfAMgOQAMgPASAAQAJAAAHAEQAIADAGAGQAGAIADALQAEAMAAAQQAAARgEAMQgDAMgGAHQgHAHgHADQgHADgJAAQgTAAgLgOgAgHgmQgDACgCAEIgDAIIgCAJIgBAYIABALIADALQACAEAEADQAEADAEAAQAFAAAEgDQADgCADgFIADgLIABgZIgCgPIgCgHQgBgFgCgCIgFgEQgEgCgDAAQgDAAgEACg");
	this.shape_3.setTransform(50.2,6.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgMAMIAAgYIAZAAIAAAYg");
	this.shape_4.setTransform(43.4,11.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeAvQgMgPAAggQAAgfAMgOQAMgPASAAQAJAAAHAEQAIADAGAGQAHAJACAKQAEAMAAAQQAAARgEAMQgDALgGAIQgHAHgHADQgHADgJAAQgSAAgMgOgAgHgmQgDACgCAEIgEAIIgBAJIAAAjQABAGACAFQACADAEAEQAEADAEAAQAFAAAEgDIAGgHIACgLIACgLIgCgdIgCgHQgBgFgCgCIgFgEIgHgCQgDAAgEACg");
	this.shape_5.setTransform(36.5,6.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgbA0QgKgIgDgQIAXAAQABAFAEAGQAFAEAGAAQAEAAAFgEQAEgDADgGQACgGABgGQABgFAAgGIAAAAQgJANgQAAQgHAAgHgDQgIgEgFgFQgJgJAAgPQAAgSAMgNQALgNATAAQAKAAAKAGQAJAFAFAJQAFAKACAJQACAJAAAMQAAAKgDALQgDAMgFAIQgEAJgKAFQgIAGgMAAQgOAAgLgJgAgNghQgFAFAAAKQAAAJAFAGQAEAFAJAAQAHAAAFgEQAFgHAAgJQAAgIgFgHQgFgHgHAAQgIAAgFAHg");
	this.shape_6.setTransform(27.3,6.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgbA0QgKgIgDgQIAXAAQABAGAFAFQAEAEAGAAQAEAAAFgEQAEgDADgGIADgMIABgLIAAAAQgIANgQAAQgIAAgHgDQgIgEgFgFQgJgJAAgPQAAgSAMgNQAMgNASAAQAKAAAKAGQAJAFAFAJQAFAKACAJQACAJAAAMQAAAKgDALQgCAJgGALQgEAJgKAFQgIAGgLAAQgPAAgLgJgAgNghQgFAFAAAKQAAAJAFAGQAEAFAJAAQAHAAAFgEQAFgHAAgJQAAgJgFgGQgFgHgHAAQgIAAgFAHg");
	this.shape_7.setTransform(18.1,6.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgMAMIAAgYIAZAAIAAAYg");
	this.shape_8.setTransform(11.3,11.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAFA6IAAgbIgwAAIAAgWIAyhDIAVAAIAABFIAQAAIAAAUIgQAAIAAAbgAgYALIAdAAIAAgmIAAAAg");
	this.shape_9.setTransform(4.4,6.8);

	this.addChild(this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,80.4,12.9);


(lib.Symbol15 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEAaIAAgMIAJAAIAAAMgAgEgNIAAgMIAJAAIAAAMg");
	this.shape.setTransform(55.3,6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAMAaIAAghQAAgEgCgEQgDgDgFAAQgGAAgEAFQgEAFAAAHIAAAbIgIAAIAAgyIAIAAIAAAIIAAAAQAFgJAKAAQAKAAAEAFQAEAFAAAJIAAAgg");
	this.shape_1.setTransform(51.2,5.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgTAnQgEgEgBgHQABgHAEgEQAEgEAIgCIANgBQAAAAABgBQABAAAAAAQAAAAABgBQAAAAAAgBIABgDQAAgHgKAAQgIAAgCADIgDAFIgIAAQAAgIAGgEQAGgDAJAAQAIAAAEADQAHADgBAGIAAAfIABACIACABIAEgBIAAAHIgHABQgEAAgDgDIgBgFQgDAEgFACQgDACgGAAQgHAAgFgEgAAAASIgDAAIgHACQgEADgBAFQAAAEAEACQACACAEAAQAFAAACgCQAHgEAAgIIAAgHQgCACgHABgAAEgOIgEgJIgIAJIgIAAIAKgOIAIAAIAKAOgAgSgeIACgHQADgEAFAAQAFAAADACIAFABQAAAAABAAQABAAAAAAQABAAAAgBQAAAAAAAAIABgDIAGAAQgCALgJAAIgEgCIgCAAIgGgCQgEAAgBAFg");
	this.shape_2.setTransform(45.8,4.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRAcQgGgHAAgMQAAgKAGgIQAGgHALAAQAEAAAEABQAFADADAEIAAgbIAIAAIAABGIgIAAIAAgHQgFAIgLAAQgLAAgGgIgAgKgDQgEADAAAKQAAAHAEAGQAEAFAGAAQAIAAAEgFQAEgGAAgIQAAgJgEgDQgEgGgIAAQgGAAgEAGg");
	this.shape_3.setTransform(39.8,5.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgXAkIAAhGIAIAAIAAAHQAFgIAKAAQAMAAAGAIQAGAIAAALQAAAKgGAIQgGAHgMAAQgDAAgEgCQgFgBgDgFIAAAbgAgLgWQgEAGAAAIQAAAIAEAEQAEAGAHAAQAIAAADgGQAEgEAAgIQAAgJgEgFQgEgGgHAAQgHAAgEAGg");
	this.shape_4.setTransform(31.5,6.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgTAmQgEgFAAgHQAAgHAEgEQAEgEAIgCIAMgBQABAAABgBQAAAAABAAQAAAAABgBQAAAAAAgBIABgDQAAgHgKABQgHgBgEAEQgCABAAADIgIAAQAAgHAGgFQAGgDAJAAQAHAAAFADQAHADAAAGIAAAfIAAACIACABIAEgBIAAAHIgHABQgEAAgDgDIgBgFQgDAEgFACQgDACgGAAQgIABgEgEgAABAQIgEAAIgIACQgEADAAAFQAAAEADACQACACAFAAQAFAAACgCQAHgDABgJIAAgHQgEADgFAAgAAFgQIgFgKIgGAKIgJAAIAKgOIAIAAIACACIAIgMIALAAIgNAOIgFAAIAHAKg");
	this.shape_5.setTransform(25.8,4.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AANAjIAAgjQAAgCgDgDQgDgEgFAAQgFABgFAEQgEAEAAAGIAAAdIgIAAIAAhGIAIAAIAAAcIABAAQABgEAFgDQAEgCAEAAQAKAAAEAFQAEAFAAAHIAAAig");
	this.shape_6.setTransform(20.1,5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAKAdQgGAIgKAAQgIAAgEgDQgFgEAAgIQAAgEACgCQACgFABgBIAGgCIARgEIADgBIABgCIABgBQAAgIgKAAQgLAAgBAIIgJAAQABgHAFgFQAHgDAIAAQASAAAAAOIAAAYIABAGIADAAIACAAIAAAHQgCABgEAAQgIAAAAgIgAAEALIgHABQgEABgDACQgEACAAAFQAAAEADACQACABAFAAQAHAAADgDQAEgEAAgEIAAgJIgGACgAgGgWIAHgOIALAAIgMAOg");
	this.shape_7.setTransform(12.1,5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgDAjIAAgyIAHAAIAAAygAgDgYIAAgLIAHAAIAAALg");
	this.shape_8.setTransform(8.3,5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgQAgQgIgFgEgIQgDgJAAgJQAAgOAJgMQAIgLAPAAQAMAAAJAGQAHAFADANIgJAAQgCgIgGgEQgFgEgJAAQgKAAgHAJQgGAKAAAKQAAALAHAJQAGAIAKAAQALAAAGgGQAGgHAAgKIgXAAIAAgGIAfAAIAAAkIgGAAIgCgJQgEAEgGAEQgHACgGAAQgJAAgIgFg");
	this.shape_9.setTransform(3.3,5);

	this.addChild(this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,55.9,10.6);


(lib.Symbol10 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AASAyIAAg2QAAgMgDgGQgEgFgKgBQgJAAgFAHQgEAGAAAPIAAAyIgbAAIAAhgIAZAAIAAAOIABAAQAJgRASAAQAVAAAHAKQAJAKAAAVIAAA6g");
	this.shape.setTransform(161.9,11.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AglBJQgJgJAAgOQAAgTAPgIQAHgEAQgCIAIgCIAJgCQAGgCAAgFQAAgGgEgBQgDgCgIAAQgJAAgEADQgEADAAAGIgZAAQABgNAGgHQAKgNAZAAQAOAAAOAGQANAGAAARIABA6IABAHIAEADIAAAEIgdAAQgCgFAAgGQgGAGgHADQgIAFgJABQgOgBgJgHgAADAgIgEABQgJACgDACQgGAEAAAHQAAAHADADQAEADAGAAQAHAAAGgFQAIgFAAgNIAAgKQgFADgHABgAAKgfIgKgQIgMAQIgVAAIAVgcIAWAAIAWAcgAAUgxIAAgHQAMAAAAgIQAAgDgCgDQgCgBgEAAIgFAAIgBgIIAJAAQANAAAEAGQACADAAAFQAAALgMACIgCADg");
	this.shape_1.setTransform(150.6,8.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAwAyIAAg2IgCgNIgCgGIgFgDQgDgCgFAAQgSAAAAAZIAAA1IgZAAIAAg9IgBgGQgBgEgCgBQgBgDgDgBQgEgCgEAAIgFACIgGADQgDABgDAGQgCAGAAAFIAAA3IgbAAIAAhgIAaAAIAAANIAAAAQAMgQASAAQAUAAAHARQALgRATAAQAQAAAKAIQAKAKAAARIAABAg");
	this.shape_2.setTransform(131.3,11.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgYBGQgOgMAAgdQAAgaANgMQANgOAUAAQAbAAAMATQAGAIACAMIAAATIhDAAQABAPAJAHQADADAIABQAJgBAEgEIAFgHIAbAAQgBAJgIAJQgNAPgXAAQgSAAgPgMgAgFACQgFAFgBALIAnAAQAAgKgGgGQgGgEgIABQgIgBgFAEgAAVgjIgMgPIgLAPIgVAAIAOgSIgRAAIgcgcIAdAAIARAbIAHgIIAVAAIAWAbg");
	this.shape_3.setTransform(116.4,8.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgMBDIAAhgIAZAAIAABggAgMgsIAAgWIAZAAIAAAWg");
	this.shape_4.setTransform(109,9.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgGA7QgHgFgBgNIAAg4IgQAAIAAgSIAQAAIAAgeIAZAAIAAAeIAUAAIAAASIgUAAIAAAuQAAAHADACQACADAHAAIAIgBIAAAVQgDABgMAAQgPAAgHgFg");
	this.shape_5.setTransform(103.1,9.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AATBDIAAg3QAAgMgFgEQgDgGgKAAQgJAAgFAGQgFAFAAAPIAAAzIgbAAIAAiFIAbAAIAAAzIABAAQAEgIAJgEQAGgFAIAAQAUAAAIALQAHAKABASIAAA8g");
	this.shape_6.setTransform(88.7,9.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AATAyIAAg2QAAgMgEgGQgEgFgKgBQgJAAgFAHQgFAIAAANIAAAyIgbAAIAAhgIAaAAIAAAOIABAAQAKgRASAAQAUAAAIAKQAIALAAAUIAAA6g");
	this.shape_7.setTransform(77.3,11.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgLBGIAAgWIAWAAIAAAWgAglAcQgJgIAAgPQAAgRAOgIQAIgEAQgCIAIgBIAJgCQAGgDAAgFQAAgGgEgCQgEgDgHAAQgJAAgEAFQgEAEAAAFIgaAAQABgOAHgIQAKgNAZAAQAOAAAOAGQANAHAAASIAAA4IACAHQAAABAAAAQAAAAABABQAAAAABAAQABABABAAIAAAEIgdAAQgBgCgBgJQgGAFgHAFQgHAFgKAAQgOAAgJgIgAADgKIgEABQgJABgDACQgHAEAAAFQAAAHAEADQAEADAFAAQAHAAAHgFQAHgEABgMIAAgKQgFADgHACg");
	this.shape_8.setTransform(66.3,12.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAwAyIAAg2IgCgNIgCgGIgFgDQgDgCgFAAQgSAAAAAZIAAA1IgZAAIAAg2IgBgNIgCgFIgFgEQgDgCgFAAIgFACIgGADQgDACgDAFQgCAGAAAFIAAA3IgbAAIAAhgIAaAAIAAANIAAAAQAMgQASAAQAUAAAHARQAMgRASAAQAQAAAKAIQAKAKAAARIAABAg");
	this.shape_9.setTransform(52.3,11.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AghAlQgOgNAAgXQAAgVAOgPQANgPAWAAQASAAANAKQANAJACASIgbAAQgCgRgSAAQgJAAgGAKQgGAKAAAKQAAAMAGAKQAEAJALAAQASAAADgUIAaAAQgCAUgNAKQgMAKgUAAQgUAAgOgOg");
	this.shape_10.setTransform(32.9,11.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag+A2QgFgJAAgRIAAg7IAbAAIAAA7QABAJABAEQAEAHALAAQANAAAFgLQADgGgBgJIAAg1IAZAAIAAANIABAAQAHABAIgEIgIgOIAYgOIAOAZIgVAMIgLAFQgHACgHgBIAABKIgYAAIAAgOIgCAEIgCACQgGAGgHACQgIACgFAAQgXAAgHgQgAghgpIASgcIAbAAIgaAcg");
	this.shape_11.setTransform(20,9.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgTBEQgKgDgJgFQgJgHgEgJQgFgJABgMIAcAAQAAAMAJAHQAJAFALABIALgCQAHgBADgEQAFgDAAgHQAAgEgCgDIgEgFQgDgCgEgBIgZgIQgKgCgFgCQgGgCgHgDQgFgEgFgHQgDgHAAgJQAAgUAPgKQAQgMAUAAQANAAAMAFQALAEAIAKQAIAKAAAPIgdAAQAAgUgYAAQgJAAgGADQgGAFAAAIQAAAHAHADQADACAdAIQAoAJAAAcQAAAUgPAMQgPAMgbgBQgIABgLgDg");
	this.shape_12.setTransform(5.7,9.4);

	this.addChild(this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,166.5,20);


(lib.Symbol9 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgvA5IAAhxIA0AAQAlAAAAAdQAAAQgPAIQAJADAGAFQAFAIABALQgBAQgLAIQgMAJgRAAgAgVAlIAYAAQATAAAAgPQAAgQgSAAIgZAAgAgVgJIAXAAQAPAAABgOQAAgNgRAAIgWAAg");
	this.shape.setTransform(65.9,6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgkAqQgPgQgBgaQABgYAPgRQAPgRAXAAQAUAAANALQAOAKACATIgYAAQgDgKgGgEQgGgFgKAAQgIAAgIAGQgHAFgDAJQgCAJAAAIQgBAQAJALQAHALANAAQAaAAACgYIgZAAIAAgRIAwAAIAAA8IgRAAIgCgNQgMAPgUAAQgXAAgPgRg");
	this.shape_1.setTransform(53.7,6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgdAvQgLgLAAgTIAWAAQAAAKAFAGQAEAGAJAAQAHAAAFgFQAGgEAAgIIgBgIQgBgCgDgCIgEgDIgPgCIAAgOIAGAAIAHgCQAEgBACgDQADgEAAgEQAAgHgFgEQgFgEgGAAQgGAAgGAGQgEAFAAAJIgVAAQABgRAKgLQAKgLAQAAQAOAAAMAJQALAJAAANQAAAIgEAHQgDAGgJACIAAABQAKACAFAFQAFAGAAAKQAAARgMAKQgNAKgQAAQgSAAgLgLg");
	this.shape_2.setTransform(43.2,6.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAqA5IAAhdIAAAAIgkBdIgLAAIgkhdIAABdIgOAAIAAhxIAVAAIAiBeIAkheIAUAAIAABxg");
	this.shape_3.setTransform(27.2,6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAkA5IgMgjIgvAAIgMAjIgRAAIAthxIAPAAIAtBxgAgSAJIAkAAIgSgzIAAAAg");
	this.shape_4.setTransform(15,6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAdA5QgDgDAAgEIgCgVIgBgIQgBgEgCgDQgDgEgDgBQgDgBgGAAIgjAAIAAAxIgPAAIAAhxIA0AAQAQAAAJAIQAKAJAAANQAAAKgFAJQgFAHgKABIAAABQAIABAEAGQAEAIABAIIACAUIABAHIAEAFgAgegDIAeAAQAMAAAHgEQAHgFAAgLQAAgKgFgFQgFgFgKAAIgkAAg");
	this.shape_5.setTransform(4.6,6);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,70.7,12);


(lib.Symbol8 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgaAfQgKgLAAgUQAAgQAKgNQAKgMARgBQAPAAAJAIQAKAHACAOIgPAAQgDgQgRAAQgMAAgGAJQgGAIAAAMQAAAOAGAIQAGAJAKAAQAUAAADgVIAOAAQgCAQgJAJQgKAHgPABQgRAAgKgMg");
	this.shape.setTransform(211.4,9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgmAwQgLgNAAgTQAAgUALgMQALgMASAAQAPAAAKAKIADAFIADgBQAEAAADgCIABAAIAAgBIgDgIIAQgGIAHAPIgaAKQADAIAAALQABATgKAOQgKANgTAAQgRAAgKgLgAgcgGQgGAIAAAOQAAAMAGAKQAFAJAOAAQAMAAAFgLQAEgKAAgNQAAgMgDgFQgGgMgMAAQgOAAgFAKgAgUgkIAOgWIAPAAIgSAWg");
	this.shape_1.setTransform(201.6,7.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgsAhQgDgFAAgMIAAg3IANAAIAAA2QABAFACAGQADAHALAAQAPAAACgOQADgGAAgMIAAgoIAOAAIAAANIAEgBQAEAAADgCIABAAIAAgBIgDgIIAQgGIAGAPIgOAGQgHAEgKAAIAAA+IgMAAIAAgNQgDAGgCACQgIAHgLAAQgTAAgGgMg");
	this.shape_2.setTransform(190.8,8.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUAqIAAhRIANAAIAAARQAFgKAFgFQAIgEAKAAIAAAOQgPAAgGAJQgHAJAAAOIAAAlg");
	this.shape_3.setTransform(182.6,8.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAMA1QgKAAgEgDQgFgEAAgLIAAgzIgNAAIAAgMIANAAIAAgYIAMAAIAAAYIARAAIAAAMIgRAAIAAAyQAAAFACABQADABAFAAIAHAAIAAAMg");
	this.shape_4.setTransform(176.7,7.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AALA1QgJAAgEgDQgEgEgBgLIAAgzIgNAAIAAgMIANAAIAAgYIANAAIAAAYIAQAAIAAAMIgQAAIAAAyQgBAFACABQADABAGAAIAGAAIAAAMg");
	this.shape_5.setTransform(167.1,7.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgEBGIAAgQIANAAIAAAQgAgfApQgHgIAAgKQAAgMAHgGQAGgFANgBIAVgEQAFAAABgDIABgGQAAgOgSABQgLgBgEAHQgEADAAAHIgNAAQAAgPAKgIQAKgFAMAAQANAAAKAFQAJAGgBAMIAAAuIABAEQABAAAAAAQABAAAAABQABAAAAAAQABAAABAAIAEAAIAAAJIgKACQgHAAgDgFIgCgHQgGAFgIAEQgHAEgIAAQgLAAgIgGgAABAGIgGABQgJABgDACQgGAEAAAIQAAAGAEAEQAEADAHAAQAFAAAHgDQAMgGgBgNIAAgLQgFADgJABgAgTg5QgCgFgBgIIAIAAQABAGACACQAFAFAHAAQAJAAADgFQADgCACgGIAHAAQgDAWgWAAQgMAAgHgJg");
	this.shape_6.setTransform(160.4,8.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAsAqIAAg1QAAgIgEgFQgDgFgJAAQgLAAgFAGQgGAGAAAJIAAAyIgMAAIAAg1QAAgIgDgFQgDgFgJAAQgLAAgFAHQgGAIAAAGIAAAyIgOAAIAAhRIANAAIAAAMIABAAQAJgOARAAQARAAAEAOQAJgOARAAQAbAAAAAYIAAA7g");
	this.shape_7.setTransform(148.9,8.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgcA3QgLgMAAgTQAAgUALgMQALgMARAAQAJAAAHAEQAIADAFAIQAFAFABAIIABASIg8AAQACAcAWAAQAJAAAHgHQADgFACgFIAOAAQgBAFgDAFQgEAIgDABQgHAIgJABIgJABQgPABgMgMgAgQgBQgGAFgBALIAsAAQgBgKgDgFQgFgIgMAAQgJAAgHAHgAAHgcIgJgPIgKAPIgNAAIAQgXIANAAIAEAHIAOgVIASAAIgVAWIgKAAIAKAPgAAIgrIABAAIgBgBg");
	this.shape_8.setTransform(53.4,6.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AASA5IgbgsIgMAMIAAAgIgOAAIAAhxIAOAAIAABCIAkgiIASAAIghAcIAjA1g");
	this.shape_9.setTransform(45.2,7.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AALA1QgKAAgDgDQgEgEAAgLIAAgzIgPAAIAAgMIAPAAIAAgYIALAAIAAAYIARAAIAAAMIgRAAIAAAyQAAAFACABQACABAGAAIAHAAIAAAMg");
	this.shape_10.setTransform(33.2,7.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgcA3QgLgLAAgUQAAgVALgLQALgMARAAQAJAAAHAEQAIADAFAIQAEAFACAIIABASIg8AAQACAcAWAAQAJAAAHgHQADgFACgFIAOAAQgBAFgDAFQgDAHgEACQgGAIgKABIgJABQgQABgLgMgAgQgBQgHAGAAAKIAsAAQgBgKgDgFQgGgIgLAAQgJAAgHAHgAAHgcIgJgPIgLAPIgMAAIAQgXIANAAIAEAHIAOgVIASAAIgVAWIgKAAIAKAPg");
	this.shape_11.setTransform(26.4,6.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgGA5IAAhRIAMAAIAABRgAgGgnIAAgRIAMAAIAAARg");
	this.shape_12.setTransform(20,7.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAUA5IAAg4QAAgGgEgEQgFgFgIAAQgKAAgGAHQgGAHAAAKIAAAvIgOAAIAAhxIAOAAIAAAsQADgHAIgDQAHgEAGAAQAQAAAGAIQAHAIAAAMIAAA3g");
	this.shape_13.setTransform(13.7,7.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgGA5IAAhkIgmAAIAAgNIBZAAIAAANIgmAAIAABkg");
	this.shape_14.setTransform(4.6,7.4);

	this.addChild(this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,215.2,15.7);


(lib.Symbol7 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQApQgJgDgGgHQgFgGgBgLIAWAAQAAAHAFAEQAFADAGAAQAEAAAFgCQAFgEAAgFQAAgEgGgDQgFgDgMgCIgKgDIgIgCQgEgCgDgFQgCgFAAgEQAAgHADgFQADgGAFgDIAMgEIAMgBQAOAAALAGQAKAHABANIgWAAQgBgLgNAAQgMAAAAAIIAAADIADACIAHAEIANADQANADAHAEQAHAFAAAKQAAAHgDAGQgDAGgGADQgFADgHACQgGABgIAAQgHAAgJgCg");
	this.shape.setTransform(69.7,7.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQApQgJgDgGgHQgGgIAAgJIAWAAQAAAGAFAFQAFADAFAAQAGAAAFgCQAEgEAAgFQAAgEgGgDQgIgDgKgCIgJgDIgJgCQgDgCgDgFQgCgDAAgGQAAgHADgFQADgGAGgDIALgEIAMgBQAPAAAJAGQAKAGACAOIgWAAQgBgLgNAAQgMAAAAAIIABADIACACIADACIAHADIALACQANADAGAEQAHAEAAALQAAAHgDAGQgDAGgGADQgFADgHACQgGABgIAAQgHAAgJgCg");
	this.shape_1.setTransform(61,7.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfAlQgIgHAAgMQAAgJAEgFQAFgEAGgBIANgEIALgCQAGABAEgDQAEgDAAgEQAAgGgEgDQgEgCgGAAQgMAAgCAMIgWAAQABgOALgGQALgHAOAAQAkAAAAAYIAAApQAAAOADAEIgXAAIgCgIQgKAKgQAAQgMAAgIgGgAAKACIgEABIgJACQgHABgDADQgDADAAAFQAAALAOAAQAQAAAAgTIAAgJg");
	this.shape_2.setTransform(52,7.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgKA5IAAhxIAVAAIAABxg");
	this.shape_3.setTransform(45.3,6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgkAqQgPgQgBgaQABgYAPgRQAPgRAXAAQAUAAANALQANAKADATIgYAAQgDgKgGgEQgGgFgKAAQgIAAgIAGQgHAFgDAJQgCAJAAAIQgBAQAJALQAHALANAAQAaAAACgYIgZAAIAAgRIAwAAIAAA8IgRAAIgCgNQgMAPgUAAQgXAAgPgRg");
	this.shape_4.setTransform(36.9,6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgKA5IAAhxIAVAAIAABxg");
	this.shape_5.setTransform(24.3,6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgKA5IAAhxIAVAAIAABxg");
	this.shape_6.setTransform(20.1,6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgfAiQgGgJAAgRIAAgxIAWAAIAAAtQAAAKAEAFQADAFAIAAQAIAAADgGQAFgEAAgOIAAgpIAWAAIAABRIgVAAIAAgMIgBAAQgIAOgPAAQgRAAgHgIg");
	this.shape_7.setTransform(13.2,7.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgnA5IAAhxIBPAAIAAAWIg1AAIAAAaIAtAAIAAARIgtAAIAAAwg");
	this.shape_8.setTransform(4,6);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,73.5,12);


(lib.Symbol6 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.dt01();
	this.instance.setTransform(-0.7,0.5,0.9,0.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.7,0.5,225,107.1);


(lib.Symbol5 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AAhAcIAAgfQAAgQgOAAQgHAAgEAEQgFAFAAAIIAAAeIgGAAIAAgfQAAgQgOAAQgHAAgEAFQgEAEAAAIIAAAeIgJAAIAAg2IAJAAIAAAKQAGgLALAAQANAAADALQAIgLAMAAQAKAAAFAGQAGAGAAALIAAAgg");
	this.shape.setTransform(175.8,12.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AgDAlIAAg1IAHAAIAAA1gAgDgbIAAgJIAHAAIAAAJg");
	this.shape_1.setTransform(169.3,11.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AgUAUIAFgGQAJAHAIAAQALAAAAgIIAAgBQAAgGgNgDQgIgDgDAAQgGgEAAgHQAAgHAGgFQAEgEAHAAQAJAAALAGIgEAGQgIgFgIAAQgJAAAAAIIAAAAQAAAFAMAFQASADAAALQAAAHgGAFQgGAEgIAAQgLAAgKgIg");
	this.shape_2.setTransform(165.1,12.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AgDAmIAAhLIAHAAIAABLg");
	this.shape_3.setTransform(157.9,11.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AgQAYQgHgFAAgIQAAgQAXAAQAGAAAKACIAAgCQAAgPgQAAQgFAAgKAEIgDgHQAJgEAJAAQAYAAAAAWIAAAgIgIAAIAAgJQgHAKgLAAQgIAAgGgEgAgOAKQAAAFAEAEQAEADAGAAQAFAAAGgFQAFgEAAgHIAAgFQgGgBgKAAQgOAAAAAKg");
	this.shape_4.setTransform(153.2,12.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AgRAWQgGgGAAgLIAAggIAJAAIAAAfQAAARAOAAQAGgBAFgFQAFgEAAgIIAAgeIAIAAIAAA1IgIAAIAAgJQgIALgJAAQgKAAgGgGg");
	this.shape_5.setTransform(146.9,12.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AgTAgQgHgIgBgOQABgLAHgIQAJgIAKAAQAMAAAHAMIAAghIAJAAIAABMIgJAAIAAgLQgJAMgKAAQgKAAgJgHgAgMgEQgGAEAAAKQAAAKAGAGQAGAGAGAAQAIAAAGgGQAFgGABgKQgBgJgFgEQgGgGgIAAQgHAAgFAFg");
	this.shape_6.setTransform(139.9,11.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AgSAgQgJgGAAgJQAAgNAQgEQgNgGAAgLQAAgJAIgFQAHgGAJAAQAKAAAIAGQAHAFAAAJQAAALgNAGQAQAEAAAMQAAAKgIAGQgIAGgMAAQgKAAgIgGgAgMAGQgGAEAAAGQAAAGAFAFQAGAEAHAAQAJAAAFgEQAFgFAAgGQAAgGgFgEQgGgEgIAAQgHAAgFAEgAgLgaQgFAEAAAFQAAAGAFAEQAFAEAGAAQAHAAAFgEQAFgEAAgGQAAgFgFgEQgFgDgHAAQgGAAgFADg");
	this.shape_7.setTransform(129.9,11.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("AgZAlIAAgGIAZgYQAQgNAAgJQAAgGgEgEQgFgEgGAAQgJAAgJANIgGgFQAKgPAPAAQAKAAAGAGQAHAGAAAIQAAAIgFAHQgDAEgLAJIgSASIAmAAIAAAHg");
	this.shape_8.setTransform(123.2,11.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231F20").s().p("AgSAfQgIgJgBgVQABgPAHgMQAJgLANAAQAKAAAMAIIgFAHQgJgHgJAAQgIAAgGAJQgGAJAAAMQAHgJANAAQALAAAHAGQAIAFAAAKQgBALgHAHQgIAHgLAAQgKAAgJgHgAgMACQgEAFAAAHQgBAHAGAFQAFAFAHAAQAHAAAFgFQAFgFABgIQgBgHgFgEQgFgDgHAAQgHAAgGADg");
	this.shape_9.setTransform(116.6,11.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231F20").s().p("AgbAhQgNgNAAgUQAAgSAMgNQAMgNAQAAQATAAALANQALANAAASIAAAEIhEAAQABAOAJAIQAJAIAKAAQAQAAAMgNIAIAIQgPAQgVAAQgRAAgMgMgAgSgZQgIAJgBAMIA3AAQgBgMgHgIQgIgJgMAAQgKAAgIAIg");
	this.shape_10.setTransform(101.6,11.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231F20").s().p("AgXAsIAAhWIANAAIAAAYQAKgaAYABIAAAOIgBAAQgPAAgIAKQgKALAAARIAAAjg");
	this.shape_11.setTransform(93.9,11.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231F20").s().p("AgGA8IAAhWIAMAAIAABWgAgGgtIAAgOIANAAIAAAOg");
	this.shape_12.setTransform(87.8,9.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#231F20").s().p("AghAgIAHgJQAQALANAAQAIAAAFgEQAFgEAAgGQAAgKgVgGQgNgEgFgCQgKgGAAgKIAAgBQAAgLAJgHQAIgHALAAQARAAAPAKIgHAKQgMgJgNAAQgGAAgFAEQgEADgBAGIAAAAQAAAGAHADIAOAGQAOAEAGACQAJAHAAAKIAAABQAAAMgJAHQgKAHgNAAQgSAAgRgNg");
	this.shape_13.setTransform(81.1,11.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#231F20").s().p("AgbAhQgNgNAAgUQAAgSAMgNQAMgNAQAAQATAAALANQALANAAASIAAAEIhEAAQABAOAJAIQAJAIAKAAQAQAAAMgNIAIAIQgPAQgVAAQgRAAgMgMgAgSgZQgIAJgBAMIA3AAQgBgMgHgIQgIgJgMAAQgKAAgIAIg");
	this.shape_14.setTransform(72,11.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#231F20").s().p("AgzA7IAAh1IApAAQAbAAASARQARARAAAYQAAAZgRARQgSARgbAAgAgmAuIAcAAQAUAAAOgNQAOgOAAgTQAAgTgOgNQgOgNgUAAIgcAAg");
	this.shape_15.setTransform(60.5,9.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#231F20").s().p("AAuBOIAAhGQAAgIgHgHQgGgGgKgBQgdgCgQACQgKABgGAGQgGAHgBAHIAABHIgZAAIAAibIAZAAIAAAtIAAAAQAHgGAPgBQAXgBAYABQAUABANANQAOAOAAASIAABHg");
	this.shape_16.setTransform(7.1,7.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#231F20").s().p("AgLA6IAAhaIg6AAIAAgZICLAAIAAAZIg6AAIAABag");
	this.shape_17.setTransform(23.9,9.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#231F20").s().p("AgXA7QgTAAgOgOQgMgMgCgWIAAgUQABgWANgNQANgNAUgBIBeAAIAAAYIhdAAQgJABgHAIQgGAHgBAKIAAATQABAVAWADQAMABAqgBIAnAAIAAAYg");
	this.shape_18.setTransform(40.4,9.8);

	this.addChild(this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,180.1,16);


(lib.Symbol3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A5CE4D").s().p("AApBGIAAg/QAAgIgGgFQgGgGgIAAIgVgBIgUABQgIAAgGAGQgFAGgBAGIAABAIgWAAIAAiLIAWAAIAAAoQAHgFANgBQAUgBAVABQARAAANANQALAMABAQIAABAg");
	this.shape.setTransform(7.5,10.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A5CE4D").s().p("AgKA0IAAhRIg0AAIAAgWIB9AAIAAAWIg0AAIAABRg");
	this.shape_1.setTransform(22.5,12.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A5CE4D").s().p("AgVA1QgRAAgMgNQgKgKgCgUQgCgIACgKQABgUALgLQAMgMARgBIBVAAIAAAWIg1AAIgfAAQgHABgGAGQgHAHAAAJIAAASQABASATACIAxAAIAjAAIAAAWIg8AAIgZAAg");
	this.shape_2.setTransform(37.2,12.3);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.1,3.5,42.6,14.1);


(lib.sang = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.anhsang();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[]},4).to({state:[{t:this.instance}]},2).to({state:[]},4).to({state:[{t:this.instance}]},3).wait(111));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,37,36);


(lib.sprite61 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2.5,1,2).p("AADhCQAaABASASQAUAUAAAbQAAAcgUATQgTAUgcAAQgbAAgUgUQgSgSgBgZ");
	this.shape.setTransform(-0.1,-0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgcAAIA5grIAAArIAAAsg");
	this.shape_1.setTransform(-2.7,-7.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.9,-12.1,13.5,18.1);


(lib.shape58Up = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2.5,1,2).p("AgfA/QgXgNgIgYQgKgaAMgYQAMgZAbgJQAYgJAZAMQAZAMAKAaQAJAWgKAY");
	this.shape.setTransform(11,9.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUAJIAFgJIARgnIAeA4IAEAHIhHAQg");
	this.shape_1.setTransform(9.4,15.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(100,99,99,0)").s().p("AgOAdIgTAnQgXgMgIgYQgEgMAAgMQAAgMAHgPQAMgYAagJIABAAIACgBQAKgDAKAAIAAAAIAAAAQAMAAAOAGIABAAQAZANAJAaQAEALAAAKQAAAMgFANQAFgNAAgMQAAgKgEgLQgJgagZgNIgBAAQgOgGgMAAIAAAAIAAAAQgKAAgKADIgCABIgBAAQgaAJgMAYQgHAPAAAMQAAAMAEAMQAIAYAXAMIgEAKIgYgQQgZgaAAgkQAAgiAZgaQAagaAjAAQAkAAAZAaQAaAaAAAiQAAAkgaAaQgUAUgaAEg");
	this.shape_2.setTransform(11.2,8.7);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2.4,0,17.5,19.7);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Symbol35("synched",0);
	this.instance.setTransform(141.2,73,1,1,0,0,0,32,7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(144));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(109.2,65.5,64,15);


(lib.Symbol23 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 7
	this.instance = new lib.Symbol28("synched",0);
	this.instance.setTransform(157.3,58.5,0.5,0.5,0,0,0,78.3,30);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35).to({startPosition:0,_off:false},0).to({regX:78.4,scaleX:1,scaleY:1,x:36.4,y:82.5,startPosition:9},9).wait(83));

	// Layer 6
	this.instance_1 = new lib.Symbol27("synched",0);
	this.instance_1.setTransform(219.6,43.2,0.5,0.5,0,0,0,55.5,23.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({startPosition:0,_off:false},0).to({scaleX:1,scaleY:1,x:137.6,y:167.2},9,cjs.Ease.get(1)).wait(99));

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_27 = new cjs.Graphics().p("AzBjVIgIhFMAk3AMYQgEAUgwAEQg4ADgRADgAzEnhIA0g6MAlDAMTQAkAmgTAtg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(27).to({graphics:mask_graphics_27,x:182.3,y:75.5}).wait(24).to({graphics:null,x:0,y:0}).wait(76));

	// Layer 4 copy
	this.instance_2 = new lib.Symbol26("synched",0);
	this.instance_2.setTransform(337.5,130.6,4.243,2.351,0,0,0,18.5,18);
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(27).to({startPosition:0,_off:false},0).to({x:144.6,y:70.7},13).to({x:-3.3,y:24.6},10).to({_off:true},1).wait(76));

	// Layer 5 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_13 = new cjs.Graphics().p("Axai/QghgfgRgTQgggjAIgSMAkkAMXIgvAzgAyAnqQALgvAzgKMAjhAL7IAIBNg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(13).to({graphics:mask_1_graphics_13,x:275.1,y:63.1}).wait(24).to({graphics:null,x:0,y:0}).wait(90));

	// Layer 4
	this.instance_3 = new lib.Symbol26("synched",0);
	this.instance_3.setTransform(115.5,4.7,4.243,2.351,0,0,0,18.5,17.9);
	this.instance_3._off = true;

	this.instance_3.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(13).to({startPosition:0,_off:false},0).to({x:432.5,y:120.7},23).to({_off:true},1).wait(90));

	// Symbol 25
	this.instance_4 = new lib.Symbol25("synched",0);
	this.instance_4.setTransform(494,141.5,1,1,0,0,0,119.5,58);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:274,y:66.5},13,cjs.Ease.get(1)).wait(114));

	// Symbol 24
	this.instance_5 = new lib.Symbol24("synched",0);
	this.instance_5.setTransform(-92.4,-18.4,1,1,0,0,0,152.5,66.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:152.5,y:66.5},13,cjs.Ease.get(1)).wait(114));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-257.8,-84.9,895.9,290.5);


(lib.Symbol17 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 11 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_72 = new cjs.Graphics().p("AgNDkQg3AAgngxQgngxAAhGIAAgpQAAhEAngyQAngwA3AAIJfAAQA3AAAnAwQAnAyAABEIAAApQAABGgnAxQgnAxg3AAg");
	var mask_graphics_73 = new cjs.Graphics().p("AgfDkQg3AAgngxQgngxAAhGIAAgpQAAhEAngyQAngwA3AAIJfAAQA3AAAnAwQAnAyAABEIAAApQAABGgnAxQgnAxg3AAg");
	var mask_graphics_74 = new cjs.Graphics().p("AgxDkQg3AAgngxQgngxAAhGIAAgpQAAhEAngyQAngwA3AAIJfAAQA3AAAnAwQAnAyAABEIAAApQAABGgnAxQgnAxg3AAg");
	var mask_graphics_75 = new cjs.Graphics().p("AhEDkQg2AAgogxQgmgxAAhGIAAgpQAAhEAmgyQAogwA2AAIJgAAQA2AAAnAwQAnAyAABEIAAApQAABGgnAxQgnAxg2AAg");
	var mask_graphics_76 = new cjs.Graphics().p("AhWDkQg2AAgogxQgmgxAAhGIAAgpQAAhEAmgyQAogwA2AAIJgAAQA2AAAnAwQAnAyAABEIAAApQAABGgnAxQgnAxg2AAg");
	var mask_graphics_77 = new cjs.Graphics().p("AhoDkQg2AAgogxQgmgxAAhGIAAgpQAAhEAmgyQAogwA2AAIJgAAQA2AAAnAwQAnAyAABEIAAApQAABGgnAxQgnAxg2AAg");
	var mask_graphics_78 = new cjs.Graphics().p("Ah6DkQg2AAgogxQgmgxAAhGIAAgpQAAhEAmgyQAogwA2AAIJgAAQA2AAAnAwQAnAyAABEIAAApQAABGgnAxQgnAxg2AAg");
	var mask_graphics_79 = new cjs.Graphics().p("AiMDkQg2AAgogxQgmgxAAhGIAAgpQAAhEAmgyQAogwA2AAIJgAAQA2AAAnAwQAnAyAABEIAAApQAABGgnAxQgnAxg2AAg");
	var mask_graphics_80 = new cjs.Graphics().p("AieDkQg2AAgogxQgmgxAAhGIAAgpQAAhEAmgyQAogwA2AAIJgAAQA2AAAnAwQAnAyAABEIAAApQAABGgnAxQgnAxg2AAg");
	var mask_graphics_81 = new cjs.Graphics().p("AiwDkQg3AAgngxQgngxAAhGIAAgpQAAhEAngyQAngwA3AAIJfAAQA3AAAnAwQAnAyAABEIAAApQAABGgnAxQgnAxg3AAg");
	var mask_graphics_82 = new cjs.Graphics().p("AjCDkQg3AAgngxQgngxAAhGIAAgpQAAhEAngyQAngwA3AAIJfAAQA3AAAnAwQAnAyAABEIAAApQAABGgnAxQgnAxg3AAg");
	var mask_graphics_83 = new cjs.Graphics().p("AjUDkQg3AAgngxQgngxAAhGIAAgpQAAhEAngyQAngwA3AAIJfAAQA3AAAnAwQAnAyAABEIAAApQAABGgnAxQgnAxg3AAg");
	var mask_graphics_84 = new cjs.Graphics().p("AjmDkQg3AAgngxQgngxAAhGIAAgpQAAhEAngyQAngwA3AAIJfAAQA3AAAnAwQAnAyAABEIAAApQAABGgnAxQgnAxg3AAg");
	var mask_graphics_85 = new cjs.Graphics().p("Aj4DkQg3AAgngxQgngxAAhGIAAgpQAAhEAngyQAngwA3AAIJfAAQA3AAAnAwQAnAyAABEIAAApQAABGgnAxQgnAxg3AAg");
	var mask_graphics_86 = new cjs.Graphics().p("AkKDkQg3AAgngxQgngxAAhGIAAgpQAAhEAngyQAngwA3AAIJfAAQA3AAAnAwQAnAyAABEIAAApQAABGgnAxQgnAxg3AAg");
	var mask_graphics_87 = new cjs.Graphics().p("AkdDkQg2AAgogxQgmgxAAhGIAAgpQAAhEAmgyQAogwA2AAIJgAAQA2AAAnAwQAnAyAABEIAAApQAABGgnAxQgnAxg2AAg");
	var mask_graphics_88 = new cjs.Graphics().p("AkvDkQg2AAgogxQgmgxAAhGIAAgpQAAhEAmgyQAogwA2AAIJgAAQA2AAAnAwQAnAyAABEIAAApQAABGgnAxQgnAxg2AAg");
	var mask_graphics_89 = new cjs.Graphics().p("AkvDkQg3AAgngxQgngxAAhGIAAgpQAAhEAngyQAngwA3AAIJfAAQA3AAAnAwQAnAyAABEIAAApQAABGgnAxQgnAxg3AAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(72).to({graphics:mask_graphics_72,x:72.7,y:22.9}).wait(1).to({graphics:mask_graphics_73,x:70.9,y:22.9}).wait(1).to({graphics:mask_graphics_74,x:69.1,y:22.9}).wait(1).to({graphics:mask_graphics_75,x:67.3,y:22.9}).wait(1).to({graphics:mask_graphics_76,x:65.5,y:22.9}).wait(1).to({graphics:mask_graphics_77,x:63.7,y:22.9}).wait(1).to({graphics:mask_graphics_78,x:61.9,y:22.9}).wait(1).to({graphics:mask_graphics_79,x:60.1,y:22.9}).wait(1).to({graphics:mask_graphics_80,x:58.3,y:22.9}).wait(1).to({graphics:mask_graphics_81,x:56.4,y:22.9}).wait(1).to({graphics:mask_graphics_82,x:54.6,y:22.9}).wait(1).to({graphics:mask_graphics_83,x:52.8,y:22.9}).wait(1).to({graphics:mask_graphics_84,x:51,y:22.9}).wait(1).to({graphics:mask_graphics_85,x:49.2,y:22.9}).wait(1).to({graphics:mask_graphics_86,x:47.4,y:22.9}).wait(1).to({graphics:mask_graphics_87,x:45.6,y:22.9}).wait(1).to({graphics:mask_graphics_88,x:43.8,y:22.9}).wait(1).to({graphics:mask_graphics_89,x:40.2,y:22.9}).wait(32));

	// Layer 3
	this.instance = new lib.Symbol21("synched",0);
	this.instance.setTransform(26,35.8,1,1,0,0,0,23.9,8.2);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(72).to({startPosition:0,_off:false},0).wait(49));

	// Layer 9
	this.instance_1 = new lib.sang("synched",15);
	this.instance_1.setTransform(17,69,1,1,0,0,0,18.5,18);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(70).to({startPosition:15,_off:false},0).to({x:57,y:27.8,alpha:0.699,startPosition:17},2).to({x:-4.3,y:27,startPosition:32},17).to({_off:true},1).wait(31));

	// Layer 8
	this.instance_2 = new lib.sang("synched",0);
	this.instance_2.setTransform(17,69,1,1,0,0,0,18.5,18);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(55).to({startPosition:0,_off:false},0).to({_off:true},15).wait(51));

	// Layer 10 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_33 = new cjs.Graphics().p("AIMC8Qg2AAgngxQgngxAAhGIAAgnQAAhGAngyQAngwA2AAIJiAAQA2AAAnAwQAoAyAABGIAAAnQAABGgoAxQgnAxg2AAg");
	var mask_1_graphics_34 = new cjs.Graphics().p("AH5C8Qg2AAgogxQgmgxAAhGIAAgnQAAhGAmgyQAogwA2AAIJiAAQA2AAAnAwQAnAyAABGIAAAnQAABGgnAxQgnAxg2AAg");
	var mask_1_graphics_35 = new cjs.Graphics().p("AHmC8Qg2AAgogxQgmgxAAhGIAAgnQAAhGAmgyQAogwA2AAIJiAAQA2AAAnAwQAnAyAABGIAAAnQAABGgnAxQgnAxg2AAg");
	var mask_1_graphics_36 = new cjs.Graphics().p("AHTC8Qg2AAgogxQgmgxAAhGIAAgnQAAhGAmgyQAogwA2AAIJiAAQA2AAAnAwQAnAyAABGIAAAnQAABGgnAxQgnAxg2AAg");
	var mask_1_graphics_37 = new cjs.Graphics().p("AHAC8Qg3AAgngxQgngxAAhGIAAgnQAAhGAngyQAngwA3AAIJhAAQA3AAAnAwQAnAyAABGIAAAnQAABGgnAxQgnAxg3AAg");
	var mask_1_graphics_38 = new cjs.Graphics().p("AGtC8Qg3AAgngxQgngxAAhGIAAgnQAAhGAngyQAngwA3AAIJhAAQA3AAAnAwQAnAyAABGIAAAnQAABGgnAxQgnAxg3AAg");
	var mask_1_graphics_39 = new cjs.Graphics().p("AGaC8Qg3AAgngxQgngxAAhGIAAgnQAAhGAngyQAngwA3AAIJhAAQA3AAAnAwQAnAyAABGIAAAnQAABGgnAxQgnAxg3AAg");
	var mask_1_graphics_40 = new cjs.Graphics().p("AGGC8Qg2AAgogxQgmgxAAhGIAAgnQAAhGAmgyQAogwA2AAIJiAAQA2AAAnAwQAnAyAABGIAAAnQAABGgnAxQgnAxg2AAg");
	var mask_1_graphics_41 = new cjs.Graphics().p("AFzC8Qg2AAgogxQgmgxAAhGIAAgnQAAhGAmgyQAogwA2AAIJiAAQA2AAAnAwQAnAyAABGIAAAnQAABGgnAxQgnAxg2AAg");
	var mask_1_graphics_42 = new cjs.Graphics().p("AFgC8Qg2AAgogxQgmgxAAhGIAAgnQAAhGAmgyQAogwA2AAIJiAAQA2AAAnAwQAnAyAABGIAAAnQAABGgnAxQgnAxg2AAg");
	var mask_1_graphics_43 = new cjs.Graphics().p("AFNC8Qg3AAgngxQgngxAAhGIAAgnQAAhGAngyQAngwA3AAIJhAAQA3AAAnAwQAnAyAABGIAAAnQAABGgnAxQgnAxg3AAg");
	var mask_1_graphics_44 = new cjs.Graphics().p("AE6C8Qg3AAgngxQgngxAAhGIAAgnQAAhGAngyQAngwA3AAIJhAAQA3AAAnAwQAnAyAABGIAAAnQAABGgnAxQgnAxg3AAg");
	var mask_1_graphics_45 = new cjs.Graphics().p("AEnC8Qg3AAgngxQgngxAAhGIAAgnQAAhGAngyQAngwA3AAIJhAAQA3AAAnAwQAnAyAABGIAAAnQAABGgnAxQgnAxg3AAg");
	var mask_1_graphics_46 = new cjs.Graphics().p("AEUC8Qg3AAgngxQgngxAAhGIAAgnQAAhGAngyQAngwA3AAIJhAAQA3AAAnAwQAnAyAABGIAAAnQAABGgnAxQgnAxg3AAg");
	var mask_1_graphics_47 = new cjs.Graphics().p("AEAC8Qg2AAgogxQgmgxAAhGIAAgnQAAhGAmgyQAogwA2AAIJiAAQA2AAAnAwQAnAyAABGIAAAnQAABGgnAxQgnAxg2AAg");
	var mask_1_graphics_48 = new cjs.Graphics().p("ADtC8Qg2AAgogxQgmgxAAhGIAAgnQAAhGAmgyQAogwA2AAIJiAAQA2AAAnAwQAnAyAABGIAAAnQAABGgnAxQgnAxg2AAg");
	var mask_1_graphics_49 = new cjs.Graphics().p("ADaC8Qg2AAgogxQgmgxAAhGIAAgnQAAhGAmgyQAogwA2AAIJiAAQA2AAAnAwQAnAyAABGIAAAnQAABGgnAxQgnAxg2AAg");
	var mask_1_graphics_50 = new cjs.Graphics().p("ADHC8Qg3AAgngxQgngxAAhGIAAgnQAAhGAngyQAngwA3AAIJhAAQA3AAAnAwQAnAyAABGIAAAnQAABGgnAxQgnAxg3AAg");
	var mask_1_graphics_51 = new cjs.Graphics().p("AC0C8Qg3AAgngxQgngxAAhGIAAgnQAAhGAngyQAngwA3AAIJhAAQA3AAAnAwQAnAyAABGIAAAnQAABGgnAxQgnAxg3AAg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(33).to({graphics:mask_1_graphics_33,x:126.7,y:-12.2}).wait(1).to({graphics:mask_1_graphics_34,x:124.8,y:-12.2}).wait(1).to({graphics:mask_1_graphics_35,x:122.9,y:-12.2}).wait(1).to({graphics:mask_1_graphics_36,x:121,y:-12.2}).wait(1).to({graphics:mask_1_graphics_37,x:119,y:-12.2}).wait(1).to({graphics:mask_1_graphics_38,x:117.1,y:-12.2}).wait(1).to({graphics:mask_1_graphics_39,x:115.2,y:-12.2}).wait(1).to({graphics:mask_1_graphics_40,x:113.3,y:-12.2}).wait(1).to({graphics:mask_1_graphics_41,x:111.4,y:-12.2}).wait(1).to({graphics:mask_1_graphics_42,x:109.5,y:-12.2}).wait(1).to({graphics:mask_1_graphics_43,x:107.5,y:-12.2}).wait(1).to({graphics:mask_1_graphics_44,x:105.6,y:-12.2}).wait(1).to({graphics:mask_1_graphics_45,x:103.7,y:-12.2}).wait(1).to({graphics:mask_1_graphics_46,x:101.8,y:-12.2}).wait(1).to({graphics:mask_1_graphics_47,x:99.9,y:-12.2}).wait(1).to({graphics:mask_1_graphics_48,x:98,y:-12.2}).wait(1).to({graphics:mask_1_graphics_49,x:96.1,y:-12.2}).wait(1).to({graphics:mask_1_graphics_50,x:94.1,y:-12.2}).wait(1).to({graphics:mask_1_graphics_51,x:92.2,y:-12.2}).wait(70));

	// Layer 2
	this.instance_3 = new lib.Symbol20("synched",0);
	this.instance_3.setTransform(133.1,-3.4,1,1,0,0,0,24.1,8.3);
	this.instance_3._off = true;

	this.instance_3.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(33).to({startPosition:0,_off:false},0).wait(88));

	// Layer 7
	this.instance_4 = new lib.sang("synched",15);
	this.instance_4.setTransform(130.5,30.5,1,1,0,0,0,18.5,18);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(31).to({startPosition:15,_off:false},0).to({x:168,y:-11.3,alpha:0.699,startPosition:18},2).to({x:94,y:-12,startPosition:29},18).to({_off:true},1).wait(69));

	// Layer 6
	this.instance_5 = new lib.sang("synched",0);
	this.instance_5.setTransform(130.5,30.5,1,1,0,0,0,18.5,18);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(16).to({startPosition:0,_off:false},0).to({_off:true},15).wait(90));

	// Layer 1
	this.instance_6 = new lib.Symbol18("synched",0);
	this.instance_6.setTransform(199,325.5,1,1,0,0,0,84,71.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:86.1,y:112.5},10,cjs.Ease.get(1)).wait(111));

	// Layer 5 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("A3WgOIgEvnMAu2AAAIAAfrg");
	mask_2.setTransform(128,34.1);

	// Layer 4
	this.instance_7 = new lib.Symbol19("synched",0);
	this.instance_7.setTransform(87,-109.4,1,1,0,0,0,98,126.5);

	this.instance_7.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:215,y:126.5},10,cjs.Ease.get(1)).wait(111));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.9,-235.9,327,754);


(lib.Symbol11 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Tween2("synched",0);
	this.instance.setTransform(45.5,52.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,90.9,104.3);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 8
	this.instance = new lib.Symbol10("synched",0);
	this.instance.setTransform(211.6,10,1,1,0,0,0,83.3,10);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(81).to({startPosition:0,_off:false},0).to({x:74.6,alpha:1},9,cjs.Ease.get(1)).to({x:82.6},8,cjs.Ease.get(1)).wait(119));

	// Layer 7
	this.instance_1 = new lib.Symbol9("synched",0);
	this.instance_1.setTransform(164.4,33.7,1,1,0,0,0,35.3,6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(81).wait(4).to({startPosition:0,_off:false},0).to({x:27.4,alpha:1},9,cjs.Ease.get(1)).to({x:35.4},8,cjs.Ease.get(1)).wait(5).to({startPosition:0},0).to({scaleX:1.1,scaleY:1.1},3).to({scaleX:1,scaleY:1},3).wait(4).to({startPosition:0},0).to({scaleX:1.1,scaleY:1.1},3).to({scaleX:1,scaleY:1},3).wait(94));

	// Layer 2
	this.instance_2 = new lib.sang("synched",15);
	this.instance_2.setTransform(198.3,8.5,1,1,0,0,0,22.5,18);
	this.instance_2.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-7.5,startPosition:25},16).to({_off:true},1).wait(200));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AA6BrQgpAAgcgdQgdgdAAgqIAAgNQAAgqAdgdQAcgdApAAIcXAAQApAAAdAdQAeAdAAAqIAAANQAAAqgeAdQgdAdgpAAg");
	var mask_graphics_1 = new cjs.Graphics().p("AgDBrQgqAAgdgdQgdgdAAgqIAAgNQAAgqAdgdQAdgdAqAAIcUAAQAqAAAdAdQAdAdAAAqIAAANQAAAqgdAdQgdAdgqAAg");
	var mask_graphics_2 = new cjs.Graphics().p("AhDBrQgpAAgegdQgdgdAAgqIAAgNQAAgqAdgdQAegdApAAIcVAAQApAAAdAdQAeAdAAAqIAAANQAAAqgeAdQgdAdgpAAg");
	var mask_graphics_3 = new cjs.Graphics().p("AiCBrQgqAAgdgdQgdgdAAgqIAAgNQAAgqAdgdQAdgdAqAAIcUAAQAqAAAdAdQAdAdAAAqIAAANQAAAqgdAdQgdAdgqAAg");
	var mask_graphics_4 = new cjs.Graphics().p("AjBBrQgqAAgdgdQgdgdAAgqIAAgNQAAgqAdgdQAdgdAqAAIcUAAQAqAAAdAdQAdAdAAAqIAAANQAAAqgdAdQgdAdgqAAg");
	var mask_graphics_5 = new cjs.Graphics().p("AkBBrQgpAAgegdQgdgdAAgqIAAgNQAAgqAdgdQAegdApAAIcVAAQApAAAdAdQAeAdAAAqIAAANQAAAqgeAdQgdAdgpAAg");
	var mask_graphics_6 = new cjs.Graphics().p("AlABrQgqAAgdgdQgdgdAAgqIAAgNQAAgqAdgdQAdgdAqAAIcUAAQAqAAAdAdQAdAdAAAqIAAANQAAAqgdAdQgdAdgqAAg");
	var mask_graphics_7 = new cjs.Graphics().p("AmABrQgpAAgegdQgdgdAAgqIAAgNQAAgqAdgdQAegdApAAIcVAAQApAAAdAdQAeAdAAAqIAAANQAAAqgeAdQgdAdgpAAg");
	var mask_graphics_8 = new cjs.Graphics().p("Am/BrQgqAAgdgdQgdgdAAgqIAAgNQAAgqAdgdQAdgdAqAAIcUAAQAqAAAdAdQAdAdAAAqIAAANQAAAqgdAdQgdAdgqAAg");
	var mask_graphics_9 = new cjs.Graphics().p("An/BrQgpAAgegdQgdgdAAgqIAAgNQAAgqAdgdQAegdApAAIcVAAQApAAAdAdQAeAdAAAqIAAANQAAAqgeAdQgdAdgpAAg");
	var mask_graphics_10 = new cjs.Graphics().p("Ao+BrQgpAAgegdQgdgdAAgqIAAgNQAAgqAdgdQAegdApAAIcVAAQApAAAdAdQAeAdAAAqIAAANQAAAqgeAdQgdAdgpAAg");
	var mask_graphics_11 = new cjs.Graphics().p("Ap9BrQgqAAgdgdQgdgdAAgqIAAgNQAAgqAdgdQAdgdAqAAIcUAAQAqAAAdAdQAdAdAAAqIAAANQAAAqgdAdQgdAdgqAAg");
	var mask_graphics_12 = new cjs.Graphics().p("Aq9BrQgpAAgegdQgdgdAAgqIAAgNQAAgqAdgdQAegdApAAIcVAAQApAAAdAdQAeAdAAAqIAAANQAAAqgeAdQgdAdgpAAg");
	var mask_graphics_13 = new cjs.Graphics().p("Ar8BrQgqAAgdgdQgdgdAAgqIAAgNQAAgqAdgdQAdgdAqAAIcUAAQAqAAAdAdQAdAdAAAqIAAANQAAAqgdAdQgdAdgqAAg");
	var mask_graphics_14 = new cjs.Graphics().p("As8BrQgpAAgegdQgdgdAAgqIAAgNQAAgqAdgdQAegdApAAIcVAAQApAAAdAdQAeAdAAAqIAAANQAAAqgeAdQgdAdgpAAg");
	var mask_graphics_15 = new cjs.Graphics().p("At7BrQgqAAgdgdQgdgdAAgqIAAgNQAAgqAdgdQAdgdAqAAIcUAAQAqAAAdAdQAdAdAAAqIAAANQAAAqgdAdQgdAdgqAAg");
	var mask_graphics_16 = new cjs.Graphics().p("AuKBrQgpAAgegdQgdgdAAgqIAAgNQAAgqAdgdQAegdApAAIcVAAQApAAAdAdQAeAdAAAqIAAANQAAAqgeAdQgdAdgpAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:197.3,y:8}).wait(1).to({graphics:mask_graphics_1,x:191,y:8}).wait(1).to({graphics:mask_graphics_2,x:184.6,y:8}).wait(1).to({graphics:mask_graphics_3,x:178.3,y:8}).wait(1).to({graphics:mask_graphics_4,x:172,y:8}).wait(1).to({graphics:mask_graphics_5,x:165.6,y:8}).wait(1).to({graphics:mask_graphics_6,x:159.3,y:8}).wait(1).to({graphics:mask_graphics_7,x:152.9,y:8}).wait(1).to({graphics:mask_graphics_8,x:146.6,y:8}).wait(1).to({graphics:mask_graphics_9,x:140.2,y:8}).wait(1).to({graphics:mask_graphics_10,x:133.9,y:8}).wait(1).to({graphics:mask_graphics_11,x:127.6,y:8}).wait(1).to({graphics:mask_graphics_12,x:121.2,y:8}).wait(1).to({graphics:mask_graphics_13,x:114.9,y:8}).wait(1).to({graphics:mask_graphics_14,x:108.5,y:8}).wait(1).to({graphics:mask_graphics_15,x:102.2,y:8}).wait(1).to({graphics:mask_graphics_16,x:91,y:8}).wait(68).to({graphics:null,x:0,y:0}).wait(133));

	// Symbol 10
	this.instance_3 = new lib.Symbol39("synched",0);
	this.instance_3.setTransform(87.9,9.3,1,1,0,0,0,87.5,9.8);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(74).to({startPosition:0},0).to({x:-99.9,alpha:0},6,cjs.Ease.get(1)).to({_off:true},4).wait(133));

	// Layer 3
	this.instance_4 = new lib.sang("synched",25);
	this.instance_4.setTransform(184.2,31.5,1,1,0,0,0,22.5,18);
	this.instance_4.alpha = 0.5;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(22).to({startPosition:25,_off:false},0).to({x:1.5,y:32.6,startPosition:34},17).to({_off:true},1).wait(177));

	// Layer 5 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_22 = new cjs.Graphics().p("ABXDYQglAAgbgdQgYgdAAgqIAAgPQAAgpAYgeQAbgdAlAAIZeAAQAlAAAaAdQAaAeABApIAAAPQgBAqgaAdQgaAdglAAg");
	var mask_1_graphics_23 = new cjs.Graphics().p("AAVDYQgkAAgbgdQgagdAAgqIAAgPQAAgpAageQAbgdAkAAIZ2AAQAmAAAaAdQAbAeAAApIAAAPQAAAqgbAdQgaAdgmAAg");
	var mask_1_graphics_24 = new cjs.Graphics().p("AgrDYQgnAAgbgdQgbgdAAgqIAAgPQAAgpAbgeQAbgdAnAAIaNAAQAmAAAbAdQAbAeAAApIAAAPQAAAqgbAdQgbAdgmAAg");
	var mask_1_graphics_25 = new cjs.Graphics().p("AhtDYQgnAAgcgdQgbgdAAgqIAAgPQAAgpAbgeQAcgdAnAAIalAAQAnAAAbAdQAcAeAAApIAAAPQAAAqgcAdQgbAdgnAAg");
	var mask_1_graphics_26 = new cjs.Graphics().p("AiwDYQgnAAgcgdQgcgdAAgqIAAgPQAAgpAcgeQAcgdAnAAIa+AAQAoAAAcAdQAcAeAAApIAAAPQAAAqgcAdQgcAdgoAAg");
	var mask_1_graphics_27 = new cjs.Graphics().p("AjyDYQgoAAgcgdQgcgdAAgqIAAgPQAAgpAcgeQAcgdAoAAIbXAAQAoAAAcAdQAcAeAAApIAAAPQAAAqgcAdQgcAdgoAAg");
	var mask_1_graphics_28 = new cjs.Graphics().p("Ak0DYQgoAAgdgdQgdgdAAgqIAAgPQAAgpAdgeQAdgdAoAAIbvAAQApAAAcAdQAdAeAAApIAAAPQAAAqgdAdQgcAdgpAAg");
	var mask_1_graphics_29 = new cjs.Graphics().p("Al2DYQgpAAgdgdQgdgdAAgqIAAgPQAAgpAdgeQAdgdApAAIcIAAQApAAAdAdQAdAeAAApIAAAPQAAAqgdAdQgdAdgpAAg");
	var mask_1_graphics_30 = new cjs.Graphics().p("Am4DYQgqAAgdgdQgegdAAgqIAAgPQAAgpAegeQAdgdAqAAIcgAAQAqAAAdAdQAeAeAAApIAAAPQAAAqgeAdQgdAdgqAAg");
	var mask_1_graphics_31 = new cjs.Graphics().p("An6DYQgqAAgegdQgegdAAgqIAAgPQAAgpAegeQAegdAqAAIc5AAQAqAAAeAdQAeAeAAApIAAAPQAAAqgeAdQgeAdgqAAg");
	var mask_1_graphics_32 = new cjs.Graphics().p("Ao8DYQgrAAgegdQgegdAAgqIAAgPQAAgpAegeQAegdArAAIdRAAQArAAAeAdQAeAeAAApIAAAPQAAAqgeAdQgeAdgrAAg");
	var mask_1_graphics_33 = new cjs.Graphics().p("Ap+DYQgsAAgfgdQgegdAAgqIAAgPQAAgpAegeQAfgdAsAAIdqAAQArAAAeAdQAfAeAAApIAAAPQAAAqgfAdQgeAdgrAAg");
	var mask_1_graphics_34 = new cjs.Graphics().p("ArADYQgsAAgggdQgegdAAgqIAAgPQAAgpAegeQAggdAsAAIeCAAQAsAAAfAdQAfAeAAApIAAAPQAAAqgfAdQgfAdgsAAg");
	var mask_1_graphics_35 = new cjs.Graphics().p("AsCDYQgtAAgggdQgfgdAAgqIAAgPQAAgpAfgeQAggdAtAAIeaAAQAtAAAfAdQAgAeAAApIAAAPQAAAqggAdQgfAdgtAAg");
	var mask_1_graphics_36 = new cjs.Graphics().p("AtEDYQguAAgggdQgfgdAAgqIAAgPQAAgpAfgeQAggdAuAAIezAAQAtAAAgAdQAgAeAAApIAAAPQAAAqggAdQggAdgtAAg");
	var mask_1_graphics_37 = new cjs.Graphics().p("AuHDYQgtAAghgdQgggdAAgqIAAgPQAAgpAggeQAhgdAtAAIfMAAQAuAAAgAdQAgAeAAApIAAAPQAAAqggAdQggAdguAAg");
	var mask_1_graphics_38 = new cjs.Graphics().p("AvJDYQguAAghgdQgggdAAgqIAAgPQAAgpAggeQAhgdAuAAIflAAQAuAAAgAdQAhAeAAApIAAAPQAAAqghAdQggAdguAAg");
	var mask_1_graphics_39 = new cjs.Graphics().p("Av+DYQgvAAghgdQghgdAAgqIAAgPQAAgpAhgeQAhgdAvAAIf9AAQAvAAAhAdQAhAeAAApIAAAPQAAAqghAdQghAdgvAAg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(22).to({graphics:mask_1_graphics_22,x:180.7,y:21.7}).wait(1).to({graphics:mask_1_graphics_23,x:176.7,y:21.7}).wait(1).to({graphics:mask_1_graphics_24,x:172.7,y:21.7}).wait(1).to({graphics:mask_1_graphics_25,x:168.6,y:21.7}).wait(1).to({graphics:mask_1_graphics_26,x:164.6,y:21.7}).wait(1).to({graphics:mask_1_graphics_27,x:160.6,y:21.7}).wait(1).to({graphics:mask_1_graphics_28,x:156.6,y:21.7}).wait(1).to({graphics:mask_1_graphics_29,x:152.6,y:21.7}).wait(1).to({graphics:mask_1_graphics_30,x:148.5,y:21.7}).wait(1).to({graphics:mask_1_graphics_31,x:144.5,y:21.7}).wait(1).to({graphics:mask_1_graphics_32,x:140.5,y:21.7}).wait(1).to({graphics:mask_1_graphics_33,x:136.5,y:21.7}).wait(1).to({graphics:mask_1_graphics_34,x:132.5,y:21.7}).wait(1).to({graphics:mask_1_graphics_35,x:128.4,y:21.7}).wait(1).to({graphics:mask_1_graphics_36,x:124.4,y:21.7}).wait(1).to({graphics:mask_1_graphics_37,x:120.4,y:21.7}).wait(1).to({graphics:mask_1_graphics_38,x:116.4,y:21.7}).wait(1).to({graphics:mask_1_graphics_39,x:111.1,y:21.7}).wait(45).to({graphics:null,x:0,y:0}).wait(133));

	// Symbol 11
	this.instance_5 = new lib.Symbol8("synched",0);
	this.instance_5.setTransform(107.2,34.1,1,1,0,0,0,107.6,7.9);
	this.instance_5._off = true;

	this.instance_5.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(22).to({startPosition:0,_off:false},0).wait(54).to({startPosition:0},0).to({x:-80.6,alpha:0},6,cjs.Ease.get(1)).to({_off:true},2).wait(133));

	// Layer 6
	this.instance_6 = new lib.Symbol7("synched",0);
	this.instance_6.setTransform(99.9,33.6,1,1,0,0,0,36.8,6);
	this.instance_6._off = true;

	this.instance_6.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(22).to({startPosition:0,_off:false},0).wait(19).to({startPosition:0},0).to({scaleX:1.1,scaleY:1.1},3).to({scaleX:1,scaleY:1},3).wait(3).to({startPosition:0},0).to({scaleX:1.1,scaleY:1.1},3).to({scaleX:1,scaleY:1},3).wait(20).to({startPosition:0},0).to({x:-87.9,alpha:0},6,cjs.Ease.get(1)).to({_off:true},2).wait(133));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.4,-9.4,212.5,36);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 16
	this.instance = new lib.Symbol16("synched",0);
	this.instance.setTransform(102,52.4,1,1,0,0,0,40.2,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:6.4},9,cjs.Ease.get(1)).to({_off:true},5).wait(4).to({startPosition:0,_off:false},0).to({_off:true},4).wait(5).to({startPosition:0,_off:false},0).wait(644));

	// Symbol 15
	this.instance_1 = new lib.Symbol15("synched",0);
	this.instance_1.setTransform(27.9,55.4,1,1,0,0,0,27.9,5.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:9.4},9,cjs.Ease.get(1)).wait(662));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,46,142.2,14.7);


(lib.Symbol1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol38("synched",0);
	this.instance.setTransform(449,287.6,1,1,0,0,0,150,72.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:150,y:178.6},5).wait(873));

	// Layer 1
	this.instance_1 = new lib.Symbol37("synched",0);
	this.instance_1.setTransform(-149.9,-1.5,1,1,0,0,0,150,107.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({startPosition:0,_off:false},0).to({x:150,y:107.4},5).wait(868));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(299,210.5,300,148.7);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol38copy("synched",0);
	this.instance.setTransform(449,287.6,1,1,0,0,0,150,72.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:150,y:178.6},5).wait(873));

	// Layer 1
	this.instance_1 = new lib.Symbol37copy("synched",0);
	this.instance_1.setTransform(-149.9,-1.5,1,1,0,0,0,150,107.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({startPosition:0,_off:false},0).to({x:150,y:107.4},5).wait(868));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(299,193.5,300,165.7);


(lib.sprite62OverDown = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.sprite61();
	this.instance.setTransform(0.3,-0.2,0.999,0.999,-154.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-514.2},11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.8,-8.3,19.9,22.1);


(lib.button63 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AjWDDIAAmFIGsAAIAAGFg");
	this.shape.setTransform(13.4,13.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(4));

	// Layer 1
	this.instance = new lib.shape58Up("synched",0);

	this.instance_1 = new lib.sprite62OverDown();
	this.instance_1.setTransform(10.9,9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.1,-6,43,39);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_11 = new cjs.Graphics().p("AIEBqIAAgBIwGAAIAAABIgGAAIAAgBIgBAAIAAgGIABAAIAAjGIgBAAIAAgGIQTAAIAADTgAoCBjIQGAAIAAjGIwGAAgAAPAbQgJgIAAgOIAAgvIANAAIAAArIACAMQABADACACQACADADAAQAEACAEAAQAGAAADgCQADAAADgDQACgCAAgDIACgMIAAgrIAOAAIAAAvQAAAOgJAIQgIAIgQAAQgPAAgHgIgAGIAhIAAg6IgBAAIgVA6IgLAAIgWg6IAAA6IgNAAIAAhLIATAAIAWA6IAVg6IATAAIAABLgAEBAhIAAhLIA4AAIAAALIgrAAIAAAUIAnAAIAAALIgnAAIAAAVIArAAIAAAMgADjAhIAAghIgjAAIAAAhIgNAAIAAhLIANAAIAAAeIAjAAIAAgeIAOAAIAABLgACEAhIAAhAIgYAAIAAgLIA+AAIAAALIgZAAIAABAgAg7AhIAAhLIA3AAIAAALIgpAAIAAAUIAmAAIAAALIgmAAIAAAVIAqAAIAAAMgAhZAhIAAhLIANAAIAABLgAh3AhIAAghIgjAAIAAAhIgOAAIAAhLIAOAAIAAAeIAjAAIAAgeIANAAIAABLgAjiAhIAAg6IAAAAIgWA6IgLAAIgVg6IAAAAIAAA6IgOAAIAAhLIATAAIAWA6IAVg6IASAAIAABLgAlDAhIAAhLIANAAIAABLgAlyAhIAAhAIgYAAIAAgLIA+AAIAAALIgZAAIAABAgAEkgyIgHgKIgIAKIgKAAIAMgPIALAAIANAPgAk/gyIgPgPIAOAAIAKAPgAgXgyIgHgKIgHAKIgLAAIAMgQIAMAAIALAQgAgKg1IAAgEQAGgBAAgEQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBAAAAAAIgEgBIgEAAIAAgFIAFgBQAEAAAEADQABABAAAFQAAAGgGACIAAACg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(11).to({graphics:mask_graphics_11,x:-142.2,y:123.6}).wait(72));

	// Layer 6
	this.instance = new lib.Symbol11("synched",0);
	this.instance.setTransform(-227.9,130.8,1,1,0,0,0,45.5,52.1);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({startPosition:0,_off:false},0).to({x:-66.8},13).wait(59));

	// Layer 3
	this.instance_1 = new lib.Symbol34("synched",0);
	this.instance_1.setTransform(-142.2,166.2,1,1,0,0,0,40.1,5.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:122.7},8,cjs.Ease.get(1)).wait(75));

	// Layer 2
	this.instance_2 = new lib.Symbol33("synched",0);
	this.instance_2.setTransform(-142.4,167.1,1,1,0,0,0,52,10.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:123.6},8,cjs.Ease.get(1)).wait(75));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-194.4,156.5,104,21.2);


(lib.main = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 10
	this.instance = new lib.Symbol32("synched",0);
	this.instance.setTransform(354.4,115,1,1,0,0,0,40.3,15.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(325).to({startPosition:0,_off:false},0).wait(39));

	// Layer 5
	this.instance_1 = new lib.Symbol23("synched",0);
	this.instance_1.setTransform(129.3,120.5,1,1,0,0,0,196.8,66.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(275).to({startPosition:0,_off:false},0).wait(89));

	// Layer 4
	this.instance_2 = new lib.Symbol17("synched",0);
	this.instance_2.setTransform(178.5,193,1,1,0,0,0,156.5,126.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(175).to({startPosition:0,_off:false},0).to({_off:true},100).wait(89));

	// Symbol 2
	this.instance_3 = new lib.Symbol2("synched",0);
	this.instance_3.setTransform(87.5,227.6,1,1,0,0,0,71.1,7.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(76).to({startPosition:0,_off:false},0).wait(94).to({startPosition:40},0).to({y:280.6,alpha:0,startPosition:45},4).to({_off:true},1).wait(189));

	// Symbol 4
	this.instance_4 = new lib.Symbol4("synched",0);
	this.instance_4.setTransform(104.2,68.2,1,1,0,0,0,87.9,21.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(36).to({startPosition:0,_off:false},0).wait(134).to({startPosition:106},0).to({x:148.2,alpha:0,startPosition:111},4).to({_off:true},1).wait(189));

	// Layer 3
	this.instance_5 = new lib.Symbol6("synched",0);
	this.instance_5.setTransform(150,154,0.3,0.3,0,0,0,112.5,52.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(21).to({startPosition:0,_off:false},0).to({scaleX:1.2,scaleY:1.2,y:155},5,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},7,cjs.Ease.get(1)).wait(137).to({startPosition:0},0).to({scaleX:0.5,scaleY:0.5,alpha:0},4).to({_off:true},1).wait(189));

	// Symbol 3
	this.instance_6 = new lib.Symbol3("synched",0);
	this.instance_6.setTransform(266.2,272.9,1,1,0,0,0,24.9,12);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(76).to({startPosition:0,_off:false},0).to({x:267.7,y:226.4},8,cjs.Ease.get(1)).wait(280));

	// Symbol 5
	this.instance_7 = new lib.Symbol5("synched",0);
	this.instance_7.setTransform(145.8,38.9,2,2,0,0,0,90,7.9);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(21).to({startPosition:0,_off:false},0).to({regY:8,scaleX:1,scaleY:1,x:105.8,y:21},8,cjs.Ease.get(1)).wait(335));

	// Layer 11
	this.instance_8 = new lib.Symbol1("synched",275);
	this.instance_8.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(276).to({startPosition:275,_off:false},0).wait(88));

	// Layer 1
	this.instance_9 = new lib.Symbol1copy("synched",0);
	this.instance_9.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({startPosition:0,_off:false},0).to({_off:true},275).wait(88));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;