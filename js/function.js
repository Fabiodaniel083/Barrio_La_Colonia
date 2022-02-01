//funcion para capturar los datos
function captura(){
    var nombre = document.getElementById("nombre").value;
    
    var apellido = document.getElementById("apellido").value;
    
    var mail = document.getElementById("mail").value;
    
    var opcion = document.getElementById("opcion").value;
   
    
    console.log(nombre + " " + apellido + " " + mail + " " + opcion);
    document.getElementById("nombre").value="";
    document.getElementById("apellido").value="";
    document.getElementById("mail").value="";
    document.getElementById("opcion").value="Selecciona el Desarrollo Urbanistico";
    alert("Hemos recibido tu petición, nuestros Agentes de Ventas se estarán contactando contigo en breve.")
   
}