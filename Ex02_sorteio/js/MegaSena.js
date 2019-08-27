$(document).ready(function () {
	var jogo = new Array;
	for (var i = 0; i < 6; i++) {
		var x = (Math.floor(Math.random() * 60) + 1);
		if (jogo.includes(x)) i--;
		else jogo[i] = x;
	}
	jogo.sort(function (a, b) { return a - b });

	$("#dot0").text(jogo[0]);
	$("#dot1").text(jogo[1]);
	$("#dot2").text(jogo[2]);
	$("#dot3").text(jogo[3]);
	$("#dot4").text(jogo[4]);
	$("#dot5").text(jogo[5]);
	$("#dot6").text(jogo[6]);
});
//https://www.w3schools.com/jsref/jsref_random.asp
//https://www.w3schools.com/jsref/jsref_sort.asp
//https://www.w3schools.com/jquery/misc_each.asp
