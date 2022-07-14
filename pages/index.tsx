import Head from 'next/head';
import Header from '../components/Header';
import Catalog from '../components/Catalog';
import ProductSlider from '../components/Slider/ProductSlider';
import BigContainer from '../components/Container/BigContainer';
import HomeSliderPromotion from '../components/Slider/HomeSliderPromotion';

const Home = () => {
	return (
		<>
			<Head>
				<title>Главная</title>
			</Head>
			<Header />
			<BigContainer>
				<Catalog />
				<HomeSliderPromotion />
			</BigContainer>
			<ProductSlider type={'Фрукты'} classBtn={'fruit'} />
			<ProductSlider type={'Овощи'} classBtn={'vegetable'} />
		</>
	)
};

export default Home;
