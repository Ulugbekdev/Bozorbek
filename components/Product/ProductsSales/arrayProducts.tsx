import ProductSale from './ProductSale';

export const arrayProducts = (products: any) => {
    return products.map((el: any, index: any) => {
        return <ProductSale unit={el.unit} product={el} key={index} />
    })
};