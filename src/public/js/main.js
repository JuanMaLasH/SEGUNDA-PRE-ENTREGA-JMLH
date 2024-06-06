const socket = io();

socket.on("productos", (data) => {
    renderProductos(data);
})

const renderProductos = (productos) => {
    const contenedorProductos = document.getElementById("contenedorProductos");
    contenedorProductos.innerHTML = "";
    productos.forEach(item => {
        const card = document.createElement("div");
        card.innerHTML = `
                        <div class="card-body2">    
                            <p> <strong>${item.title}</strong></p><br>
                            <p> <strong>ID:</strong> ${item.id} </p>
                            <p> <strong>Descripción:</strong>  ${item.description} </p>
                            <p> <strong>Categoría:</strong>  ${item.category} </p>
                            <p> <strong>Código:</strong>  ${item.code} </p>
                            <p> <strong>Stock:</strong>  ${item.stock} </p>
                            <p> <strong>Precio:</strong> $${item.price} </p><br>
                            <button> Eliminar producto </button>
                        </div>    
                        `;
        contenedorProductos.appendChild(card);
        card.querySelector("button").addEventListener("click", () => {
            eliminarProducto(item.id)
        }) 
    })
}

const eliminarProducto = (id) => {
    socket.emit("eliminarProducto", id);
}

document.getElementById("btnEnviar").addEventListener("click", () => {
    agregarProducto();
})

const agregarProducto = () => {
    const producto = {
        title: document.getElementById("title").value,
        description: document.getElementById("description").value,
        price: document.getElementById("price").value,
        thumbnail: document.getElementById("thumbnail").value,
        code: document.getElementById("code").value,
        stock: document.getElementById("stock").value,
        category: document.getElementById("category").value,
    };
    socket.emit("agregarProducto", producto);
}