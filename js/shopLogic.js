//ATRIBUTOS: Cerca, Salon, Calle, Infantil, Mentalismo, Manipulacion, Cartas, Monedas, Levitaciones \\ Consumibles, Accesorios \\ Libros DVDs

//MOSTRAR MAGIA DE CERCA
function CercaMostrar(){
	HideExplanations();
	HideAllProducts();
	ShowProducts("Cerca");
	ShowExplanation("MagiaCerca");
}

//MOSTRAR MAGIA DE SALON
function SalonMostrar(){
	HideExplanations();
	HideAllProducts();
	ShowProducts("Salon");
	ShowExplanation("MagiaSalon");
}

//MOSTRAR MAGIA DE CALLE
function CalleMostrar(){
	HideExplanations();
	HideAllProducts();
	ShowProducts("Calle");
	ShowExplanation("MagiaCalle");
}

//MOSTRAR MAGIA INFANTIL
function InfantilMostrar(){
	HideExplanations();
	HideAllProducts();
	ShowProducts("Infantil");
	ShowExplanation("MagiaInfantil");
}

//MOSTRAR MENTALISMO
function MentalismoMostrar(){
	HideExplanations();
	HideAllProducts();
	ShowProducts("Mentalismo");
	ShowExplanation("MagiaMentalismo");
}

//MOSTRAR MANIPULACION
function ManipulacionMostrar(){
	HideExplanations();
	HideAllProducts();
	ShowProducts("Manipulacion");
	ShowExplanation("MagiaManipulacion");
}

//MOSTRAR CARTAS
function CartasMostrar(){
	HideExplanations();
	HideAllProducts();
	ShowProducts("Cartas");
	ShowExplanation("MagiaCartas");
}

//MOSTRAR MONEDAS
function MonedasMostrar(){
	HideExplanations();
	HideAllProducts();
	ShowProducts("Monedas");
	ShowExplanation("MagiaMonedas");
}

//MOSTRAR LEVITACIONES
function LevitacionesMostrar(){
	HideExplanations();
	HideAllProducts();
	ShowProducts("Levitaciones");
	ShowExplanation("MagiaLevitaciones");
}

//MOSTRAR CONSUMIBLES
function ConsumiblesMostrar(){
	HideExplanations();
	HideAllProducts();
	ShowProducts("Consumibles");
	ShowExplanation("MagiaConsumibles");
}

//MOSTRAR ACCESORIOS
function AccesoriosMostrar(){
	HideExplanations();
	HideAllProducts();
	ShowProducts("Accesorios");
	ShowExplanation("MagiaAccesorios");
}

//MOSTRAR LIBROS
function LibrosMostrar(){
	HideExplanations();
	HideAllProducts();
	ShowProducts("Libros");
	ShowExplanation("MagiaLibros");
}

//MOSTRAR DVDS
function DVDsMostrar(){
	HideExplanations();
	HideAllProducts();
	ShowProducts("DVDs");
	ShowExplanation("MagiaDvds");
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

//OcultarExplicaciones
function HideExpla(Type){
	var arrayOfElements=document.getElementsByClassName(Type);
	for (var i=0; i<arrayOfElements.length;i++){
		arrayOfElements[i].style.display="none";
	}
}

//Mostrar producto de tipo Type
function ShowExplanation(Type){
	var arrayOfElements=document.getElementsByClassName(Type);

	for (var i=0; i<arrayOfElements.length;i++){
		arrayOfElements[i].style.display="block";
	}
}

function HideExplanations(){
	HideExpla("MagiaCerca");
	HideExpla("MagiaSalon");
	HideExpla("MagiaCalle");
	HideExpla("MagiaInfantil");
	HideExpla("MagiaManipulacion");
	HideExpla("MagiaMentalismo");
	HideExpla("MagiaCartas");
	HideExpla("MagiaMonedas");
	HideExpla("MagiaLevitaciones");
	HideExpla("MagiaConsumibles");
	HideExpla("MagiaAccesorios");
	HideExpla("MagiaLibros");
	HideExpla("MagiaDvds");
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