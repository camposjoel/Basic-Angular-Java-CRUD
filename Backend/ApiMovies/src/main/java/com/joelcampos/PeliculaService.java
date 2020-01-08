package com.joelcampos;

import java.util.List;

public interface PeliculaService {

	List<Pelicula> mostrarTodas();
	Pelicula mostrarPorId(int Id);
	Pelicula agregar(Pelicula p);
	Pelicula editar(Pelicula p);
	void borrar(int Id);
}
