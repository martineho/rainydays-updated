const url = "http://martineho.com/noroff/wp-json/wc/store/products";
const corsFixUrl = "https://noroffcors.herokuapp.com/" + url;
const container = document.querySelector(".products-container");

async function fetchProducts() {
    const response = await fetch(corsFixUrl);
    const results = await response.json();

    console.log(results);

    const products = results;

    container.innerHTML = "";

    for (let i = 0; i < products.length; i++) {

      if (i === 4) {
        break;
      }

      container.innerHTML +=
      `<div class="product">
                <div class="colors">
                    <div id="color1" class="color"></div>
                    <div id="color2" class="color"></div>
                    <div id="color3" class="color"></div>
                    <div id="color4" class="color"></div>
                </div>
          <a href="details.html?id=${products[i].id}" class="product-img">
              <img src="${products[i].images[0].src}">
            </a>
                  <div class="product-description">
                  <div class="product">
                      <div class="title">${products[i].name}</div>
                      <div class="price">${products[i].prices.price} NOK</div>
                      <div class="color-information">4 colours</div>
                  </div>
              </div>
          </div>`;

}

}
fetchProducts();

