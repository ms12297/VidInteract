var container = document.querySelector(".container");
var video = document.querySelector(".back video");
var choices = document.querySelector(".choices");
var contBtn = document.querySelector("#continue-btn");
var skipBtn = document.querySelector("#skip-btn");

var shownChoice1 = false;

container.addEventListener('click', function(){
	if (!container.classList.contains('anim'))
	{
		container.classList.add('anim');
		video.play();
	}
});

video.addEventListener('timeupdate', function() {
	if (video.currentTime > 5 && !shownChoice1)
	{
		video.pause();
		choices.style.visibility = "visible";
		shownChoice1 = true;
	}
});

contBtn.addEventListener('click', function(){
	video.play();
	choices.style.visibility = "hidden";
});

skipBtn.addEventListener('click', function(){
	choices.style.visibility = "hidden";
	video.currentTime = 200;
	video.play();
});

video.addEventListener('ended', function(){
	container.classList.remove('anim');
	shownChoice1 = false;
});