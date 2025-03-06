const url = "https://www.numier.com/kiosco/api/business?name=sevillafcespt00101";

axios.get(url).then((response) => {
  const { nameShow, logo } = response.data.data;
  document.getElementById("businessLogo").src = logo;
  document.getElementById("businessName").textContent = nameShow;
});

fetch(
  "https://www.numier.com/kiosco/api/product?idBusinessInfo=262&lang=es&idParentCategory=0&catalog=R&typeProject=PEDIDOS"
)
  .then((response) => response.json())
  .then((data) => {
    const categorias = data.data.content;
    const productList = document.querySelector(".content"); // Contenedor principal

    categorias.forEach((categoria) => {
      // Normalizar nombre de categoría para IDs
      const categoriaId = categoria.name
        .normalize("NFD") // Descompone tildes
        .replace(/[\u0300-\u036f]/g, "") // Elimina tildes
        .toLowerCase()
        .replace(/\s+/g, "-"); // Reemplaza espacios con guiones

      // Crear título de categoría y contenedor
      const categoriaSection = document.createElement("section");
      categoriaSection.id = categoriaId;
      categoriaSection.innerHTML = `
        <h1>${categoria.name}</h1>
        <hr>
        <div class="product-container"></div>
      `;

      productList.appendChild(categoriaSection);

      const categoryContainer = categoriaSection.querySelector(".product-container");

      // Agregar productos a la categoría
      categoria.products.forEach((producto) => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        const productName = producto.name || "Producto sin nombre";
        const productDescription = producto.description || "Sin descripción";
        const productPrice = producto.rates[0]?.price
          ? `$${producto.rates[0].price}`
          : "Precio no disponible";
        const productImage =
          producto.image || "https://via.placeholder.com/150";

        productCard.innerHTML = `
          <img src="${productImage}" alt="${productName}">
          <h3>${productName}</h3>
          <p>${productDescription}</p>
          <div class="price"><span>${productPrice}</span></div>
          <button class="add-to-cart" data-name="${productName}" data-price="${productPrice}">Añadir al carrito</button>
        `;

        categoryContainer.appendChild(productCard);
      });
    });


    // Inicializar carrito
// Inicializar carrito
const cart = [];

// Elementos del DOM
const cartButton = document.getElementById("cartButton");
const cartCount = document.getElementById("cartCount");
const cartModal = document.getElementById("cartModal");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const closeCartButton = document.getElementById("closeCartButton");
const emptyCartButton = document.getElementById("emptyCartButton");
const checkoutButton = document.getElementById("checkoutButton");

// Mostrar el carrito
cartButton.addEventListener("click", () => {
  cartModal.style.display = "block";
  renderCart();
});

// Cerrar el carrito
closeCartButton.addEventListener("click", () => {
  cartModal.style.display = "none";
});

// Vaciar el carrito
emptyCartButton.addEventListener("click", () => {
  cart.length = 0;
  renderCart();
});

// Comprar (solo muestra mensaje por ahora)
checkoutButton.addEventListener("click", () => {
  alert("Gracias por tu compra!");
  cart.length = 0; // Vaciar carrito después de la compra
  renderCart();
});

// Renderizar carrito
function renderCart() {
  cartItems.innerHTML = ""; // Limpiar contenido del carrito
  let total = 0;
  
  if (cart.length === 0) {
    cartItems.innerHTML = "<p>El carrito está vacío.</p>";
  } else {
    cart.forEach((item, index) => {
      const cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");
      cartItem.innerHTML = `
        <p>${item.name} - $${item.price} x ${item.quantity}</p>
        <button class="increaseQuantity" data-index="${index}">+</button>
        <button class="decreaseQuantity" data-index="${index}">-</button>
        <button class="removeItem" data-index="${index}">Eliminar</button>
      `;
      cartItems.appendChild(cartItem);
      total += item.price * item.quantity;
    });
  }

  // Actualizar total
  cartTotal.textContent = total.toFixed(2);
  
  // Mostrar número de productos en el carrito
  cartCount.textContent = cart.length;
}

// Añadir al carrito
document.addEventListener("click", function (e) {
  if (e.target && e.target.classList.contains("add-to-cart")) {
    const productName = e.target.getAttribute("data-name");
    const productPrice = parseFloat(e.target.getAttribute("data-price").substring(1)); // Quitar el signo $
    
    // Buscar si el producto ya está en el carrito
    const existingProduct = cart.find(item => item.name === productName);
    
    if (existingProduct) {
      // Si ya existe, incrementar cantidad
      existingProduct.quantity += 1;
    } else {
      // Si no existe, añadirlo
      cart.push({ name: productName, price: productPrice, quantity: 1 });
    }

    // Actualizar carrito visualmente
    renderCart();
  }

  // Aumentar cantidad
  if (e.target && e.target.classList.contains("increaseQuantity")) {
    const index = e.target.getAttribute("data-index");
    cart[index].quantity += 1;
    renderCart();
  }

  // Disminuir cantidad
  if (e.target && e.target.classList.contains("decreaseQuantity")) {
    const index = e.target.getAttribute("data-index");
    if (cart[index].quantity > 1) {
      cart[index].quantity -= 1;
      renderCart();
    }
  }

  // Eliminar producto
  if (e.target && e.target.classList.contains("removeItem")) {
    const index = e.target.getAttribute("data-index");
    cart.splice(index, 1); // Eliminar producto del carrito
    renderCart();
  }
});


  })
  .catch((error) => console.log("Error:", error));
