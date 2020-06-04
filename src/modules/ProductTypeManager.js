const baseUrl = "http://localhost:8000"
const token = sessionStorage.getItem("ecommerce_token")

export default {

    getAllProductTypes() {
        return fetch(`${baseUrl}/product_type`, {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Authorization": `Token ${token}`
            }
        })
            .then(resp => resp.json())
    }

}