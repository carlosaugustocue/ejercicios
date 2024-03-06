function displayMenu() {
    const selectedRestaurant = document.getElementById('restaurantSelect').value;
    const menus = document.getElementsByClassName('menu');
    for (const menu of menus) {
        menu.style.display = 'none'; // Ocultar todos los menús
    }
    if (selectedRestaurant) {
        document.getElementById(selectedRestaurant + 'Menu').style.display = 'block'; // Mostrar menú seleccionado
    }
}


//creame una funcion que me connecte a una api de la nasasa y me traiga la imagen del dia
// function getNasaImage() {
//     fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=zWC5Irwi8IAqvCfWKmdsQ6qUGR4S1aLbQn9T0iKQ')
//         .then(response => response.json())
//         .then(data => {
//             const imagesDiv = document.getElementById('nasaImage');
//             imagesDiv.innerHTML = '';

//             // Asegúrate de que hay fotos disponibles
//             if (data.photos && data.photos.length > 0) {
//                 // Iterar a través de todas las fotos devueltas
//                 data.photos.forEach(photo => {
//                     // Crear un nuevo elemento de imagen
//                     const img = document.createElement('img');
//                     img.src = photo.img_src; // Establecer la fuente de la imagen
//                     img.className = 'nasaImages'; // Aplicar la clase a la imagen
//                     img.alt = "Mars Photo by Curiosity"; // Texto alternativo para la imagen
//                     imagesDiv.appendChild(img); // Agregar la imagen al div
//                 });
//             } else {
//                 // Si no hay fotos, muestra un mensaje
//                 imagesDiv.innerHTML = 'No photos available for this date.';
//             }
//         })
//         .catch(error => console.error('Error:', error));
// }

getNasaImage();


function calculateTotal() {
    const prices = { 'simpleBurgerQty': 25000, 'familyPizzaQty': 85000, 'chickenNoodlesQty': 18000 };
    let subtotal = 0;
    for (const [item, price] of Object.entries(prices)) {
        const qty = document.getElementById(item) ? parseInt(document.getElementById(item).value, 10) || 0 : 0;
        subtotal += qty * price;
    }
    const shippingCost = 5000;
    let total = 0
    total = subtotal + shippingCost;
    
    if (subtotal < 23000) {
        document.getElementById('orderSummary').innerHTML = 'El pedido mínimo debe ser de $23.000.';
    } else {
        document.getElementById('orderSummary').innerHTML = `<strong>Resumen del Pedido:</strong>
            <p>Subtotal: $${subtotal}</p>
            <p>Costo de envío: $${shippingCost}</p>
            <p>Total: $${total}</p>
            <p>Tiempo estimado de entrega: 45 minutos a 1 hora</p>`;
    }
}
