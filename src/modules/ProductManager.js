const url = "http://localhost:8000"

const token = sessionStorage.getItem('ecommerce_token')

export default {
    addProduct(product) {
        return fetch(`${url}/products`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Authorization": `Token ${token}`
            },
            body: product
        }).then(resp => resp.json())
    },
    getProduct(productId) {
        return fetch(`${url}/products/${productId}`).then(resp => resp.json())
    },
    getAllProducts() {
        return fetch(`${url}/products`).then(resp => resp.json())
    },
    getFilteredProducts(location) {
        return fetch(`${url}/products?location=${location}`).then(resp => resp.json())
    },
    getProductByNameFilter(product) {
        return fetch(`${url}/products?title=${product}`).then(resp => resp.json())
    }
}