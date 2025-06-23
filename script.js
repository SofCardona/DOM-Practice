// =========================
// CREACIÓN DEL HEADER
// =========================

// Crear el elemento <header>
const header = document.createElement("header");

// Crear la barra de navegación <nav>
const nav = document.createElement("nav");
nav.style.display = "flex";
nav.style.alignItems = "center";
nav.style.padding = "8px";
nav.style.background = "red";

// Crear la lista de navegación <ul>
const navList = document.createElement("ul");
navList.style.display = "flex";
navList.style.marginLeft = "16px";

// Crear el logo <img>
const imgLogo = document.createElement("img");
imgLogo.src = "assets/img/logo.svg";
imgLogo.style.height = "60px";

// Crear enlaces del menú de navegación
const links = ["Inicio", "Pokédex", "Contacto"];
links.forEach(texto => {
  const li = document.createElement("li");
  li.style.listStyle = "none";
  li.style.marginInline = "10px";

  const a = document.createElement("a");
  a.href = "#";
  a.innerText = texto;
  a.style.textDecoration = "none";

  li.appendChild(a);
  navList.appendChild(li);
});

// Crear botón para modo oscuro
const darkModeButton = document.createElement("button");
darkModeButton.innerText = "Dark Mode";
darkModeButton.style.cssText = `
  width: 100px;
  height: 40px;
  background-color: black;
  color: white;
  border-radius: 8px;
  font-weight: bold;
  font-size: 16px;
  margin-left: 1050px;
`;
darkModeButton.addEventListener("click", darkMode);

// Estructura final del header
nav.appendChild(imgLogo);
nav.appendChild(navList);
nav.appendChild(darkModeButton);
header.appendChild(nav);
document.body.appendChild(header);

// =========================
// CREACIÓN DEL MAIN Y SECCIÓN PRINCIPAL
// =========================

const main = document.createElement("main");

// Sección que contendrá las imágenes
const section1 = document.createElement("section");
section1.style.cssText = `
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Botón para mostrar más imágenes
const verMasButton = document.createElement("button");
verMasButton.innerText = "Ver más";
verMasButton.style.cssText = `
  width: 100px;
  height: 50px;
  margin-top: 30px;
  background-color: gray;
  color: white;
  border-radius: 8px;
  font-weight: bold;
  font-size: 16px;
`;
verMasButton.addEventListener("click", mostrarImagenes);

// Contenedores de imágenes (1 = visibles, 2 y 3 = dinámicos)
const divContainer = document.createElement("div");
const divImageContainer1 = document.createElement("div");
const divImageContainer2 = document.createElement("div");
const divImageContainer3 = document.createElement("div");

// Estilos para cada contenedor de imágenes
[divImageContainer1, divImageContainer2, divImageContainer3].forEach(div => {
  div.style.cssText = `
    display: flex;
    justify-content: center;
    margin-top: 30px;
  `;
});

// Primera tanda de imágenes
const imagenes1 = [
  { normal: "assets/img/bal1.jpg", hover: "assets/img/bal2.jpg" },
  { normal: "assets/img/bul1.jpg", hover: "assets/img/bul2.jpg" },
  { normal: "assets/img/chi1.jpg", hover: "assets/img/chi2.jpg" },
  { normal: "assets/img/lap1.jpg", hover: "assets/img/lap2.jpg" }
];

// Mostrar imágenes iniciales
imagenes1.forEach(({ normal, hover }) => {
  const img = document.createElement("img");
  img.src = normal;
  img.alt = "Pokémon";
  img.width = 300;
  img.setAttribute("data-normal", normal);
  img.setAttribute("data-hover", hover);
  img.classList.add("pokemon-img");

  // Cambiar imagen al hacer hover
  img.addEventListener("mouseenter", () => {
    img.src = img.getAttribute("data-hover");
  });
  img.addEventListener("mouseleave", () => {
    img.src = img.getAttribute("data-normal");
  });

  divImageContainer1.appendChild(img);
});

// Estructura de la sección principal
divContainer.appendChild(divImageContainer1);
divContainer.appendChild(divImageContainer2);
divContainer.appendChild(divImageContainer3);
section1.appendChild(verMasButton);
section1.appendChild(divContainer);
main.appendChild(section1);
document.body.appendChild(main);

// =========================
// FOOTER
// =========================

const footer = document.createElement("footer");
footer.style.cssText = `
  background: red;
  text-align: center;
  padding: 1rem;
  width: 100%;
  position: fixed;
  bottom: 0;
`;

const footerParagraph = document.createElement("p");
footerParagraph.innerText = "2025 Pokémon Company. Todos los derechos reservados.";
footerParagraph.style.color = "white";

footer.appendChild(footerParagraph);
document.body.appendChild(footer);
document.body.style.height = "100dvh";

// =========================
// FUNCIONALIDAD EXTRA
// =========================

// Segunda y tercera tanda de imágenes
const imagenes2 = [
  { normal: "assets/img/leaf1.jpg", hover: "assets/img/leaf2.jpg" },
  { normal: "assets/img/oddish1.jpg", hover: "assets/img/oddish2.jpg" },
  { normal: "assets/img/ol1.jpg", hover: "assets/img/ol2.jpg" },
  { normal: "assets/img/pik1.jpg", hover: "assets/img/pik2.jpg" }
];

const imagenes3 = [
  { normal: "assets/img/snor1.jpg", hover: "assets/img/snor2.jpg" },
  { normal: "assets/img/spr1.jpg", hover: "assets/img/spri2.jpg" },
  { normal: "assets/img/tow1.jpg", hover: "assets/img/tow2.jpg" },
  { normal: "assets/img/ts1.jpg", hover: "assets/img/ts2.jpg" }
];

// Control de estado del botón "Ver más"
let pasoActual = 1;

// Función para mostrar imágenes en etapas
function mostrarImagenes() {
  if (pasoActual === 1) {
    imagenes2.forEach(({ normal, hover }) => {
      const img = crearImagen(normal, hover);
      divImageContainer2.appendChild(img);
    });
    pasoActual = 2;
    verMasButton.innerText = "Ver más";
  } else if (pasoActual === 2) {
    imagenes3.forEach(({ normal, hover }) => {
      const img = crearImagen(normal, hover);
      divImageContainer3.appendChild(img);
    });
    pasoActual = 3;
    verMasButton.innerText = "Ver menos";
  } else {
    // Reiniciar y ocultar imágenes extra
    divImageContainer2.innerHTML = "";
    divImageContainer3.innerHTML = "";
    pasoActual = 1;
    verMasButton.innerText = "Ver más";
  }
}

// Función reutilizable para crear imágenes con efecto hover
function crearImagen(normal, hover) {
  const img = document.createElement("img");
  img.src = normal;
  img.alt = "Pokémon";
  img.width = 300;
  img.setAttribute("data-normal", normal);
  img.setAttribute("data-hover", hover);
  img.classList.add("pokemon-img");
  img.addEventListener("mouseenter", () => {
    img.src = img.getAttribute("data-hover");
  });
  img.addEventListener("mouseleave", () => {
    img.src = img.getAttribute("data-normal");
  });
  return img;
}

// =========================
// FUNCIÓN MODO OSCURO
// =========================

let backgroundActual = true;

function darkMode() {
  if (backgroundActual) {
    document.body.style.backgroundColor = "black";
    darkModeButton.innerText = "Light Mode";
  } else {
    document.body.style.backgroundColor = "white";
    darkModeButton.innerText = "Dark Mode";
  }
  backgroundActual = !backgroundActual;
}