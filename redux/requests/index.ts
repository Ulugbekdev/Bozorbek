import axios from "axios";

const initial = axios.create({
    baseURL: 'https://api.bozorbek.uz/',
    responseType: 'json'
});

export const homePage = {
    getCategories() {
        return initial.get('products/categories').then((res) => res.data)
    },
    getDiscountProducts() {
        return initial.get('products/discount_products').then((res) => res.data.results)
    }
}