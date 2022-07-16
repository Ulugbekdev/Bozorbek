import { CgChevronDoubleDown } from 'react-icons/cg';
import ProductSlider from '../../Slider/ProductSlider';
import styles from '../../../styles/WrapperProductsSlider.module.sass';

const WrapperProductsSlider = (props: any) => {
    return (
        <div className={styles.wrapper}>
            <ProductSlider type={'Фрукты'} classBtn={'fruit'} />
            <ProductSlider type={'Овощи'} classBtn={'vegetable'} />
            <div className={styles.wrapper__more}>
                <button className={styles.wrapper__more__btn}>Показать больше</button>
                <CgChevronDoubleDown className={styles.wrapper__more__icon} />
            </div>
        </div>
    )
};

export default WrapperProductsSlider;