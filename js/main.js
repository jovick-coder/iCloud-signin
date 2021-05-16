function submit() {
	var id = document.getElementById('id').value;
	var pass = document.getElementById('pass').value;
	var message = document.getElementById('message');
	if (pass != 1234 || id != 1234) {
		message.innerHTML = 'Access Denied';
	} else {
		message.innerHTML = 'Access Granted';
		setTimeout(function () {
			window.location.href = '/ChatPage.html';
		}, 5000);
	}
}
