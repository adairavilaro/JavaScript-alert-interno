var num1 = prompt ("ingrese el num1");
var num2 = prompt ("ingrese el num2");

var resta = num1 - num2;

if (resta>0) {

    console.log("es mayor a 0")
    let imparpar = resta %2;

    if(imparpar==0) {
        console.log("es par")
    }
    else {
        console.log("es impar")
    }

}else {
    console.log ("es menor o igual a 0")
}
