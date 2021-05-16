function submit() {
	var id = document.getElementById('id').value;
	var pass = document.getElementById('pass').value;
	var message = document.getElementById('message');
	var smessage = document.getElementById('smessage');
	if (pass != 1234 || id != 1234) {
		message.innerHTML = 'Access Denied';
		setTimeout(function () {
			message.innerHTML = '';

		}, 1000);
	} else {
		smessage.innerHTML = 'Access Granted';
		setTimeout(function () {
			window.location.href = '/ChatPage.html';
		}, 1000);
	}
}
