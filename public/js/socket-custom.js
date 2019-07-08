
//On es para escuchar inforación
		//io biene del script de socket.io
console.log("custom")
var socket = io();
//Escuchando al servidor
socket.on('connect', function(){
	console.log("Conectado al servidor")
})
//Cuando pierde conección
socket.on('disconnect', function(){
	console.log("Perdimos conección con el servidor")
});
//Envíar información al backend
//primer parametro lo que el server escucha, segundo la información
socket.emit('enviarMensaje', {
	usuario: "Cori",
	mensaje: "Hola mundo"
}, function(resp){
	//Función que se pasa hacia el lado que escucha
	console.log("Respuesta server: ", resp);
});

//Escuchar infomración
socket.on('enviarMensaje', function(mensaje){
		console.log("Servidor: ",mensaje);
})