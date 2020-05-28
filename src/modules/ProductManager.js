const url = "http://localhost:8000"

const token = sessionStorage.getItem('ecommerce_token')

export default {
    addProduct(product) {
        return fetch(`${url}/products`, {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
                "Accept": "application/json",
                "Authorization": `Token ${token}`
            },
            body: JSON.stringify(product)
        }).then(resp => resp.json())
    },
    getAllProducts() {
        return fetch(`${url}/products`).then(resp => resp.json())
    },
    getFilteredProducts(location) {
        return fetch(`${url}/products?location=${location}`).then(resp => resp.json())
    }

}