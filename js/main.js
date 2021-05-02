function submit() {
	var id = document.getElementById('id').value;
	var pass = document.getElementById('pass').value;
	var message = document.getElementById('message');
	if (pass == pass || id == id) {
		message.innerHTML = 'Access Denied';
	}
}
