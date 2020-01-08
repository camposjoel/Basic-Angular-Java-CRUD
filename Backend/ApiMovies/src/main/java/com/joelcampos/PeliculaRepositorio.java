package com.joelcampos;

import java.util.List;

import org.springframework.data.repository.Repository;

public interface PeliculaRepositorio extends Repository<Pelicula, Integer>{
	
	List<Pelicula>findAll();
	
	Pelicula findById(int id);
	
	Pelicula save(Pelicula p);
	
	void deleteById(int id);
}
