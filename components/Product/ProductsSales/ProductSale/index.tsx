import Image from 'next/image';
import { BsBag } from 'react-icons/bs';
import styles from '../../../../styles/ProductSale.module.sass';

const ProductSale = (props: any) => {
    return (
        <>
            {
                !props.popular
                    ?
                    <div className={styles.product}>
                        <div className={styles.product__content}>
                            <h3 className={styles.product__title}>Сок Dena (Мохито)</h3>
                            <span className={styles.product__sale}>СКИДКИ</span>
                            <hr className={styles.product__hr} />
                            <p className={styles.product__oldPrice}>7.900 <span>сум/кг</span></p>
                            <p className={styles.product__newPrice}>5.990 <span>сум/кг</span></p>
                        </div>
                        <div className={styles.product__img}>
                            <Image
                                src={'/images/product-sale.jpg'}
                                alt='mohito'
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
                                src={'/images/product-sale-popular.svg'}
                                alt='pomidor'
                                width={100}
                                height={174}
                            />
                        </div>
                        <div className={styles.productPopular__content}>
                            <h3 className={styles.productPopular__title}>Помидор</h3>
                            <div className={styles.productPopular__prices}>
                                <p className={styles.productPopular__prices__newPrice}>19.900 сум/кг</p>
                                <p className={styles.productPopular__prices__oldPrice}>25.900 <span>сум/кг</span></p>
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