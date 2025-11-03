let lastScroll = 0;
const header = document.getElementById('main-header');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll && currentScroll > 100) {
    header.classList.add('hide');
  } else {
    header.classList.remove('hide');
  }

  lastScroll = currentScroll;
});

document.addEventListener('DOMContentLoaded', function() {
  const productos=[
    {
      id:1, 
      producto:"Remera", 
      precio: "20.000", 
      img: "./assets/images/1.png"
    },
    {
      id:2, 
      producto:"Remera", 
      precio: "20.000", 
      img: "./assets/images/2.png"
    },
    {id:3, 
      producto:"Remera", 
      precio: "20.000", 
      img: "./assets/images/3.png"
    },
    {
      id:4,
      producto:"Remera", 
      precio: "20.000", 
      img: "./assets/images/4.png"
    },
    {
      id:5, 
      producto:"Musculosa", 
      precio: "20.000", 
      img: "./assets/images/5.png"
    },
    {
      id:6, 
      producto:"Remera", 
      precio: "20.000", 
      img: "./assets/images/6.png"
    }
  ];

  const contenedorPadre = document.querySelector(".contenedor_padre");

  productos.forEach(productos => {
        const card = document.createElement("div");
        card.classList.add("card"); 

        const imagen = document.createElement("img");
        imagen.src = productos.img; 
        card.appendChild(imagen);

        const nombre = document.createElement("h3");
        nombre.textContent = productos.producto; 
        card.appendChild(nombre); 

        const precio = document.createElement("p");
        precio.textContent = `$${productos.precio}`; 
        card.appendChild(precio);

        const btn_card = document.createElement("button");
        btn_card.textContent = "Agregar al carrito";
        btn_card.classList.add("card_btn"); 
        card.appendChild(btn_card);

        btn_card.addEventListener('click', function() {
            agregarAlCarrito(productos);
        });

        contenedorPadre.appendChild(card);
  });

  //const menu = document.getElementById('menu');
  const carritoLink = document.getElementById('carritoLink');
  const carritoMenu = document.getElementById('carritoMenu');
  const salirButton = document.getElementById('salirButton');
  const carritoItems = document.getElementById('carritoItems');
  const vaciar = document.getElementById('btn_vaciar');  

  carritoLink.addEventListener('click', function(event) {
    event.preventDefault(); 
    carritoMenu.style.display = 'block'; 
  });

  salirButton.addEventListener('click', function() {
    carritoMenu.style.display = 'none'; 
  });

  vaciar.addEventListener('click', function() {
    carritoItems.innerHTML = ''; 
  });

  function agregarAlCarrito(productos) {
    const item = document.createElement("li");
    item.classList.add("li_carrito");
    item.textContent =  `${productos.producto} - $${productos.precio}`; 

    const eliminarBtn = document.createElement("button");
    eliminarBtn.textContent = "Eliminar";
    eliminarBtn.classList.add("btn_carrito");

    eliminarBtn.addEventListener('click', function() {
      carritoItems.removeChild(item);
      actualizarTotal();
    });

    item.appendChild(eliminarBtn);
    carritoItems.appendChild(item);

    actualizarTotal();
  }

  function actualizarTotal() {
  let total = 0;

  const items = carritoItems.querySelectorAll(".li_carrito");
  items.forEach(item => {
    const texto = item.textContent;
    const match = texto.match(/\$([\d.,]+)/); 
    if (match) {
      const precio = parseFloat(match[1].replace('.', '').replace(',', '.'));
      total += precio;
    }
  });

  let totalConDescuento = total;
  let mensajeDescuento = "";

  if (total > 59999) {
    totalConDescuento = total * 0.7;
    mensajeDescuento = " (30% OFF aplicado)";
  }

 totalElemento.textContent = `Total: $${totalConDescuento.toLocaleString('es-AR')}${mensajeDescuento}`;
}




});