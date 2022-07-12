import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import styles from '../../../styles/HomeSliderPromotion.module.sass';

const HomeSliderPromotion = () => {
    return (
        <div className={styles.slider}>
            <Swiper
                wrapperTag='ul'
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                autoplay={true}
                speed={500}
                modules={[Pagination, Autoplay]}
                pagination={{
                    clickable: true,
                    bulletClass: styles.slider__bullet,
                    bulletActiveClass: styles.slider__bullet_active
                }}
            >
                <SwiperSlide >
                    <Link href={'/'}>
                        <a className={styles.slider__link}>
                            <Image
                                priority={true}
                                src={'/images/home-slider-promotion1.jpg'}
                                alt='shopping'
                                width={925}
                                height={'548px'}
                            />
                        </a>
                    </Link>
                </SwiperSlide>
                <SwiperSlide >
                    <Link href={'/'}>
                        <a className={styles.slider__link}>
                            <Image
                                src={'/images/home-slider-promotion2.jpg'}
                                alt='shopping'
                                width={925}
                                height={548}
                            />
                        </a>
                    </Link>
                </SwiperSlide>
                <SwiperSlide >
                    <Link href={'/'}>
                        <a className={styles.slider__link}>
                            <Image
                                src={'/images/home-slider-promotion3.jpg'}
                                alt='shopping'
                                width={925}
                                height={548}
                            />
                        </a>
                    </Link>
                </SwiperSlide>
                <SwiperSlide >
                    <Link href={'/'}>
                        <a className={styles.slider__link}>
                            <Image
                                src={'/images/home-slider-promotion4.jpg'}
                                alt='shopping'
                                width={925}
                                height={548}
                            />
                        </a>
                    </Link>
                </SwiperSlide>
                <SwiperSlide >
                    <Link href={'/'}>
                        <a className={styles.slider__link}>
                            <Image
                                src={'/images/home-slider-promotion5.jpg'}
                                alt='shopping'
                                width={925}
                                height={548}
                            />
                        </a>
                    </Link>
                </SwiperSlide>
            </Swiper>
        </div>
    )
};

export default HomeSliderPromotion;