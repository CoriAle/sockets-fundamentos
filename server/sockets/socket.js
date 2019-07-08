const { io } = require('../server')


//Escuchar conecciones del cliente
io.on('connection', (client)=>{
	console.log("Usuario conectado")
	//Eníar mensaje al cliente
	client.emit('enviarMensaje', {
		usuario: "Admin",
		mensaje: "Bienvenido a esta aplicación"
	});
	//EScuchar si el cliente se desconectó
	client.on('disconnect', ()=>{
		console.log("Usuario desconectado")	
	});

	//Escuchar al cliente 
	//Callback recibe la info enviada
	//callback función definida en el emmit
	client.on('enviarMensaje',(data, callback)=>{
		console.log(data);
		//Todos los clientes lo reciben
		client.broadcast.emit('enviarMensaje', data);
		/*if(mensaje.usuario){
				callback({
					resp: "TODO SALIÓ BIEN"
				});		
			
		}
		else{
			callback({
					resp: "TODO SALIÓ MAL !!!"
				});
		}*/

	});

});