const boton = document.getElementById("cargar");
const contenedor = document.getElementById("contenedor");

boton.addEventListener("click", cargarPeliculas);

function cargarPeliculas() {

    const peliculasJSON = `[
        {
            "titulo": "Mi vecino Totoro",
            "anio": 1988,
            "director": "Hayao Miyazaki",
            "descripcion": "Dos niñas descubren criaturas mágicas en el bosque cercano a su casa.",
            "imagen": "imagenes/totoro.jpg"
        },
        {
            "titulo": "El viaje de Chihiro",
            "anio": 2001,
            "director": "Hayao Miyazaki",
            "descripcion": "Una niña queda atrapada en un mundo de espíritus y debe salvar a sus padres.",
            "imagen": "imagenes/chihiro.jpg"
        },
        {
            "titulo": "La princesa Mononoke",
            "anio": 1997,
            "director": "Hayao Miyazaki",
            "descripcion": "Un joven se ve envuelto en una guerra entre humanos y espíritus del bosque.",
            "imagen": "imagenes/mononoke.jpg"
        },
        {
            "titulo": "El castillo ambulante",
            "anio": 2004,
            "director": "Hayao Miyazaki",
            "descripcion": "Una joven es transformada en anciana y busca romper la maldición.",
            "imagen": "imagenes/castillo.jpg"
        },
        {
            "titulo": "Ponyo en el acantilado",
            "anio": 2008,
            "director": "Hayao Miyazaki",
            "descripcion": "Una pez mágica quiere convertirse en humana tras conocer a un niño.",
            "imagen": "imagenes/ponyo.jpg"
        },
        {
            "titulo": "El viento se levanta",
            "anio": 2013,
            "director": "Hayao Miyazaki",
            "descripcion": "Historia inspirada en el ingeniero que diseñó aviones en Japón.",
            "imagen": "imagenes/viento.jpg"
        }
    ]`;

    const peliculas = JSON.parse(peliculasJSON);

    contenedor.innerHTML = "";

    peliculas.forEach(pelicula => {
        contenedor.innerHTML += `
            <div class="card">
                <img src="${pelicula.imagen}" alt="${pelicula.titulo}">
                <h3>${pelicula.titulo}</h3>
                <p><strong>Año:</strong> ${pelicula.anio}</p>
                <p><strong>Director:</strong> ${pelicula.director}</p>
                <p>${pelicula.descripcion}</p>
            </div>
        `;
    });
}