const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = "http://martineho.com/noroff/wp-json/wc/store/products/" + id;
const corsFix = "https://noroffcors.herokuapp.com/" + url;
const options = {};

const container = document.querySelector(".product-details");
const title = document.querySelector("title");
const breadcrumbs = document.querySelector(".breadcrumbs");
const modalContent = document.querySelector(".modal-content");

async function fetchProduct() {
    const response = await fetch(corsFix, options);
    const result = await response.json();

    console.log(result);
    const product = result;

    document.title = `Rainydays - ${product.name}`;
    title.innerHTML = `Rainydays - ${product.name}`;

    modalContent.innerHTML += 
        `<button id="closeModal" class="cta-close">Shop more ></button>
        <img alt="" src="${product.images[0].src}">
            <h4 class="title">${product.name}</h4>
            <button id="checkout" class="cta-checkout">Checkout</button>`;

    breadcrumbs.innerHTML += `
                                <ul>
                                    <li><a href="index.html">Home </a></li>
                                    <li><a href="shop.html">Shop </a></li>
                                    <li><a class="active" href="#">${product.name} </a></li>
                                </ul>`;


    container.innerHTML += 
                            ` <div class="container">
                                    <div class="product-img"><img alt="${product.images[0].alt}" src="${product.images[0].src}"></div>
                                    <div class="product-information">
                                        <h1>${product.name}</h1>
                                        
                                        <div class="price">${product.prices.price} NOK</div>

                                        <div class="size-details">
                                            <ul class="size-list">
                                                <li><button id="s" class="size">S</button></li>
                                                <li><button id="m" class="size">M</button></li>
                                                <li><button id="l" class="size">L</button></li>
                                                <li><button id="xl" class="size">XL</button></li>
                                            </ul>
                                            <button class="size-guide">Size guide</button>
                                        </div>
                                        
                                        <button class="add-button">Add to bag</button>

                                        <div class="purchase-details">
                                            <ul>
                                                <li>5 years warranty</li>
                                                <li>Free returns in Norway</li>
                                                <li id="link"><a href="#">Exchange and Shipping </a></li>
                                            </ul>
                                        </div>
                                        
                                    </div>
                                </div>
                        
                            `;

        const addBtn = document.querySelector(".add-button");

        document.getElementById("s").onclick = function () {
            addBtn.style.backgroundColor = "rgb(9, 192, 106)";
        }
        document.getElementById("m").onclick = function () {
            addBtn.style.backgroundColor = "rgb(9, 192, 106)";
        }
        document.getElementById("l").onclick = function () {
            addBtn.style.backgroundColor = "rgb(9, 192, 106)";
        }
        document.getElementById("xl").onclick = function () {
            addBtn.style.backgroundColor = "rgb(9, 192, 106)";
        }

        const signifier = document.querySelector(".added-signifier")
        const modal = document.querySelector(".added-to-bag-modal");

        addBtn.onclick = function () {
            modal.style.display = "flex";
            signifier.style.display = "block";
        }

        document.getElementById("closeModal").onclick = function () {
            modal.style.display = "none";
        }
        


}
fetchProduct();

const hiddenSpecs = document.querySelector(".hidden-specs");

document.getElementById("open-specs").onclick = function () {
    hiddenSpecs.style.display = "block";
}