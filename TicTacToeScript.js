$(document).ready(function() {
	$("td").css("font-size", parseInt($("table").height() / 3) + "px");
	$("td").on("click", function() {
		$(this).text("X");
		var row = Math.floor(Math.random() * 3);
		var column = Math.floor(Math.random() * 3);
		var placed = false;
		while (!placed) {
			var tr = $("table").children().get(row);
			var td = tr.children().get(column);
			if (td.text() === "X") {
				row = Math.floor(Math.random() * 3);
				column = Math.floor(Math.random() * 3);
			} else {
				td.text("O");
				placed = true;
			}
		}
			
	});
});