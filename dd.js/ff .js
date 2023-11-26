unction vali() {
	var fcheck =document.getElementById("fname");
	var lcheck =document.getElementById("lname");
	var echeck =document.getElementById("ename");

if (fcheck.value === "") {document.getElementById("falert").innerHTML="Error";fcheck.focus();return false;}
if (lcheck.value === "") {document.getElementById("lalert").innerHTML="Error";lcheck.focus();return false;}
if (echeck.value === "") {document.getElementById("ealert").innerHTML="Error";echeck.focus();return false;}

}