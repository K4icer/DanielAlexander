'use strict';

// Variables:
// Json con la metadata de los atributos de las personas:
const persona = {
	nombre: "Daniel Alexander Agualimpia Cordoba",
	profesion: "Desarrollador Junior",
	correo: "daagualimpia8@misena.edu.co",
	telefono: "+57 301 727 4052",
	perfil: "Estudiante de Análisis y desarrollo de sistemas en el SENA con experiencia laborar en logistica y manipulación de alimentos",
	habilidades: {
		comunicativas:['Buena escucha, ','Amigable, ','Actitud Positiva, ','Tolerancia, ','Respeto, ','Diálogo Abierto, ','Orden, ','Apoyo'],
		gestion: ['Organizado, ','Evaluación de Proyectos, ','Responsabilidad, ','Trabajo en equipo, ','Absorver y procesar información'],
		tecnicas: ['Análisis y desarrollo de sistemas ']
	},
	hobbies: ['Leer ', 'Ver Peliculas ', 'Charlar con amigos ', 'Video-Juegos']
}

// Dejar intácto a partir de aquí.
// Constantes SENA:
const banner = "https://3.bp.blogspot.com/-TkVKyVxdxgQ/U2kGFcBl3LI/AAAAAAAABVo/zrDM3ittaz0/s1600/Banner+Soy+Cultura+SENA+-+CTMA.png";
// Mostramos el objeto persona en la consola:
console.log(persona);

function dataUser(){
	// Head titulo:
	$('#titulo').html(persona.nombre);
	// Header:
	$('#nombre').html(persona.nombre);
	$('#profesion').html(persona.profesion);
	// Footer:
	$('#correo').html(persona.correo);
	$('#telefono').html(persona.telefono);
	// Sección lateral:
	$('#banner').html('<img src="'+banner+'" class="img-fluid mt-2" alt="">');
	$('#perfil').html(persona.perfil);
	$('#comunicativas').html(persona.habilidades.comunicativas);
	$('#gestion').html(persona.habilidades.gestion);
	$('#tecnicas').html(persona.habilidades.tecnicas);
	// Invocamos una segunda función para traer cada uno de los elementos del arreglo:
	var aficiones = persona.hobbies.map(function(bar){
		return '<li class="list-group-item">'+bar+'</li>' 
	});
	$('#hobbies').html(aficiones);
}