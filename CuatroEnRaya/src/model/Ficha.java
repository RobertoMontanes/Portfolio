package model;

 // Realizado por: Fernando Guerrero everything

public class Ficha {
	
	int estado;  // 0: Vacío, 1: Jugador 1; 2: Jugador 2

	public Ficha(int estado) {
		this.estado=estado;
	}

	public int getEstado() {
		return estado;
	}

	public void setEstado(int estado) {
		this.estado = estado;
	}

	
}
