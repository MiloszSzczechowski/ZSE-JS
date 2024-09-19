function WinOpen_szczechowski(file, window_name, height=380, width=160, top=200, left=200) {
	task_window = window.open(
		file,
		window_name,
		`toolbar=no,directories=no,menubar=no, height=${height}, width=${width}, top=${top}, left=${left}`
	);
}

function okno_zamknij_szczechowski() {
    window.close()
}