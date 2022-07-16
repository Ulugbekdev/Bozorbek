import ProductSale from './ProductSale';
import styles from '../../../styles/ProductsSales.module.sass';

const ProductsSales = (props: any) => {
    return (
        <div className={styles.products__wrapper}>
            <ProductSale popular={true}/>
            <ProductSale/>
            <ProductSale/>
            <ProductSale/>

            <ProductSale/>
            <ProductSale/>
            <ProductSale popular={true}/>
            <ProductSale/>

            <ProductSale/>
            <ProductSale popular={true}/>
            <ProductSale/>
            <ProductSale/>

            <ProductSale/>
            <ProductSale/>
            <ProductSale/>
            <ProductSale popular={true}/>
        </div>
    )
};

export default ProductsSales;