package controller;



import crud.CrudTablero;
import vista.ImprimirTablero;

public class ControllerTablero {
	private CrudTablero tablero;
	private ImprimirTablero it;
	private int posicionesGanadoras [];
	
	public ControllerTablero(CrudTablero tablero, ImprimirTablero it) {
		super();
		this.tablero = tablero;
		this.it=it;
		this.posicionesGanadoras = new int[8];
	}

	public boolean comprobarVictoria(int jugador) { 
		
		int filas = tablero.getFilas();
		int columnas = tablero.getColumnas();
		// Comprueba las filas horizontales
		for (int i = 0; i < filas; i++) {
			for (int j = 0; j < columnas - 3; j++) {
				if (tablero.comprobarEstado(i, j) == jugador && tablero.comprobarEstado(i, j + 1) == jugador
						&& tablero.comprobarEstado(i, j + 2) == jugador
						&& tablero.comprobarEstado(i, j + 3) == jugador) {
					
					for(int k=0;k<=6;k+=2) { // Guarda las posiciones en la tabla de las fichas ganadoras, para así hacer una pequeña animación de victoria
						posicionesGanadoras[k]=i;
					}
					posicionesGanadoras[1]=j;  
					posicionesGanadoras[3]=j+1;
					posicionesGanadoras[5]=j+2;
					posicionesGanadoras[7]=j+3;
					return true;
				}
			}
		}
		// Comprueba las filas verticales
		for (int i = 0; i < columnas; i++) {
			for (int j = 0; j < filas - 3; j++) {
				if (tablero.comprobarEstado(j, i) == jugador && tablero.comprobarEstado(j + 1, i) == jugador
						&& tablero.comprobarEstado(j + 2, i) == jugador
						&& tablero.comprobarEstado(j + 3, i) == jugador) {
					for(int k=1;k<=7;k+=2) { 
						posicionesGanadoras[k]=i;
					}
					posicionesGanadoras[0]=j;  
					posicionesGanadoras[2]=j+1;
					posicionesGanadoras[4]=j+2;
					posicionesGanadoras[6]=j+3;
					return true;
				}
			}
		}
		// Comprueba las filas diagonales izq - der (\)
		for (int i = 0; i < filas - 3; i++) {
			for (int j = 0; j < columnas - 3; j++) {
				if (tablero.comprobarEstado(i, j) == jugador && tablero.comprobarEstado(i + 1, j + 1) == jugador
						&& tablero.comprobarEstado(i + 2, j + 2) == jugador
						&& tablero.comprobarEstado(i + 3, j + 3) == jugador) {
					posicionesGanadoras[0]=i;
					posicionesGanadoras[1]=j;  
					posicionesGanadoras[2]=i+1;
					posicionesGanadoras[3]=j+1;
					posicionesGanadoras[4]=i+2;
					posicionesGanadoras[5]=j+2;
					posicionesGanadoras[6]=i+3;
					posicionesGanadoras[7]=j+3;
					return true;
				}
			}
		}
		// Comprueba las filas diagonales der - izq (/)
		for (int i = 3; i < filas; i++) {
			for (int j = 0; j < columnas - 3; j++) {
				if (tablero.comprobarEstado(i, j) == jugador && tablero.comprobarEstado(i - 1, j + 1) == jugador
						&& tablero.comprobarEstado(i - 2, j + 2) == jugador
						&& tablero.comprobarEstado(i - 3, j + 3) == jugador) {
					posicionesGanadoras[0]=i;
					posicionesGanadoras[1]=j;  
					posicionesGanadoras[2]=i-1;
					posicionesGanadoras[3]=j+1;
					posicionesGanadoras[4]=i-2;
					posicionesGanadoras[5]=j+2;
					posicionesGanadoras[6]=i-3;
					posicionesGanadoras[7]=j+3;
					return true;
				}
			}
		}

		return false;
	}
	
	public void animacionGanadoras () throws InterruptedException { 
		int ficha=tablero.comprobarEstado(posicionesGanadoras[0], posicionesGanadoras[1]);
		int contador=0;
		while(contador<=4) {
		for (int i = 0; i < posicionesGanadoras.length-1; i+=2) {
			tablero.setTabla(posicionesGanadoras[i], posicionesGanadoras[i+1], 3);
		}
		it.dibujarTablero(tablero, 6, 7);
		Thread.sleep(600);
		for (int i = 0; i < posicionesGanadoras.length-1; i+=2) {
			tablero.setTabla(posicionesGanadoras[i], posicionesGanadoras[i+1],ficha);
			it.dibujarTablero(tablero, 6, 7);
			contador++;
			Thread.sleep(600);
			}
		}
	}
	
	public boolean comprobarEmpate() { 
		int filas = tablero.getFilas();
		int columnas = tablero.getColumnas();
		// Comprueba si todas las posiciones del tablero están llenas
		for (int i = 0; i < filas; i++) {
			for (int j = 0; j < columnas; j++) {
				if (tablero.comprobarEstado(i, j) == 0) { 
					return false;
				}
			}
		}
		return true;
	}
}
