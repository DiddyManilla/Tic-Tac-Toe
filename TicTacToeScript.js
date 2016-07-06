$(document).ready(function() {
	$("td").css("font-size", parseInt($("table").height() / 3) + "px");
	
	function winner() {
		let cells = $("pre");
		for (let i = 0; i < cells.length; i += 3) {
			if (cells[i].textContent !== " " && cells[i].textContent === cells[i + 1].textContent && cells[i].textContent === cells[i + 2].textContent) {
				return cells[i].textContent;
			}
		}
		for (let i = 0; i < 3; i++) {
			if (cells[i].textContent !== " " && cells[i].textContent === cells[i + 3].textContent && cells[i].textContent === cells[i + 6].textContent) {
				return cells[i].textContent;
			}
		}
		if (cells[0].textContent !== " " && cells[0].textContent === cells[4].textContent && cells[0].textContent === cells[8].textContent) {
				return cells[0].textContent;
		}
		if (cells[2].textContent !== " " && cells[2].textContent === cells[4].textContent && cells[2].textContent === cells[6].textContent) {
				return cells[2].textContent;
		}
		return undefined;
	}
	
	
	
	$("pre").on("click", function() {
		if ($(this).text() === " ") {
			$(this).text("X");
			
			let isEmptySpace = false;
			let pres = $("pre").toArray();
			for (let i = 0; i < pres.length; i++) {
				if (pres[i].textContent === " ") {
					isEmptySpace = true;
					break;
				}
			}
			if (isEmptySpace) {
				let computerChoice = Math.floor(Math.random() * 9);
				let placed = false;
				
				while (!placed) {
	
					let pre = $("pre")[computerChoice];
					
					if (!isEmptySpace) {
						break;
					}
					if (pre.textContent === " ") {
						pre.textContent = "O";
						placed = true;
					} else {
						computerChoice = Math.floor(Math.random() * 9);
					}
				}
			
				let win = winner();
				if (win !== undefined) {
					$("#winner").text(`${win} wins!`);
					$("pre").off();
				}
			} else {
				
				let win = winner();
				if (win !== undefined) {
					$("#winner").text(`${win} wins!`);
					$("pre").off();
				} else {
					$("#winner").text("It's a tie!");
					$("pre").off();
				}
			}
		}
	});
});