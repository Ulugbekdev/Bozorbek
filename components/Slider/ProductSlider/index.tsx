import cn from 'classnames';
import { Navigation } from 'swiper';
import Container from '../../Container';
import Product from '../../Product/ProductLink';
import { Swiper, SwiperSlide } from 'swiper/react';
import BigContainer from '../../Container/BigContainer';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import 'swiper/css';
import styles from '../../../styles/ProductSlider.module.sass';

const ProductSlider = (props: any) => {
    return (
        <div className={styles.productSlider}>
            <h1 className={styles.productSlider__heading}>{props.type}</h1>
            <Container>
                <Swiper
                    slidesPerView={5}
                    loop={true}
                    speed={200}
                    wrapperClass={styles.productSlider__wrapper}
                    modules={[Navigation]}
                    navigation={{
                        prevEl: `.swiper-${props.classBtn}-prev`,
                        nextEl: `.swiper-${props.classBtn}-next`
                    }}
                    onNavigationNext={(swiper) => swiper.slideNext()}
                    onNavigationPrev={(swiper) => swiper.slidePrev()}
                >
                    <SwiperSlide>
                        <Product
                            src='/images/product-peach.jpg'
                            alt='персик'
                            title='Лимон'
                            price='10 000 сум/кг'
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Product
                            src='/images/product-strawberry.jpg'
                            alt='клубника'
                            title='Лимон'
                            price='10 000 сум/кг'
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Product
                            src='/images/product-grapes.jpg'
                            alt='персик'
                            title='Лимон'
                            price='10 000 сум/кг'
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Product
                            src='/images/product-peach.jpg'
                            alt='персик'
                            title='Лимон'
                            price='10 000 сум/кг'
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Product
                            src='/images/product-peach.jpg'
                            alt='персик'
                            title='Лимон'
                            price='10 000 сум/кг'
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Product
                            src='/images/product-strawberry.jpg'
                            alt='клубника'
                            title='Лимон'
                            price='10 000 сум/кг'
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Product
                            src='/images/product-grapes.jpg'
                            alt='персик'
                            title='Лимон'
                            price='10 000 сум/кг'
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Product
                            src='/images/product-peach.jpg'
                            alt='персик'
                            title='Лимон'
                            price='10 000 сум/кг'
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Product
                            src='/images/product-strawberry.jpg'
                            alt='клубника'
                            title='Лимон'
                            price='10 000 сум/кг'
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Product
                            src='/images/product-grapes.jpg'
                            alt='персик'
                            title='Лимон'
                            price='10 000 сум/кг'
                        />
                    </SwiperSlide>
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