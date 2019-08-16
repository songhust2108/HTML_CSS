function paint1(){
	var row=document.getElementsByName('row')[0].value;
	var col=document.getElementsByName('col')[0].value;
	var hinh="";


	for (var i =0 ; i<=row; i++) {
		for (var j=0; j<=col; j++) {
			hinh+="*";
		}
		hinh+="<br>";
	}
	document.getElementById("text").innerHTML=hinh;
}