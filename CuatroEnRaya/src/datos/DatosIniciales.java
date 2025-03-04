package datos;



public class DatosIniciales {
	private int FILAS_TABLERO = 6;
	private int COLUMNAS_TABLERO = 7;
	private char FICHA_JUGADOR1 = 'X';
	private char FICHA_JUGADOR2 = 'O';
	

	public int getFILAS_TABLERO() {
		return FILAS_TABLERO;
	}

	public void setFILAS_TABLERO(int fILAS_TABLERO) {
		FILAS_TABLERO = fILAS_TABLERO;
	}

	public int getCOLUMNAS_TABLERO() {
		return COLUMNAS_TABLERO;
	}

	public void setCOLUMNAS_TABLERO(int cOLUMNAS_TABLERO) {
		COLUMNAS_TABLERO = cOLUMNAS_TABLERO;
	}

	public char getFICHA_JUGADOR1() {
		return FICHA_JUGADOR1;
	}

	public void setFICHA_JUGADOR1(char fICHA_JUGADOR1) {
		FICHA_JUGADOR1 = fICHA_JUGADOR1;
	}

	public char getFICHA_JUGADOR2() {
		return FICHA_JUGADOR2;
	}

	public void setFICHA_JUGADOR2(char fICHA_JUGADOR2) {
		FICHA_JUGADOR2 = fICHA_JUGADOR2;
	}

}