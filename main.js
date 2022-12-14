const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenuIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const productDetailAside = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
mobileMenuIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  // productDetailAside barra latera de carrito
  const isAsideClose = productDetailAside.classList.contains("inactive");

  if (!isAsideClose) {
    productDetailAside.classList.add("inactive");
  }

  mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside() {
  // mobileMenu la barra de navegación de version mobile
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }

  productDetailAside.classList.toggle("inactive");
}

// CREAR LISTA DE PRODUCTOS
const productList = [];
productList.push({
  name: "Bike1",
  price: 120,
  img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Bike2",
  price: 220,
  img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Bike3",
  price: 320,
  img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

function renderProducts(arr) {
  for (product of arr) {
    // creo los div con sus clase y atributos
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.img);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;

    const productName = document.createElement("p");
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement("figure");
    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);
