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
    }
}