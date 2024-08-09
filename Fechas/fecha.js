/*var fecha = new Date();
alert("La fecha de hoy es: " + fecha);*/

/*var fecha = new Date(1997, 9, 23);
alert("La fecha de hoy es: " + fecha);*/

/*var fecha = new Date("05/25/2024");
alert("La fecha de hoy es: " + fecha);*/

var fecha = new Date(1997, 9, 23);
var dia = fecha.getDate();
var mes = fecha.getMonth();
var anio = fecha.getFullYear();
alert("Dia " + dia + "Mes " + (mes+1) + "Año " + anio);