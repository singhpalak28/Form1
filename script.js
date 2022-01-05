const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
	popup();
	
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
		c='0';
	} else {
		setSuccessFor(username);
		c='1';
		
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
		d='0';
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
		d='0';
	} else {
		setSuccessFor(email);
		d='1';
		
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
		e='0';
	} else {
		setSuccessFor(password);
		e='1';
		
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'This section cannot be blank');
		f='0';
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
		f='0';
	} else{
		setSuccessFor(password2);
		f='1';
		
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
function popup(){
	if(c=='1'&& d=='1'&& e=='1'&& f=='1'){
	swal("Form submitted successfully"," ","success");
	fun();
	}
}

function fun(){
	document.getElementById('form').value='';
    document.getElementById('username').value='';
    document.getElementById('email').value='';
    document.getElementById('password').value='';
    document.getElementById('password2').value='';

  }



