const baseUrl = "http://localhost:8000"

export default{
    getPaymentTypes() {
        return fetch(`${baseUrl}/payment_types`, {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Authorization": `Token ${sessionStorage.getItem("ecommerce_token")}`
            }
        })
        .then(response => response.json())
    }
}