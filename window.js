function WinOpen_szczechowski(file, window_name, height=1080, width=1920, top=0, left=0) {
	window.open(
		file,
		window_name,
		`toolbar=no,directories=no,menubar=no, height=${height}, width=${width}, top=${top}, left=${left}`
	);
}

function okno_zamknij_szczechowski() {
    window.close()
}