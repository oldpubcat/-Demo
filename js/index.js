(function(){
	var lastX;
	var lastY;
	var lastZ;
	var maxRang = 80;
	var minRang = 10;
	var isShake = false;
	var box = document.querySelector('#div');
	window.addEventListener('devicemotion', function(e) {
		var motion = e.accelerationIncludingGravity;
		var x = Math.round(motion.x);
		var y = Math.round(motion.y);
		var z = Math.round(motion.z);
		if(typeof lastX == "undefined"){
			lastX = x;
			lastY = y;
			lastZ = z;
			return;
		}  
		var dis = Math.abs(x - lastX) + Math.abs(y - lastY) +
		Math.abs(z - lastZ);
		if(dis > maxRang) {
			isShake = true;
		}
		if(dis < minRang && isShake) {
			isShake = false;
			//执行 摇一摇之后，要操作的内容
			alert("您晃动了手机");
		}
		box.innerHTML = dis;
		lastX = x;
		lastY = y;
		lastZ = z;
	});
})();