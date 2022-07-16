import Head from 'next/head';
import Header from '../components/Header';
import Catalog from '../components/Catalog';
import Wrapper from '../components/Wrapper';
import Support from '../components/Support';
import Container from '../components/Container';
import ProductSlider from '../components/Slider/ProductSlider';
import BigContainer from '../components/Container/BigContainer';
import ProductsSales from '../components/Product/ProductsSales';
import HomeSliderPromotion from '../components/Slider/HomeSliderPromotion';

const Home = () => {
	return (
		<>
			<Head>
				<title>Главная</title>
			</Head>
			<Header />
			<BigContainer>
				<Wrapper>
					<Catalog />
					<HomeSliderPromotion />
				</Wrapper>
				<ProductSlider type={'Фрукты'} classBtn={'fruit'} />
				<ProductSlider type={'Овощи'} classBtn={'vegetable'} />
			</BigContainer>
			<Container>
				<ProductsSales />
				<Support />
			</Container>
		</>
	)
};

export default Home;
