const url = "http://localhost:8000"

const token = sessionStorage.getItem('ecommerce_token')

export default {

    completeOrder(order) {
        return fetch(`${url}/orders/${order.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Token ${token}`
            },
            body: JSON.stringify(order)
        }).then(resp => resp.json())
    },
    getOrders() {
        return fetch(`${url}/orders`).then(resp => resp.json())
    }
}