function isAllNumbers(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}

function isAllLetters(evt){

	return (/^[a-zA-Z]+$/.test(str));
}

console.log("Hi");

function submitForm(e) {

	console.log("Hi");

    var firstName = document.getElementById("first-name");
	var lastName = document.getElementById("last-name");
	var weight =document.getElementById("weight");
	var sex = document.querySelector('input[name="sex"]:checked').value;

    console.log(firstName.val);
	console.log(lastName.val);
	console.log(weight.val);
	console.log(sex.val);
}
/*
if ($("#action").val() == "register") {
	console.log("Hi");
 }

var registerButton = document.getElementById("register-button");


console.log(registerButton);

registerButton.onsubmit = function(e){

	var firstName = document.getElementById("first-name");
	var lastName = document.getElementById("last-name");
	var weight =document.getElementById("weight");
	var sex = document.querySelector('input[name="sex"]:checked').value;

	console.log(firstName);
	console.log(lastName);
	console.log(weight);
	console.log(sex);
};
*/