import Image from 'next/image';
import Link from 'next/link';
import { BsBag } from 'react-icons/bs';
import { baseUrl } from '../../../redux/variables';
import styles from '../../../styles/ProductLink.module.sass';

const ProductLink = ({ src, alt, title, price, background, unit, ...props }: any) => {
    console.log(props)
    return (
        <Link href={'/'}>
            <a className={styles.product} style={{background: background}}>
                <div className={styles.product__img}>
                    <Image
                        src={baseUrl + src}
                        alt={alt}
                        width={129}
                        height={129}
                    />
                </div>
                <div className={styles.product__content}>
                    <p className={styles.product__title}>{title}</p>
                    <p className={styles.product__price}>
                        {`${price}${unit === 'PIECE' ? 'сум/штука' : 'сум/кг'}`}
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