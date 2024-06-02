document.getElementById('addProductForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita o comportamento padrão do formulário

  // Captura os valores do formulário
  const productName = document.getElementById('productNameInput').value;
  const productPrice = document.getElementById('productPriceInput').value;
  const productImage = document.getElementById('productImageInput').value;

  // Cria um novo elemento de produto
  const newProduct = `
      <div class="product">
          <img src="${productImage}" alt="${productName}" class="productImage">
          <h2 class="productName">${productName}</h2>
          <h3 class="productPrice">R$ ${productPrice}</h3>
          <button class="comprebutton">COMPRE AGORA</button>
      </div>
  `;

  // Adiciona o novo produto à lista de produtos
  document.getElementById('productList').insertAdjacentHTML('beforeend', newProduct);

  // Limpa o formulário
  document.getElementById('productNameInput').value = '';
  document.getElementById('productPriceInput').value = '';
  document.getElementById('productImageInput').value = '';
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

