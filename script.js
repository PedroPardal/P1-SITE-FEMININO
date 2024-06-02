document.getElementById('addProductForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio do formulário
  
  // Obter valores dos campos
  var productName = document.getElementById('productNameInput').value;
  var productPrice = document.getElementById('productPriceInput').value;
  var productImage = document.getElementById('productImageInput').value;
  var productSize = document.getElementById('productSize').value;
  var productDescription = document.getElementById('productDescriptionInput').value;
  
  // Criar um novo elemento de produto
  var newProduct = document.createElement('div');
  newProduct.classList.add('product');
  newProduct.innerHTML = `
      <img src="${productImage}" alt="" class="productImage">
      <h2 class="productName">${productName}</h2>
      <p class="productSize">Tamanho: ${productSize}</p>
      <p class="productDescription">${productDescription}</p>
      <h3 class="productPrice">R$ ${productPrice}</h3>
      <button class="comprebutton">COMPRE AGORA</button>
  `;
  
  // Adicionar o novo produto à lista de produtos
  document.getElementById('productList').appendChild(newProduct);

  // Resetar o formulário
  document.getElementById('addProductForm').reset();
});

const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // Altera o slide atual
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    // Altera o produto escolhido
    choosenProduct = products[index];
  });
});

