// Sample product data
const products = [
    { name: "Century Eggs", expiryDate: "1923-01-01" },
    { name: "Heinz Tomato Sauce", expiryDate: "2024-01-01" },
];

function displayProducts() {
    const productList = document.getElementById("productList");
    productList.innerHTML = "";

    // Sort products by expiry date
    const sortedProducts = products.slice().sort((a, b) => {
        return new Date(a.expiryDate) - new Date(b.expiryDate);
    });

    sortedProducts.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <span>${product.name} (Expiry Date: ${product.expiryDate})</span>
            <button onclick="removeProduct('${product.name}')">Remove</button>
        `;
        productList.appendChild(productDiv);
    });
}
// Function to add a new product
function addProduct() {
    const productName = document.getElementById("productName").value;
    const expiryDate = document.getElementById("expiryDate").value;

    if (productName && expiryDate) {
        const newProduct = { name: productName, expiryDate: expiryDate };
        products.push(newProduct);
        displayProducts();
    } else {
        alert("Please enter product name and expiry date.");
    }
}

// Function to remove a product
function removeProduct(productName) {
    const index = products.findIndex(product => product.name === productName);
    if (index !== -1) {
        products.splice(index, 1);
        displayProducts();
    }
}