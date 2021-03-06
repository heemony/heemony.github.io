jQuery(document).ready(function() {

	container = $('.container');
	cover = $('.cover');
	play = $('#play');
	pause = $('#pause');
	mute = $('#mute');
	muted = $('#muted');
	close = $('#close');
	song = new Audio('music/CanIKickIt.mp3','music/sunshower.mp3');
	duration = song.duration;
	song.loop = true;



	// if (song.canPlayType('audio/mpeg;')) {
    // 	song.type= 'audio/mpeg';
	// 	song.src= 'music/CanIKickIt.mp3';

	// } else {
    // 	song.type= 'audio/ogg';
    // 	song.src= 'music/sunshower.ogg';
	// }

	// song.addEventListener('ended', playGoingon);
	// function playGoingon(){
	// 	song.load();
	// }

	play.on('click', function(e) {
		e.preventDefault();
		song.play();

		$(this).replaceWith('<a class="button gradient" id="pause" href="" title=""></a>');
		$('#close').fadeIn(300);
		$('#seek').attr('max',song.duration);
	});

	pause.on('click', function(e) {
		e.preventDefault();
		song.pause();
		$(this).replaceWith('<a class="button gradient" id="play" href="" title=""></a>');

	});

	mute.on('click', function(e) {
		e.preventDefault();
		song.volume = 0;
		$(this).replaceWith('<a class="button gradient" id="muted" href="" title=""></a>');

	});

	muted.on('click', function(e) {
		e.preventDefault();
		song.volume = 1;
		$(this).replaceWith('<a class="button gradient" id="mute" href="" title=""></a>');

	});

	$('#close').click(function(e) {
		e.preventDefault();
		song.pause();
		song.currentTime = 0;
		$('#pause').replaceWith('<a class="button gradient" id="play" href="" title=""></a>');
		$('#close').fadeOut(300);
	});



	$("#seek").bind("change", function() {
		song.currentTime = $(this).val();
		$("#seek").attr("max", song.duration);
	});

	song.addEventListener('timeupdate',function (){
		curtime = parseInt(song.currentTime, 10);
	$("#seek").attr("value", curtime);
	});

	
});
