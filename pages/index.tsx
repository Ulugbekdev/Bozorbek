import Head from 'next/head';
import Header from '../components/Header';
import Catalog from '../components/Catalog';
import HomeContainer from '../components/Container/HomeContainer';
import HomeSliderPromotion from '../components/Slider/HomeSliderPromotion';
import ProductSlider from '../components/Slider/ProductSlider';

const Home = () => {
	return (
		<>
			<Head>
				<title>Главная</title>
			</Head>
			<Header />
			<HomeContainer>
				<Catalog />
				<HomeSliderPromotion />
			</HomeContainer>
			<ProductSlider/>
		</>
	)
};

export default Home;
