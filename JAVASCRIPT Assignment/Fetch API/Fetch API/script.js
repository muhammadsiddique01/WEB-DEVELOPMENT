let output = document.getElementById("output");

function fetchData() {
  fetch("https://dummyjson.com/products?limit=5")
    .then(response => response.json())
    .then(data => {
      output.innerHTML = ""; // Clear old data

      data.products.forEach(product => {
        output.innerHTML += `
          <h3>${product.title}</h3>
          <p><strong>Brand:</strong> ${product.brand}</p>
          <p><strong>Category:</strong> ${product.category}</p>
          <p><strong>Price:</strong> $${product.price}</p>
          <p><strong>Rating:</strong> ${product.rating}</p>
          <img src="${product.thumbnail}" alt="Product Image" width="200">
          <hr/>
        `;
      });
    })
    .catch(error => {
      output.innerHTML = "Error fetching data: " + error;
    });
}
