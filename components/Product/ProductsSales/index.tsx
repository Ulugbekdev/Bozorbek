import { CgChevronDoubleDown } from 'react-icons/cg';
import styles from '../../../styles/ProductsSales.module.sass';
import { arrayProducts } from './arrayProducts';

const ProductsSales = (props: any) => {
    return (
        <div className={styles.products}>
            <h1 className={styles.products__title}>Вкусные скидки:</h1>
            <h2 className={styles.products__subtitle}>Ежемесячные скидки</h2>
            <div className={styles.products__wrapper}>
                {arrayProducts(props.products)}
            </div>
            <div className={styles.products__more}>
                <button className={styles.products__more__btn}>Увидеть больше</button>
                <CgChevronDoubleDown className={styles.products__more__icon} />
            </div>
        </div>
    )
};

export default ProductsSales;