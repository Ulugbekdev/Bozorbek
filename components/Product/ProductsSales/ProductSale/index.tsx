import Image from 'next/image';
import { BsBag } from 'react-icons/bs';
import { baseUrl } from '../../../../redux/variables';
import styles from '../../../../styles/ProductSale.module.sass';

const ProductSale = (props: any) => {
    return (
        <div className={styles.product}>
            <div className={styles.product__content}>
                <h3 className={styles.product__title}>{props.product.name}</h3>
                <div className={styles.product__sale}>
                    <span className={styles.product__sale_discount}>Скидки</span>
                    <span className={styles.product__sale_popular}>Популярное</span>
                </div>
                <hr className={styles.product__hr} />
                <div className={styles.product__price}>
                    <p className={styles.product__price_old}>{props.product.max_price} <span>сум/кг</span></p>
                    <p className={styles.product__price_new}>{props.product.price} <span>сум/кг</span></p>
                </div>
            </div>
            <div className={styles.product__img}>
                <Image
                    src={`${baseUrl}${props.product.image}`}
                    alt={props.product.name}
                    width={100}
                    height={80}
                />
            </div>
            <button className={styles.product__btn}>
                <BsBag />
            </button>
        </div>
    )
};

export default ProductSale;