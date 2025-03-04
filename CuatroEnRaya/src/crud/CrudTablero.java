package crud;



import model.Ficha;

public class CrudTablero {

	private int filas;
	private int col;
	private Ficha tabla[][];
	

	public CrudTablero(int filas, int col) {  // Constructor. Se le pasa sólo el número de filas y de columnas. Luego, él solito se rellena con fichas
		this.filas = filas;
		this.col = col;
		this.tabla=new Ficha[filas][col];
		inicializarTablero();
	}
	
	public int getFilas() {
		return this.filas;
	}
	
	public int getColumnas() {
		return this.col;
	}
	
	public void setTabla(int fila, int columna, int estado) {
		tabla[fila][columna].setEstado(estado);
		
	}
	
	public void inicializarTablero() {  // Rellena el tablero con objetos de tipo Ficha en el estado 0 (vacío). Lo hace una vez automáticamente en el constructor
		for(int i=0;i<filas;i++) {
			for(int j=0;j<col; j++) {
				tabla[i][j]=new Ficha(0);
			}
		}
	}
	
	public boolean anadirFicha(int col, int jugador) {  // Devuelve true si encuentra un espacio para colocar la ficha, false si no.
		if(col<this.col&&col>=0) {
			for(int i=filas-1;i>=0;i--) { // Empieza desde la útima fila
				if(tabla[i][col].getEstado()==0) {
					tabla[i][col].setEstado(jugador);
					return true; 
					}
				}
		}
		return false; 
	}
	
	public int comprobarEstado(int fila, int columna) { 
		return tabla[fila][columna].getEstado();
	}

}
