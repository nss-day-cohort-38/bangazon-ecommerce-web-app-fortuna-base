const baseUrl = "http://localhost:8000"
const token = sessionStorage.getItem("ecommerce_token")

export default {

    getAllOrderProducts() {
        return fetch(`${baseUrl}/order_products`, {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Authorization": `Token ${token}`
            }
        })
        .then(response => response.json())
    },
    deleteOrderProduct(id) {
        return fetch(`${baseUrl}/order_products/${id}`, {
            "method": "DELETE",
            "headers": {
                "Authorization": `Token $${token}`
            }
        })
    }


}