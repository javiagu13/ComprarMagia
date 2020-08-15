//MOSTRAR EFECTOS IMPOSIBLES
function ImposiblesMostrar(){
	HideRestOfModernProducts("Imposibles");
	ShowProducts("Imposibles");
}

//MOSTRAR LEVITACIONES
function LevitacionesMostrar(){
	HideRestOfModernProducts("Levitaciones");
	ShowProducts("Levitaciones");
}

//MOSTRAR MILAGROS TECNOLÓGICOS
function MilagrosMostrar(){
	HideRestOfModernProducts("Milagros");
	ShowProducts("Milagros");
}

//MOSTRAR FORMATE COMO UN PROFESIONAL
function FormateMostrar(){
	HideRestOfModernProducts("Formate");
	ShowProducts("Formate");
}

//MOSTRAR TRUCOS PARA PRINCIPIANTES
function TrucosMostrar(){
	HideRestOfModernProducts("Trucos");
	ShowProducts("Trucos");
}


//MOSTRAR MAGIA DE CERCA
function CercaMostrar(){
	HideRestOfTraditionalProducts("Cerca");
	ShowProducts("Cerca");
}

//MOSTRAR MAGIA DE SALON
function SalonMostrar(){
	HideRestOfTraditionalProducts("Salon");
	ShowProducts("Salon");
}

//MOSTRAR MAGIA DE CALLE
function CalleMostrar(){
	HideRestOfTraditionalProducts("Calle");
	ShowProducts("Calle");
}

//MOSTRAR MANIPULACION
function ManipulacionMostrar(){
	HideRestOfTraditionalProducts("Manipulacion");
	ShowProducts("Manipulacion");
}

//MOSTRAR MAGIA INFANTIL
function InfantilMostrar(){
	HideRestOfTraditionalProducts("Infantil");
	ShowProducts("Infantil");
}

//Search
function Search(){
	var searchText = String(document.getElementById("search-input").value);
	
	var arrayOfElements=document.getElementsByClassName("Productos");
	
	for (var i=0; i<arrayOfElements.length;i++){
		var className = arrayOfElements[i].getAttribute("name");
		var str = String(className).toLowerCase();
		if(str.includes(searchText.toLowerCase())){
			arrayOfElements[i].style.display="block";
		}
		else{
			arrayOfElements[i].style.display="none";
		}
	}
}


//Filtro
function filter(){
	var minValue = document.getElementById('minamount').value;
	var minValue=parseInt(minValue.slice(1));
	
	var maxValue = document.getElementById('maxamount').value;
	var maxValue=parseInt(maxValue.slice(1));
	
	
	var arrayOfElements=document.getElementsByClassName("Productos");
	
	for (var i=0; i<arrayOfElements.length;i++){
		var price= parseInt(arrayOfElements[i].getAttribute("price"));
		if(price<minValue||price>maxValue){
			arrayOfElements[i].style.display="none";
		}		
	}
	
}








//FUNCIONES DE AYUDA
//Mostrar producto de tipo Type
function ShowProducts(Type){
	var arrayOfElements=document.getElementsByClassName(Type);

	for (var i=0; i<arrayOfElements.length;i++){
		arrayOfElements[i].style.display="block";
	}
}

//Ocultar producto de tipo Type
function HideProducts(Type){
	var arrayOfElements=document.getElementsByClassName(Type);
	for (var i=0; i<arrayOfElements.length;i++){
		arrayOfElements[i].style.display="none";
	}
}

function HideRestOfModernProducts(Type){
	//Hide Products
	//Categorias Tradicionales
	if(Type.localeCompare("Imposibles")!=0){
		HideProducts("Imposibles");
	}
	if(Type.localeCompare("Levitaciones")!=0){
		HideProducts("Levitaciones");
	}
	if(Type.localeCompare("Milagros")!=0){
		HideProducts("Milagros");
	}
	if(Type.localeCompare("Formate")!=0){
		HideProducts("Formate");
	}
	if(Type.localeCompare("Trucos")!=0){
		HideProducts("Trucos");
	}	
}

//Ocultar resto de productos
function HideRestOfTraditionalProducts(Type){
	//Hide Products
	//Categorias Modernas
	if(Type.localeCompare("Cerca")!=0){
		HideProducts("Cerca");
	}
	if(Type.localeCompare("Salon")!=0){
		HideProducts("Salon");
	}
	if(Type.localeCompare("Calle")!=0){
		HideProducts("Calle");
	}
	if(Type.localeCompare("Manipulacion")!=0){
		HideProducts("Manipulacion");
	}
	if(Type.localeCompare("Infantil")!=0){
		HideProducts("Infantil");
	}	
}

//ATRIBUTOS: Infantil, Calle, Salon, Cerca, Manipulacion \\ Imposibles, Levitaciones, Milagros, Formate, Trucos