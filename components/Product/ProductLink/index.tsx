import Image from 'next/image';
import Link from 'next/link';
import { BsBag } from 'react-icons/bs';
import styles from '../../../styles/Product.module.sass';

const ProductLink = ({ src, alt, title, price }: any) => {
    return (
        <Link href={'/'}>
            <a className={styles.product}>
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
                <div className={styles.product__linkIcon}>
                    <BsBag />
                </div>
            </a>
        </Link>
    )
};

export default ProductLink;