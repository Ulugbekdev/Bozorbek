import Image from 'next/image';
import styles from '../../styles/Product.module.sass';

const Product = ({src, alt, title, price}: any) => {
    return (
        <div className={styles.product}>
            <div className={styles.product__img}>
                <Image
                    src={src}
                    alt={alt}
                    width={212}
                    height={245}
                />
            </div>
            <div className={styles.product__content}>
                <p className={styles.product__title}>{title}</p>
                <p className={styles.product__price}>
                    {price}
                </p>
            </div>
        </div>
    )
};

export default Product;