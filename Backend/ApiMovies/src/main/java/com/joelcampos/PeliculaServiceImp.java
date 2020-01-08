package com.joelcampos;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PeliculaServiceImp implements PeliculaService {

	@Autowired
	private PeliculaRepositorio repositorio;
	
	@Override
	public List<Pelicula> mostrarTodas() {
		return repositorio.findAll();
	}

	@Override
	public Pelicula mostrarPorId(int id) {
		
		return repositorio.findById(id);
	}

	@Override
	public Pelicula agregar(Pelicula p) {
		return repositorio.save(p);
	}

	@Override
	public Pelicula editar(Pelicula p) {
		
		return repositorio.save(p);
	}

	@Override
	public void borrar(int id) {
		repositorio.deleteById(id);
	}

	
}
