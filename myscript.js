	$('.list-vertical-bordered-items').append('<li class="span3 gutter-horiz-in"><strong class="hdr">Illustration:</strong>Matt Twombly</li>');

	document.getElementById('blink').addEventListener('ended',myHandler,false);
	function myHandler(e) {
	    console.log('ended');
	    setTimeout(function(){
	        document.getElementById('blink').play();
	    }, 2000);
	}

	$(window).on("load", function(){
	$('.loading-overlay').fadeOut();
	var panelContainerResize = function() {
	$('.panel-container').each(function(){
		var layer = $(this).find('.layer');
		var layerHeight = layer.height();
		$(this).css('height', layerHeight);
	});
	}

	panelContainerResize();
	$(window).resize(function() {
	panelContainerResize();
	});

	//panel1 scene1 animation
	var SMController1 = new ScrollMagic.Controller();

	var panel1Scene1TLM = new TimelineMax({ onComplete: panelRightEase });

	var p1S1Layer4Images = $('#panel1_scene1-layer4 picture source, #panel1_scene1-layer4 img');

	var p1S1Layer3Images = $('#panel1_scene1-layer3 picture source, #panel1_scene1-layer3 img');

	var p1S1Layer2Images = $('#panel1_scene1-layer2 picture source, #panel1_scene1-layer2 img');

	var p1S1Layer1Images = $('#panel1_scene1-layer1 picture source, #panel1_scene1-layer1 img');

	panel1Scene1TLM 
		.fromTo(p1S1Layer4Images, 4, {x:0, y:0}, {x: 170, y: 0}, "+=1")
		.add("endp1s1")
		.to(p1S1Layer3Images, 5, {scaleX: 1.04, scaleY: 1.03}, "endp1s1-=4")
		.fromTo(p1S1Layer2Images, 4, {x:-94, y:0}, {x:0, y:0}, "endp1s1-=4")
		.fromTo(p1S1Layer1Images, 4, {x:-30, y:0}, {x:0, y:0}, "endp1s1-=4")

	var scene1 = new ScrollMagic.Scene({
		triggerElement: "#trigger1",
		duration: 2000,
		triggerHook: 0.1
	})

	.setTween(panel1Scene1TLM)
	.setPin("#panel1_scene1")
	.addTo(SMController1)

	function panelRightEase() {
		console.log("panelRightEase()");
	}

	//panel 1 scene4 animation 
	var SMController2 = new ScrollMagic.Controller();

	var panel1Scene4TLM = new TimelineMax({ onComplete: panelZoom});

	var p1S4Layer1Images = $('#panel1_scene4-layer1 picture source, #panel1_scene4-layer1 img');

	var p1S4Layer0Images = $('#panel1_scene4-layer0 picture source, #panel1_scene4-layer0 img');

	panel1Scene4TLM
		.fromTo(p1S4Layer1Images, 1, {scaleX: 1.2, scaleY: 1.2}, {scaleX: 1, scaleY: 1}, "+=0")
		.add("end")
		.fromTo(p1S4Layer0Images, 1.7, {scaleX: 1.19, scaleY: 1.19 }, {scaleX: 1, scaleY: 1}, "end-=1.5")

	var scene2 = new ScrollMagic.Scene({
		triggerElement: "#trigger2",
		duration: 2000,
		triggerHook: 0.1
	})

	.setTween(panel1Scene4TLM)
	.setPin("#panel1_scene4")
	.addTo(SMController2)

	function panelZoom() {
		console.log("panelZoom()");
	}

	//panel 1 scene5 animation
	var SMController3 = new ScrollMagic.Controller();

	var panel1Scene5TLM = new TimelineMax ({ onComplete: panelZoomRight });

	var p1S5Layer2Images = $('#panel1_scene5-layer2 picture source, #panel1_scene5-layer2 img');

	var p1S5Layer1Images = $('#panel1_scene5-layer1 picture source, #panel1_scene5-layer1 img');

	panel1Scene5TLM
	.to(p1S5Layer2Images, 1, {scaleX: 1.1, scaleY: 1.05}, "+=0")
		.add("endp1s5")
		.to(p1S5Layer1Images, 1, {scaleX: 1.05, scaleY: 1.02}, "end-=1")

	var scene3 = new ScrollMagic.Scene({
		triggerElement: "#trigger3",
		duration: 2000,
		triggerHook: 0.1
	})

	.setTween(panel1Scene5TLM)
	.setPin("#panel1_scene5")
	.addTo(SMController3)

	function panelZoomRight() {
		console.log("panelZoomRight()");
	}

	//panel2 scene1 animation
	var SMController4 = new ScrollMagic.Controller();

	var panel2Scene1TLM = new TimelineMax ({ onComplete: panelPanRight });

	var p2S1Layer3Images = $('#panel2_scene1-layer3 picture source, #panel2_scene1-layer3 img');

	var p2S1Layer2Images = $('#panel2_scene1-layer2 picture source, #panel2_scene1-layer2 img');

	var p2S1Layer1Images = $('#panel2_scene1-layer1 picture source, #panel2_scene1-layer1 img');

	var p2S1Layer0Images = $('#panel2_scene1-layer0 picture source, #panel2_scene1-layer0 img');

	panel2Scene1TLM
		.to(p2S1Layer3Images, 4, {scaleX:1.3, scaleY:1.3}, "+=0")
		.add("end")
		.to(p2S1Layer2Images, 4, {scaleX:1.25, scaleY:1.25}, "end-=4")
		.to(p2S1Layer1Images, 4, {scaleX:1.2, scaleY:1.2}, "end-=4")
		.to(p2S1Layer0Images, 4, {scaleX:1.2, scaleY:1.2}, "end-=3")

	var scene4 = new ScrollMagic.Scene({
		triggerElement: "#trigger4",
		duration: 2000,
		triggerHook: 0.1
	})

	.setTween(panel2Scene1TLM)
	.setPin("#panel2_scene1")
	.addTo(SMController4)

	function panelPanRight() {
		console.log("panelPanRight()");
	}

	//panel2 scene 4 animation
	var SMController5 = new ScrollMagic.Controller();

	var panel2Scene4TLM = new TimelineMax ({ onComplete: dart });

	var p2S4Layer2Images = $('#panel2_scene4-layer2 picture source, #panel2_scene4-layer2 img');

	var p2S4Layer1Images = $('#panel2_scene4-layer1 picture source, #panel2_scene4-layer1 img');

	panel2Scene4TLM
		.fromTo(p2S4Layer2Images, 3, {x:-100, y:0}, {x:0, y:0}, "+=0")
		.add("end")
		.fromTo(p2S4Layer1Images, 3, {x:50, y:0}, {x:0, y:0}, "end-=3")

	var scene5 = new ScrollMagic.Scene({
		triggerElement: "#trigger5",
		duration: 2000,
		triggerHook: 0.1
	})

	.setTween(panel2Scene4TLM)
	.setPin("#panel2_scene4")
	.addTo(SMController5)

	function dart() {
		console.log("dart()");
	}

	//panel2 scene7 animation
	var SMController6 = new ScrollMagic.Controller();

	var panel2Scene7TLM = new TimelineMax ({ onComplete: tigerZoomOut});

	var p2S7Layer1Images = $('#panel2_scene7-layer1 picture source, #panel2_scene7-layer1 img');

	var p2S7Layer2Images = $('#panel2_scene7-layer2 picture source, #panel2_scene7-layer2 img');

	var p2S7Layer3Images = $('#panel2_scene7-layer3 picture source, #panel2_scene7-layer3 img');

	panel2Scene7TLM 
		.fromTo(p2S7Layer1Images, 3, {scaleX:1.16, scaleY:1.16}, {scaleX:1, scaleY:1}, "+=0")
		.add("end")
		.fromTo(p2S7Layer2Images, 3, {scaleX:1.2, scaleY:1.2}, {scaleX:1, scaleY:1}, "end-=3")
		.fromTo(p2S7Layer3Images, 3, {scaleX:1.21, scaleY:1.21}, {scaleX:1, scaleY:1}, "end-=3")

	var scene6 = new ScrollMagic.Scene({
		triggerElement: "#trigger6",
		duration: 2500,
		triggerHook: 0
	})

	.setTween(panel2Scene7TLM)
	.setPin("#panel2_scene7")
	.addTo(SMController6)

	function tigerZoomOut() {
		console.log("tigerZoomOut");
	}

	//panel3 scene2 animation 
	var SMController7 = new ScrollMagic.Controller();

	var panel3Scene2TLM = new TimelineMax ({ onComplete: tigerRun });

	var p3S2Layer2Images = $('#panel3_scene2-layer2 picture source, #panel3_scene2-layer2 img');

	var p3S2Layer3Images = $('#panel3_scene2-layer3 picture source, #panel3_scene2-layer3 img');

	var p3S2Layer4Images = $('#panel3_scene2-layer4 picture source, #panel3_scene2-layer4 img');

	panel3Scene2TLM
		.fromTo(p3S2Layer2Images, 3, {scaleX:1.15, scaleY:1.15}, {scaleX:1, scaleY:1}, "+=0")
		.add("end")
		.fromTo(p3S2Layer3Images, 3, {scaleX:1, scaleY:1}, {scaleX:1.05, scaleY: 1.05}, "-=3")
		.fromTo(p3S2Layer4Images, 3, {scaleX:1, scaleY:1}, {scaleX:1.05, scaleY: 1.05}, "-=3")

	var scene7 = new ScrollMagic.Scene({
		triggerElement: "#trigger7",
		duration: 2000,
		triggerHook: 0
	})

	.setTween(panel3Scene2TLM)
	.setPin("#panel3_scene2")
	.addTo(SMController7)

	function tigerRun() {
		console.log("tigerRun");
	}

	//panel3 scene4 animation 
	var SMController8 = new ScrollMagic.Controller();

	var panel3Scene4TLM = new TimelineMax ({ onComplete: panOut});

	var p3S4Layer0Images = $('#panel3_scene4-layer0 picture source, #panel3_scene4-layer0 img');

	var p3S4Layer1Images = $('#panel3_scene4-layer1 picture source, #panel3_scene4-layer1 img');

	panel3Scene4TLM
		.fromTo(p3S4Layer0Images, 3, {scaleX:1.15, scaleY:1.15}, {scaleX:1, scaleY:1}, "+=0")
		.add("end")
		.fromTo(p3S4Layer1Images, 3, {scaleX:1.3, scaleY: 1.3}, {scaleX:1, scaleY:1}, "end-=2")

	var scene8 = new ScrollMagic.Scene({
		triggerElement: "#trigger8",
		duration: 2000,
		triggerHook:0.1
	})

	.setTween(panel3Scene4TLM)
	.setPin("#panel3_scene4")
	.addTo(SMController8)

	function panOut() {
		console.log("panOut");
	}

	//panel3 scene6 animation
	var SMController9 = new ScrollMagic.Controller();

	var panel3Scene6TLM = new TimelineMax ({ onComplete: valleyZoom });

	var p3S6Layer2Images = $('#panel3_scene6-layer2 picture source, #panel3_scene6-layer2 img');

	var p3S6Layer3Images = $('#panel3_scene6-layer3 picture source, #panel3_scene6-layer3 img');

	var p3S6Layer4Images = $('#panel3_scene6-layer4 picture source, #panel3_scene6-layer4 img');

	panel3Scene6TLM
		.fromTo(p3S6Layer2Images, 3, {scaleX:1.15, scaleY:1.15}, {scaleX:1, scaleY:1}, "+=0")
		.add("end")
		.fromTo(p3S6Layer3Images, 3, {scaleX:1.2, scaleY:1.2}, {scaleX:1, scaleY:1}, "end-=3")
		.fromTo(p3S6Layer4Images, 3, {scaleX:1.3, scaleY:1.3}, {scaleX:1.1, scaleY:1.1}, "end-=3")

	var scene9 = new ScrollMagic.Scene({
		triggerElement: "#trigger9",
		duration: 2000,
		triggerHook:0
	})

	.setTween(panel3Scene6TLM)
	.setPin("#panel3_scene6")
	.addTo(SMController8)

	function valleyZoom() {
		console.log("valleyZoom");
	}

	//panel4 scene2 animation 
	var SMController10 = new ScrollMagic.Controller();

	var panel4Scene2TLM = new TimelineMax ({ onComplete: tigerFight });

	var p4S2Layer1Images = $('#panel4_scene2-layer1 picture source, #panel4_scene2-layer1 img');

	var p4S2Layer2Images = $('#panel4_scene2-layer2 picture source, #panel4_scene2-layer2 img');

	var p4S2Layer3Images = $('#panel4_scene2-layer3 picture source, #panel4_scene2-layer3 img');

	var p4S2Layer4Images = $('#panel4_scene2-layer4 picture source, #panel4_scene2-layer4 img');

	panel4Scene2TLM
		.to(p4S2Layer1Images, 3, {scaleX:1.1, scaleY:1.1}, "+=0")
		.add("end")
		.fromTo(p4S2Layer2Images, 3, {x:50, y:0}, {x:0, y:0}, "end-=3")
		.fromTo(p4S2Layer3Images, 3, {x:60, y:0}, {x:0, y:0}, "end-=3")
		.fromTo(p4S2Layer4Images, 3, {x:100, y:0}, {x:-10, y:0}, "end-=3")

	var scene10 = new ScrollMagic.Scene({
		triggerElement: "#trigger11",
		duration: 2000,
		triggerHook:0
	})

	.setTween(panel4Scene2TLM)
	.setPin("#panel4_scene2")
	.addTo(SMController10)

	function tigerFight() {
		console.log("tigerFight");
	}

	//panel4 scene4 animation
	var SMController11 = new ScrollMagic.Controller();

	var panel4Scene4TLM = new TimelineMax ({ onComplete: handsZoom });

	var p4S4Layer0Images = $('#panel4_scene4-layer0 picture source, #panel4_scene4-layer0 img');

	var p4S4Layer1Images = $('#panel4_scene4-layer1 picture source, #panel4_scene4-layer1 img');

	panel4Scene4TLM
		.to(p4S4Layer0Images, 3, {scaleX: 1.1, scaleY: 1.1}, "+=0")
		.add("end")
		.to(p4S4Layer1Images, 3, {scaleX: 1.13, scaleY: 1.13}, "-=3")

	var scene11 = new ScrollMagic.Scene({
		triggerElement: "#trigger12",
		duration: 2000,
		triggerHook:0.1
	})

	.setTween(panel4Scene4TLM)
	.setPin("#panel4_scene4")
	.addTo(SMController11)

	function handsZoom() {
		console.log("handsZoom");
	}

	//panel4 scene6 animation
	var SMController12 = new ScrollMagic.Controller();

	var panel4Scene6TLM = new TimelineMax ({ onComplete: treeZoomOut });

	var p4S6Layer1Images = $('#panel4_scene6-layer1 picture source, #panel4_scene6-layer1 img');

	var p4S6Layer2Images = $('#panel4_scene6-layer2 picture source, #panel4_scene6-layer2 img');

	var p4S6Layer3Images = $('#panel4_scene6-layer3 picture source, #panel4_scene6-layer3 img');

	panel4Scene6TLM
		.fromTo(p4S6Layer1Images, 3, {scaleX: 1.2, scaleY: 1.2}, {scaleX: 1.01, scaleY: 1.01}, "+=0")
		.add("end")
		.fromTo(p4S6Layer2Images, 3, {scaleX: 1.3, scaleY: 1.3}, {scaleX: 1.03, scaleY: 1.03}, "end-=3")
		.fromTo(p4S6Layer3Images, 3, {scaleX: 1.35, scaleY: 1.35}, {scaleX: 1.03, scaleY:1.03}, "end-=3")

	var scene11 = new ScrollMagic.Scene({
		triggerElement: "#trigger13",
		duration: 2500,
		triggerHook:-0.1
	})

	.setTween(panel4Scene6TLM)
	.setPin("#panel4_scene6")
	.addTo(SMController11)

	function treeZoomOut() {
		console.log("treeZoomOut");
	}

	var canvas = document.querySelector('.snow');
	        var w = canvas.width = window.innerWidth;
	        var h = canvas.height = window.innerHeight;
	        var ctx = canvas.getContext('2d');



	        function Snowflake(x, y, s) {

	            this.x = x;
	            this.y = y;
	            this.s = s;


	            this.snowFall = function () {


	                ctx.beginPath();
	                ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
	                ctx.arc(this.x, this.y += this.s, this.s, 0, Math.PI * 2);
	                ctx.fill();
	                if (this.y > w - this.s ) {
	                    this.y = Math.floor(Math.random() * -w);
	                }
	            }
	        };

	        var flakes = [];
	        for (var i = 0; i < 700; i++) {
	            var x = Math.floor(Math.random() * w);
	            var y = Math.floor(Math.random() * -w);
	            var s = Math.floor(Math.random() * 4);
	            flakes[i] = new Snowflake(x, y, s);
	        };

	        function update() {
	            requestAnimationFrame(update);
	            ctx.clearRect(0, 0, w, h);
	            for (var i = 0; i < flakes.length; i++) {
	                flakes[i].snowFall();
	            }
	        };

	        update();
	});
	
