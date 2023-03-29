var video = document.querySelector("#player1");;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.load();
	//Loads Video
	video.autoplay = false;
	//Stops Video Autoplay
	video.loop = false;
	//Stops Video Loop
	console.log("Good job stopping autoplay and loop");
});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	//Plays Video
	console.log("Play Video");
	//Updates Volume Information
	document.querySelector("#volume").innerHTML = slider.value + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	// Pauses Video
	console.log("Pause Video");
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate -= 0.1;
	//Slows Video Playback by 10%
	console.log("Video Slowed to", video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate += .1;
	//Speeds Up Video Playback by 10%
	console.log("Video Sped to", video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 10 <= video.duration) {
		//Forward 10 Seconds IF Video Duration is Under the Current Time + 10
		video.currentTime += 10;
		video.play();
	}
	else {
		video.currentTime = 0;
		//Restarts Video
	}
	console.log(video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		video.muted = false;
		//Unmuted Video
		document.querySelector('#mute').innerHTML = 'Mute';
	}
	else {
		video.muted = true;
		//Muted Video
		document.querySelector('#mute').innerHTML = 'Unmute';
	}
});

document.querySelector("#slider").addEventListener("change", function() {
	video.volume = this.value / 100; 
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"; 
	//Constantly Changes Video Slider, rather than only when Play is pressed
	console.log("Video volume is ", video.volume); 
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
	//Change Style
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
	//Change Style
});
