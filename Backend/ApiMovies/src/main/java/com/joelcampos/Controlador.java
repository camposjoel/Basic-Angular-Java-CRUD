package com.joelcampos;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping({"/peliculas"})
public class Controlador {

	@Autowired
	PeliculaService service;
	
	@GetMapping
	public List<Pelicula>MostrarTodas(){
		return service.mostrarTodas();
	}
	
	@PostMapping
	public Pelicula Agregar(@RequestBody Pelicula p) {
		return service.agregar(p);
	}
	
	@GetMapping(path= {"/{id}"})
	public Pelicula MostrarPorId(@PathVariable("id") int id ) {
		return service.mostrarPorId(id);
	}
	
	
	@PutMapping(path= {"/{id}"})
	public Pelicula Editar(@RequestBody Pelicula p, @PathVariable("id") int id) {
		p.setId(id);
		return service.editar(p);
	}
	
	
	@DeleteMapping(path= {"/{id}"})
	public void BorrarPorId(@PathVariable("id") int id) {
		service.borrar(id);
	}
}
