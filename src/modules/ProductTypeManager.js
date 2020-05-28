const localURL = "http://localhost:8000"

export default {

    getAllProductTypes() {
        return fetch(`${localURL}/product_type`)
            .then(resp => resp.json())
    },

}