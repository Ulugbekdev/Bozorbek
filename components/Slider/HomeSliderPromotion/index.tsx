import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import 'swiper/css';
import styles from '../../../styles/HomeSliderPromotion.module.sass';

SwiperCore.use([Pagination]);

const HomeSliderPromotion = () => {
    return (
        <div className={styles.slider}>
            <Swiper
                wrapperTag='ul'
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 3000,
                    stopOnLastSlide: false
                }}
                speed={500}
                pagination={{
                    modifierClass: styles.slider__list,
                    bulletClass: styles.slider__bullet,
                    bulletActiveClass: styles.slider__bullet_active
                }}
            >
                <SwiperSlide tag='li'>
                    <Link href={'/'}>
                        <a className={styles.slider__link}>
                            <Image
                                src={'/images/home-slider-promotion1.jpg'}
                                alt='shopping'
                                width={925}
                                height={'548px'}
                            />
                        </a>
                    </Link>
                </SwiperSlide>
                <SwiperSlide tag='li'>
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
                <SwiperSlide tag='li'>
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
                <SwiperSlide tag='li'>
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
                <SwiperSlide tag='li'>
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