// Para darle borde al seleccionar la bandera de index.html
function cambiarBorderBoton(id) {
  document.getElementById('imagen_esp_bandera').style.border = '';
  document.getElementById('imagen_ingles_bandera').style.border = '';
  document.getElementById('imagen_esp_bandera').style.boxShadow = '';

  if (id === 'esp') {
      document.getElementById('imagen_esp_bandera').style.border = '4px solid #fff';
  } else if (id === 'ingles') {
      document.getElementById('imagen_ingles_bandera').style.border = '4px solid #fff';
  }

  document.getElementById('ContenidoCarta').innerHTML = (id === 'ingles') ? 'See menu' : 'Ver carta';
}

// Para marcar como activo el enlace del índice con un borde inferior
document.addEventListener("DOMContentLoaded", function () {
  const enlaces = document.querySelectorAll(".seleccion_productos a");

  enlaces.forEach((enlace) => {
      enlace.addEventListener("click", function () {
          enlaces.forEach((e) => e.classList.remove("activo"));
          this.classList.add("activo");
      });
  });
});


//----------------------------SIDEBAR------------------------------------------------

// Guarda los id`s en variables
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

// Función para abrir/cerrar el sidebar
menuToggle.addEventListener("click", (event) => {
  event.stopPropagation(); // Evita que el clic en el botón cierre el sidebar inmediatamente
  sidebar.classList.toggle("open");
  overlay.classList.toggle("active");
});

// Evita que los clics dentro del sidebar lo cierren
sidebar.addEventListener("click", (event) => {
  event.stopPropagation();
});

// Cerrar sidebar al hacer clic fuera de él o en el overlay
document.addEventListener("click", (event) => {
  if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
      sidebar.classList.remove("open");
      overlay.classList.remove("active");
  }
});

// Cerrar el sidebar si se hace clic en el overlay
overlay.addEventListener("click", () => {
  sidebar.classList.remove("open");
  overlay.classList.remove("active");
});

// Para el menú desplegable del sidebar
document.addEventListener("DOMContentLoaded", function () {
  const dropdownToggle = document.querySelector(".dropdown-toggle");

  dropdownToggle.addEventListener("click", function (e) {
      e.preventDefault();
      this.parentElement.classList.toggle("open");
  });
});

//----------------------------FILTRO------------------------------------------------

// Obtener el modal y el botón de apertura
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

// Mostrar el modal al hacer clic en el icono
openModalBtn.addEventListener("click", function() {
  modal.style.display = "block";
});

// Cerrar el modal al hacer clic en el botón de cerrar
closeModalBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

// Cerrar el modal al hacer clic fuera de él
window.addEventListener("click", function(event) {
  if (event.target === modal) {
      modal.style.display = "none";
  }
});


//----------------------------SEARCH------------------------------------------------

// Elementos
const searchIcon = document.getElementById("search-icon");
const searchOverlay = document.getElementById("search-overlay");
const backIcon = document.getElementById("back-icon");

// Mostrar el input y fondo blanco al hacer clic en la lupa
searchIcon.addEventListener("click", () => {
  searchOverlay.style.display = "flex"; // Muestra el overlay con el input
});

// Volver al estado anterior al hacer clic en la flecha
backIcon.addEventListener("click", () => {
  searchOverlay.style.display = "none"; // Oculta el overlay
});


//----------------------------CARRITO------------------------------------------------
// Elementos del carrito
let cart = []; // Aquí guardamos los productos añadidos
const cartIcon = document.getElementById('cart-icon');

// Función para añadir productos al carrito
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', function (event) {
    event.preventDefault();
    
    const productName = this.getAttribute('data-product');
    const productPrice = parseFloat(this.getAttribute('data-price'));
    
    // Añadir al carrito
    cart.push({ name: productName, price: productPrice });
    
    // Mostrar el carrito con la cantidad de productos
    cartIcon.classList.add('active');
    
    
    // Animación de añadir al carrito (puedes personalizarla más)
    animateCartAddition(this);
    updateCartIcon();
  });
});

// Animación del botón cuando se hace click
function animateCartAddition(button) {
  const buttonPosition = button.getBoundingClientRect();
  const cartIconPosition = cartIcon.getBoundingClientRect();
  
  const animationElement = document.createElement('div');
  animationElement.classList.add('cart-animation');
  document.body.appendChild(animationElement);

  animationElement.style.left = `${buttonPosition.left + window.scrollX}px`;
  animationElement.style.top = `${buttonPosition.top + window.scrollY}px`;

  // Animar el movimiento del producto al carrito
  setTimeout(() => {
    animationElement.style.left = `${cartIconPosition.left + window.scrollX}px`;
    animationElement.style.top = `${cartIconPosition.top + window.scrollY}px`;
    animationElement.style.opacity = '0';
  }, 10);

  // Eliminar la animación después de un tiempo
  setTimeout(() => {
    animationElement.remove();
  }, 1000);
}

// Actualizar el número de productos en el carrito
function updateCartIcon() {
  cartIcon.innerHTML = `${cart.length}`;
}

// Función para agregar producto al carrito
function agregarAlCarrito(nombre, precio, imagen) {
  // Obtener el carrito actual desde localStorage o iniciar un array vacío
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

  // Buscar si el producto ya existe en el carrito
  const productoExistente = carrito.find(producto => producto.nombre === nombre);

  if (productoExistente) {
    // Si existe, incrementamos la cantidad
    productoExistente.cantidad += 1;
  } else {
    // Si no existe, lo agregamos con cantidad 1
    const nuevoProducto = {
      nombre: nombre,
      precio: precio,
      imagen: imagen,
      cantidad: 1
    };
    carrito.push(nuevoProducto);
  }

  // Guardar el carrito actualizado en localStorage
  localStorage.setItem('carrito', JSON.stringify(carrito));
  actualizarIconoCarrito();
}


// Función para actualizar el ícono del carrito
function actualizarIconoCarrito() {
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  // Sumar la cantidad de cada producto
  const cantidadTotal = carrito.reduce((total, producto) => total + (producto.cantidad || 1), 0);
  const iconoCarrito = document.getElementById('cart-icon');
  iconoCarrito.setAttribute('data-count', cantidadTotal);
}


// Asegurarse de que el ícono del carrito se actualice al cargar la página
document.addEventListener('DOMContentLoaded', function() {
  actualizarIconoCarrito();
});