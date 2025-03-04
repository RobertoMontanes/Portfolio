package main;



import controller.ControllerTablero;
import crud.CrudTablero;
import datos.DatosIniciales;
import model.Jugador;
import utilidades.Leer;
import vista.ImprimirMensajes;
import vista.ImprimirTablero;

public class Principal {

	public static void main(String[] args) {

		Jugador j1;
		Jugador j2;
		Jugador jaux;
		String nombre;
		int columna, turno = 0, ficha;
		CrudTablero t = new CrudTablero(6, 7);
		ImprimirTablero it = new ImprimirTablero();
		ControllerTablero ct = new ControllerTablero(t, it); // Clase que se encarga de comprobar si hay victoria
		DatosIniciales d = new DatosIniciales();
		ImprimirMensajes im = new ImprimirMensajes();
		boolean jugando;
		int opcion;

		im.imprimirBienvenida();
		do {
			
			opcion = Leer.datoInt();
			switch (opcion) {
				case 0:
					break;
				case 1:
					jugando = true;
	
					/* INICIO DE JUGADORES */
					System.out.print("Introduzca el nombre del 1er Jugador\n➽ ");
					nombre = Leer.dato();
					j1 = new Jugador(nombre, d.getFICHA_JUGADOR1());
					System.out.print("Introduzca el nombre del 2do Jugador\n➽ ");
					nombre = Leer.dato();
					j2 = new Jugador(nombre, d.getFICHA_JUGADOR2());
					System.out.println();
					t.inicializarTablero();
					turno = 0;
					/* INICIO DEL JUEGO */
					while (jugando) {
						if (turno % 2 == 0) { // Jugador 1 juega en turno par
							jaux = j1;
							ficha = 1;
						} else { // Jugador2 juega en turno impar
							jaux = j2;
							ficha = 2;
						}
						it.dibujarTablero(t, d.getFILAS_TABLERO(), d.getCOLUMNAS_TABLERO());
						System.out.println("Turno de " + jaux.getNombre() + " " + "(" + jaux.getFicha() + ")"
								+ " Seleccione la columna: ");
						columna = Leer.datoInt();
						while (!t.anadirFicha(columna, ficha)) {
							System.out.println("ERROR: Columna llena / no existente. Escoja otra columna: ");
							columna = Leer.datoInt();
						}
						// Imprimir ---> Se le pasa: Jugador, tablero
						if (ct.comprobarVictoria(ficha)) {
							jugando = false;
	
							try {
								ct.animacionGanadoras();
							} catch (InterruptedException e) {
							}
							System.out.println("GANADOR: " + jaux.getNombre());
							System.out.println("\n➽ Pulsa 0. para cerrar el programa");
							System.out.println("➽ Pulsa 1. para jugar");
						} else if (ct.comprobarEmpate()) {
							jugando = false;
							it.dibujarTablero(t, d.getFILAS_TABLERO(), d.getCOLUMNAS_TABLERO());
							im.imprimirEmpate();
							
						}
						turno++;
					}
					break;
	
				default:
					System.out.println("Número Inválido");
					System.out.println("\n➽ Pulsa 0. para cerrar el programa");
					System.out.println("➽ Pulsa 1. para jugar");
					break;
			}
			
		} while (opcion != 0);
		im.imprimirGraciasPorJugar();
	}
}
