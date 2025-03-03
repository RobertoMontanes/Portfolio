package vista;

// Realizado por: Roberto Montañés Ramos
 

import crud.CrudTablero;

public class ImprimirTablero {

	public void dibujarTablero(CrudTablero matriz, int filas, int columnas) { 
		int estado; // Para imprimir el estado de la ficha 0: vacio, 1: X, 2: O
		System.out.print("    ");
		for (int col = 0; col < columnas; col++) {
			System.out.print(" " + col + "  ");
		}
		System.out.println();
		System.out.print("   ╔");
		for (int col = 0; col < columnas - 1; col++) {
			System.out.print("═══╦");
		}
		System.out.println("═══╗");
		for (int fila = 0; fila < filas; fila++) {
			System.out.print(" " + fila + " ║");
			
			for (int col = 0; col < columnas; col++) {       //Empieza ayuda jaime
				estado=matriz.comprobarEstado(fila, col);
				switch(estado) {
				case 0:
					System.out.print(" " + " " + " ║");
					break;
				case 1:
					System.out.print(" " + "X" + " ║");
					break;
				case 2:
					System.out.print(" " + "O" + " ║");
					break;
				case 3:
					System.out.print(" " + "♪" + " ║");						
				}											//Acaba ayuda jaime
			
			}
			System.out.println();
			if (fila < filas - 1) {
				System.out.print("   ╠");
				for (int col = 0; col < columnas - 1; col++) {
					System.out.print("═══╬");
				}
				System.out.println("═══╣");
			}
		}
		System.out.print("   ╚");
		for (int col = 0; col < columnas - 1; col++) {
			System.out.print("═══╩");
		}
		System.out.println("═══╝");
	}
}
