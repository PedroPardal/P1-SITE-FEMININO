document.getElementById('addProductForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio do formulário
  
  // Obter valores dos campos
  var productName = document.getElementById('productNameInput').value.trim();
  var productPrice = document.getElementById('productPriceInput').value.trim();
  var productImage = document.getElementById('productImageInput').value.trim();
  var productSize = document.getElementById('productSize').value.trim();
  var productDescription = document.getElementById('productDescriptionInput').value.trim();
  
  // Verificar se algum campo está vazio
  if (productName === '' || productPrice === '' || productImage === '' || productSize === '' || productDescription === '') {
    alert('Por favor, preencha todos os campos antes de adicionar o produto.');
    return; // Retorna sem adicionar o produto
  }
  
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

// Função para filtrar os produtos com base no texto de pesquisa
function filterProducts() {
  const searchInput = document.getElementById('searchInput').value.toLowerCase();
  const products = document.querySelectorAll('.product');

  products.forEach(product => {
      const productName = product.querySelector('.productName').textContent.toLowerCase();
      if (productName.includes(searchInput)) {
          product.style.display = 'block'; // Exibir produto se o nome corresponder ao texto de pesquisa
      } else {
          product.style.display = 'none'; // Ocultar produto se o nome não corresponder ao texto de pesquisa
      }
  });
}

// Evento de escuta para detectar mudanças na barra de pesquisa
document.getElementById('searchInput').addEventListener('input', filterProducts);
