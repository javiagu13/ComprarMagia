//Search
function llamada(){
	var prodName=window.location.search.substr(1);
	prodName = prodName.replace('=','');
	console.log(prodName);
	
	ocultar(prodName);
}
function ocultar(prodName){
	var arrayOfElements=document.getElementsByClassName("Productos");
	
	for (var i=0; i<arrayOfElements.length;i++){
		var className = arrayOfElements[i].getAttribute("name");
		var str = String(className).toLowerCase();
		if(str.includes(prodName.toLowerCase())){
			arrayOfElements[i].style.display="block";
		}
		else{
			arrayOfElements[i].style.display="none";
		}
	}
}