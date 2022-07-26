import { SwiperSlide } from 'swiper/react';
import Product from '../../Product/ProductLink';

export const arraySlide = (products: any) => {
    return products.map((el: any, index: any) => {
        return (
            <SwiperSlide key={index}>
                <Product
                    src={el.image}
                    alt={el.name}
                    title={el.name}
                    price={el.price}
                    background={el.background_color}
                    unit={el.unit}
                />
            </SwiperSlide>
        )
    })
}