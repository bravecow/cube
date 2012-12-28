document.addEventListener('DOMContentLoaded', function() {
	var cube = document.getElementById('cube');
	var dx = dy = 0;

	document.addEventListener('mousemove', function(e){
		var cx = window.innerWidth / 2;
		var cy = window.innerHeight / 2;
		dx = (e.clientX - cx).normalize(cx);
		dy = (cy - e.clientY).normalize(cy);
	});

	var timer = setInterval(function(){
		cube.style[getSupProp().transform] = "rotateY("+dx+"deg) rotateX("+dy+"deg)";
	},100);
});

function getSupProp(){
	var el = document.createElement('div');
	var transformProps = 'transform WebkitTransform MozTransform msTransform'.split(' ');
	function support(props) {
		for(var i = 0; i < props.length; i++) {
			if(typeof el.style[props[i]] !== "undefined") {
				return props[i];
			}
		}
	}
	return {
		transform: support(transformProps)
	}
}

Number.prototype.normalize = function(num) {
	return this*180/num;
};