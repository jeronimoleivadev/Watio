let productos = [
    { nombre: "Heladera Gafa", precio: 450000, categoria: "Electrodomestico", imagen: "img/heladera-gafa.jpg" },
    { nombre: "Microondas", precio: 100000, categoria: "Electrodomestico", imagen: "" }
];

const contenedor = document.querySelector(".productos");

productos.forEach((producto) => {
    const tarjeta = document.createElement("article");
    tarjeta.classList.add("producto");
    tarjeta.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}" class="producto-img">
        <div class="producto-info">
            <h3>${producto.nombre}</h3>
            <p class="precio">$${producto.precio}</p>
            <button class="btn">Agregar al carrito</button>
        </div>
    `;

    const boton = tarjeta.querySelector(".btn");

    boton.addEventListener("click", () => {
        console.log("Agregaste: " + producto.nombre);
    });

    contenedor.appendChild(tarjeta);
});