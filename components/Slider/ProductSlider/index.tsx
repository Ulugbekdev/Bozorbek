import cn from 'classnames';
import { Navigation } from 'swiper';
import Container from '../../Container';
import { Swiper } from 'swiper/react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import 'swiper/css';
import styles from '../../../styles/ProductSlider.module.sass';
import { arraySlide } from './arraySlide';

const ProductSlider = (props: any) => {
    return (
        <div className={styles.productSlider}>
            <h1 className={styles.productSlider__heading}>{props.category}</h1>
            <Container>
                <Swiper
                    slidesPerView={'auto'}
                    loop={true}
                    speed={200}
                    wrapperClass={styles.productSlider__wrapper}
                    modules={[Navigation]}
                    breakpoints={{
                        320: {
                            slidesPerView: 1
                        },
                        575: {
                            slidesPerView: 2
                        },
                        768: {
                            slidesPerView: 3
                        },
                        1200: {
                            slidesPerView: 5
                        }
                    }}
                    navigation={{
                        prevEl: `.swiper-${props.classBtn}-prev`,
                        nextEl: `.swiper-${props.classBtn}-next`
                    }}
                    onNavigationNext={(swiper) => swiper.slideNext()}
                    onNavigationPrev={(swiper) => swiper.slidePrev()}
                >
                    {arraySlide(props.products)}
                </Swiper>
                <button className={cn([styles.productSlider__prev, `swiper-${props.classBtn}-prev`])}>
                    <IoIosArrowBack className={styles.productSlider__navIcon} />
                </button>
                <button className={cn([styles.productSlider__next, `swiper-${props.classBtn}-next`])}>
                    <IoIosArrowForward className={styles.productSlider__navIcon} />
                </button>
            </Container>
        </div>
    )
};

export default ProductSlider;