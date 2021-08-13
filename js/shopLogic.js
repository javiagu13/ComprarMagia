//ATRIBUTOS: Cerca, Salon, Calle, Infantil, Mentalismo, Manipulacion, Cartas, Monedas, Levitaciones \\ Consumibles, Accesorios \\ Libros DVDs

//MOSTRAR MAGIA DE CERCA
function CercaMostrar(){
	HideAllProducts();
	ShowProducts("Cerca");
}

//MOSTRAR MAGIA DE SALON
function SalonMostrar(){
	HideAllProducts();
	ShowProducts("Salon");
}

//MOSTRAR MAGIA DE CALLE
function CalleMostrar(){
	HideAllProducts();
	ShowProducts("Calle");
}

//MOSTRAR MAGIA INFANTIL
function InfantilMostrar(){
	HideAllProducts();
	ShowProducts("Infantil");
}

//MOSTRAR MENTALISMO
function MentalismoMostrar(){
	HideAllProducts();
	ShowProducts("Mentalismo");
}

//MOSTRAR MANIPULACION
function ManipulacionMostrar(){
	HideAllProducts();
	ShowProducts("Manipulacion");
}

//MOSTRAR CARTAS
function CartasMostrar(){
	HideAllProducts();
	ShowProducts("Cartas");
}

//MOSTRAR MONEDAS
function MonedasMostrar(){
	HideAllProducts();
	ShowProducts("Monedas");
}

//MOSTRAR LEVITACIONES
function LevitacionesMostrar(){
	HideAllProducts();
	ShowProducts("Levitaciones");
}

//MOSTRAR CONSUMIBLES
function ConsumiblesMostrar(){
	HideAllProducts();
	ShowProducts("Consumibles");
}

//MOSTRAR ACCESORIOS
function AccesoriosMostrar(){
	HideAllProducts();
	ShowProducts("Accesorios");
}

//MOSTRAR LIBROS
function LibrosMostrar(){
	HideAllProducts();
	ShowProducts("Libros");
}

//MOSTRAR DVDS
function DVDsMostrar(){
	HideAllProducts();
	ShowProducts("DVDs");
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
	ShowAllProducts();
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


function HideAllProducts(){
	HideProducts("Cerca");
	HideProducts("Salon");
	HideProducts("Calle");
	HideProducts("Infantil");
	HideProducts("Mentalismo");
	HideProducts("Manipulacion");
	HideProducts("Cartas");
	HideProducts("Monedas");
	HideProducts("Levitaciones");
	HideProducts("Consumibles");
	HideProducts("Accesorios");
	HideProducts("Libros");
	HideProducts("DVDs");
}

function ShowAllProducts(){
	ShowProducts("Cerca");
	ShowProducts("Salon");
	ShowProducts("Calle");
	ShowProducts("Infantil");
	ShowProducts("Mentalismo");
	ShowProducts("Manipulacion");
	ShowProducts("Cartas");
	ShowProducts("Monedas");
	ShowProducts("Levitaciones");
	ShowProducts("Consumibles");
	ShowProducts("Accesorios");
	ShowProducts("Libros");
	ShowProducts("DVDs");
}