var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector('#player1');
	video.autoplay = false;
	video.loop = false;
	console.log("Auto play is set to " + video.autoplay)
	console.log("Loop is set to " + video.loop)

});

document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"

	
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
	
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	video.playbackRate *= .9;
	console.log("Speed is " + video.playbackRate);
	
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	video.playbackRate /= .9;
	console.log("Speed is " + video.playbackRate);
	
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("skip ahead");
	video.currentTime += 10
	if (video.currentTime >= video.duration){
		video.currentTime = 0
	}
	console.log("Video current time is " + video.currentTime)
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log("The current volume is " + video.volume);

	video.volume = this.value / 100
	
	console.log("The current volume is" + video.volume)
	document.querySelector('#volume').innerHTML = video.volume * 100 + "%"
});

document.querySelector("#mute").addEventListener("click", function() {
	if(video.muted == true){
		console.log("unmuted")
		video.muted = false
		this.innerHTML = "Mute"
	}
	else{
		console.log("Mute")
		video.muted = true
		this.innerHTML = "Unmute"
	}
	
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Current class is vintage")
	video.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Current class original")
	video.classList.remove("oldSchool")
});






