import ProductSale from './ProductSale';
import { CgChevronDoubleDown } from 'react-icons/cg';
import styles from '../../../styles/ProductsSales.module.sass';

const ProductsSales = (props: any) => {
    return (
        <div className={styles.products}>
            <h1 className={styles.products__title}>Вкусные скидки:</h1>
            <h2 className={styles.products__subtitle}>Ежемесячные скидки</h2>
            <div className={styles.products__wrapper}>
                <ProductSale popular={true} />
                <ProductSale />
                <ProductSale />
                <ProductSale />

                <ProductSale />
                <ProductSale />
                <ProductSale popular={true} />
                <ProductSale />

                <ProductSale />
                <ProductSale popular={true} />
                <ProductSale />
                <ProductSale />

                <ProductSale />
                <ProductSale />
                <ProductSale />
                <ProductSale popular={true} />
            </div>
            <div className={styles.products__more}>
                <button className={styles.products__more__btn}>Увидеть больше</button>
                <CgChevronDoubleDown className={styles.products__more__icon} />
            </div>
        </div>
    )
};

export default ProductsSales;