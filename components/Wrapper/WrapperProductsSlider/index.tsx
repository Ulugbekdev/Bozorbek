import { CgChevronDoubleDown } from 'react-icons/cg';
import ProductSlider from '../../Slider/ProductSlider';
import styles from '../../../styles/WrapperProductsSlider.module.sass';

const WrapperProductsSlider = (props: any) => {
    const arraySlider = props.productsCategory.map((el: any, index: any) => <ProductSlider products={el} category={el[0].category} classBtn={el[0].category} key={index}/>);

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__more}>
                {arraySlider}
                <button className={styles.wrapper__more__btn}>Показать больше</button>
                <CgChevronDoubleDown className={styles.wrapper__more__icon} />
            </div>
        </div>
    )
};

export default WrapperProductsSlider;