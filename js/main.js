function submit() {
	var id = document.getElementById('id').value;
	var pass = document.getElementById('pass').value;
	var message = document.getElementById('message');
	if (pass != 1234 || id != 1234) {
		message.innerHTML = 'Access Denied';
	}
}
