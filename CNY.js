function getmytext() {
	var mytext = getUrlVars()["text"];
	alert(mytext);
}
function testjs()
{
	var firsttext = getUrlVars()["name"];
	var editedname = firsttext.replace("~", "%20");
	var editedname2 = editedname.replace("~", "%20");
	var editedname3 = editedname2.replace("~", "%20");
	var editedname4 = editedname3.replace("~", "%20");
	window.location = 'http://dcs5604.com/cny20201.html?text='+editedname4;

}

function sendtowhatsapp()
{
var mytext = getUrlVars()["text"];
	var inputVal = document.getElementById("textboxid").value;
	var outputVal = inputVal.replace(" ", "~");
	var outputVal2 = outputVal.replace(" ", "~");
	var outputVal3 = outputVal2.replace(" ", "~");
	var outputVal4 = outputVal3.replace(" ", "~");
window.location = 'https://wa.me/?text='+inputVal+'wishing you a Happy Chinese New Year 2020 %0A%0AOpen+this+�+%0A%0ACNY.html%3Fname%3DHiew~Bing~Jie&app_absent=0"'+outputVal4;
}

function loadname() {
	var mytext = getUrlVars()["text"];
	var mytext2 = mytext.replace("%20", "&nbsp");
	var mytext3 = mytext2.replace("%20", "&nbsp");
	var mytext4 = mytext3.replace("%20", "&nbsp");
	var mytext5 = mytext4.replace("%20", "&nbsp");
	document.write("<p class='aligncenter'><b><font size='600' face='verdana' color='yellow'> " + mytext5.big() + "</font></b></p>");
}