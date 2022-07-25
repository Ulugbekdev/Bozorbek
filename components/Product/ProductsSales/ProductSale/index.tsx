import Image from 'next/image';
import { BsBag } from 'react-icons/bs';
import { baseUrl } from '../../../../redux/variables';
import styles from '../../../../styles/ProductSale.module.sass';

const ProductSale = (props: any) => {
    return (
        <>
            {
                props.unit === 'GRAMME'
                    ?
                    <div className={styles.product}>
                        <div className={styles.product__content}>
                            <h3 className={styles.product__title}>{props.product.name}</h3>
                            <span className={styles.product__sale}>СКИДКИ</span>
                            <hr className={styles.product__hr} />
                            <p className={styles.product__oldPrice}>{props.product.max_price} <span>сум/кг</span></p>
                            <p className={styles.product__newPrice}>{props.product.price} <span>сум/кг</span></p>
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
                    :
                    <div className={styles.productPopular}>
                        <div className={styles.productPopular__spans}>
                            <span className={styles.productPopular__spans__sale}>Скидки</span>
                            <span className={styles.productPopular__spans__popular}>Популярное</span>
                        </div>
                        <div className={styles.productPopular__img}>
                            <Image
                                src={`${baseUrl}${props.product.image}`}
                                alt={props.product.name}
                                width={100}
                                height={174}
                            />
                        </div>
                        <div className={styles.productPopular__content}>
                            <h3 className={styles.productPopular__title}>{props.product.name}</h3>
                            <div className={styles.productPopular__prices}>
                                <p className={styles.productPopular__prices__newPrice}>{props.product.price} сум/кг</p>
                                <p className={styles.productPopular__prices__oldPrice}>{props.product.max_price} <span>сум/кг</span></p>
                            </div>
                        </div>
                        <button className={styles.productPopular__btn}>
                            <BsBag />
                        </button>
                    </div>
            }
        </>
    )
};

export default ProductSale;