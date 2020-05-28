const baseUrl = "http://localhost:8000"
const token = sessionStorage.getItem("ecommerce_token")

export default{
    getPaymentTypes() {
        return fetch(`${baseUrl}/payment_types`, {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Authorization": `Token ${token}`
            }
        })
        .then(response => response.json())
    },
    addPayment(payment) {
        return fetch(`${baseUrl}/payment_types`, {
            "method": "POST",
            "headers": {
                "Content-Type": 'application/json',
                "Accept": "application/json",
                "Authorization": `Token ${token}`
            },
            body: JSON.stringify(payment)
        }).then(resp => resp.json())
    }
}