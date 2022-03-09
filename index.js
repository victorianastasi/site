let nombre = "Victoria ";
let apellido = "Nastasi";
let acuNombre = ``;
let acuApellido = ``;
let i = 0;
let j = 0;
function typing (text, id, acuText, x){
    if(x < text.length){
        acuText += text.charAt(x);
        document.getElementById(`${id}`).innerHTML = acuText;
        setTimeout(() => {
            typing(text, id, acuText, x);
        }, 100);
        x++;
    }
}
typing(nombre, 'nombre', acuNombre, i);
setTimeout(() => {
    typing(apellido, 'apellido', acuApellido, j);
}, 900);

let projects = [
    {nombre: "Ayelen Industria Publicitaria S.A.", carouselId: "carouselAyn", img1: "./img/ayn1.jpg", img2: "./img/ayn2.jpg", img3: "./img/ayn3.jpg", descripcion: "Sitio Web de carteles publicitarios, responsive, utilizando SASS, Bootstrap y animaciones (Animate.css y Animate On Scroll Library).", github:"https://github.com/victorianastasi/proyectoAYN", online:"https://victorianastasi.github.io/proyectoAYN/", links: 2},
    {nombre: "Chinagurumis", carouselId: "carouselChinagurumis", img1: "./img/amigurumis1.jpg", img2: "./img/amigurumis2.jpg", img3: "./img/amigurumis3.png", descripcion: "E-commerce de muñecos tejidos con formulario de contacto (nodemailer) y plataforma de pago (Checkout Pro de MercadoPago).", github:"https://github.com/victorianastasi/amigurumis", online:"https://victorianastasi.github.io/amigurumis/", links: 2},
    {nombre: "Compañia de Macetas", carouselId: "carouselCompania", img1: "./img/compania-a.jpg", img2: "./img/compania-b.jpg", img3: "./img/compania-c.jpg", descripcion: "Página Web dedicada a la venta de macetas pintadas, desarrollada con la estrategia mobile first, y formulario de contacto construido con PHPMailer.", github:"https://github.com/victorianastasi/compania-de-macetas", online:"https://compania-de-macetas.netlify.app/", links: 2},
    {nombre: "Super Fraps", carouselId: "carouselSuperfraps", img1: "./img/superfraps1.JPG", img2: "./img/superfraps2.JPG", img3: "./img/superfraps3.JPG", descripcion: "Sitio Web mobile first dedicado a la venta de Smoothies, Malteadas y Frozen teas, desarrollada junto a Juan Tibaldo. Formulario de contacto construido con PHPMailer.", github:"https://github.com/victorianastasi/superfraps", online:"https://superfrapsform2.000webhostapp.com/", links: 2},
    {nombre: "Puerto Meraki", carouselId: "carouselMeraki", img1: "./img/meraki1.jpg", img2: "./img/meraki2.jpg", img3: "./img/meraki3.jpg", descripcion: "Proyecto ecommerce, dedicado a la venta de cuadros decorativos, construido con Create React App y Firebase.", github:"https://github.com/victorianastasi/puerto-meraki", online:"", links: 1},
    {nombre: "Coffee Shop", carouselId: "carouselCoffeeShop", img1: "./img/coffee-1.JPG", img2: "./img/coffee-2.JPG", img3: "./img/coffee-3.JPG", descripcion: "Página Web sobre venta de productos de cafetería, desarrollada con JavaScript, Bootstrap, estrategia mobile first y envio de pedido a través de WhatsApp.", github:"https://github.com/victorianastasi/coffeeshop", online:"https://coffeeshopvn.netlify.app/", links: 2},
    {nombre: "Lic. Evangelina Ramon", carouselId: "carouselNutri", img1: "./img/lic-a.JPG", img2: "./img/lic-b.JPG", img3: "./img/lic-c.JPG", descripcion: "Sitio Web sobre servicios nutricionales, desarrollado con la estrategia mobile first, Bootstrap, y JavaScript.", github:"https://github.com/victorianastasi/licevangelinaramon", online:"https://licevangelinaramon.netlify.app/", links: 2},
    {nombre: "To Do List", carouselId: "carouselToDoList", img1: "./img/list-1.JPG", img2: "./img/list-2.JPG", img3: "./img/list-3.JPG", descripcion: "Proyecto Lista de tareas, desarrollado con Javascript, utilizando localStorage y estrategia mobile first.", github:"https://github.com/victorianastasi/todolist", online:"https://victorianastasi.github.io/todolist/", links: 2},
    {nombre: "Piedra Papel o Tijera", carouselId: "carouselRPS", img1: "./img/rps1.jpg", img2: "./img/rps2.JPG", img3: "./img/rps3.JPG", descripcion: "Proyecto 'Piedra Papel o Tijera', desarrollado con Javascript, utilizando estrategia mobile first.", github:"https://github.com/victorianastasi/PiedraPapelTijera", online:"https://victorianastasi.github.io/PiedraPapelTijera/", links: 2} 
];

let acu = ``;
for (let i = 0; i < projects.length; i++){
    if(projects[i].links == 1){
        acu += `
        <div class="card">
            <div id="${projects[i].carouselId}" class="carousel slide card-img-top" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#${projects[i].carouselId}" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#${projects[i].carouselId}" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#${projects[i].carouselId}" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src="${projects[i].img1}" class="d-block w-100" alt="${projects[i].nombre}">
                    </div>
                    <div class="carousel-item">
                    <img src="${projects[i].img2}" class="d-block w-100" alt="${projects[i].nombre}">
                    </div>
                    <div class="carousel-item">
                    <img src="${projects[i].img3}" class="d-block w-100" alt="${projects[i].nombre}">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#${projects[i].carouselId}" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previo</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#${projects[i].carouselId}" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Siguiente</span>
                </button>
            </div>
            <div class="card-body">
                <h5 class="card-title">${projects[i].nombre}</h5>
                <p class="card-text">${projects[i].descripcion}</p>
                <p class="card-icons">
                    <a class="btn btn-dark card-icons-unit" href="${projects[i].github}" target="_blank" title="Github Repository"><i class="fab fa-github"></i> Ir a Github</a>
                </p>
            </div>
        </div>
        `;
        }else{
            acu += `
        <div class="card">
            <div id="${projects[i].carouselId}" class="carousel slide card-img-top" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#${projects[i].carouselId}" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#${projects[i].carouselId}" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#${projects[i].carouselId}" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src="${projects[i].img1}" class="d-block w-100" alt="${projects[i].nombre}">
                    </div>
                    <div class="carousel-item">
                    <img src="${projects[i].img2}" class="d-block w-100" alt="${projects[i].nombre}">
                    </div>
                    <div class="carousel-item">
                    <img src="${projects[i].img3}" class="d-block w-100" alt="${projects[i].nombre}">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#${projects[i].carouselId}" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previo</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#${projects[i].carouselId}" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Siguiente</span>
                </button>
            </div>
            <div class="card-body">
                <h5 class="card-title">${projects[i].nombre}</h5>
                <p class="card-text">${projects[i].descripcion}</p>
                <p class="card-icons">
                    <a class="btn btn-dark card-icons-unit" href="${projects[i].github}" target="_blank" title="Github Repository"><i class="fab fa-github"></i> Ir a Github</a>
                    <a class="btn btn-dark card-icons-unit" href="${projects[i].online}" target="_blank" title="Go live"><i class="far fa-eye"></i> Ver online</a>
                </p>
            </div>
        </div>
        `;
        }
    

}
document.getElementById("projects-items").innerHTML = acu;