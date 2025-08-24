function validEmail(str) {
  //your JS code here.
	if(!str.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}${/){
		return false;
	}
	return true;
}

// Do not change the code below.
// const str = prompt("Enter an email address.");
// alert(validEmail(str));
