import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Catalog from '../components/Catalog';
import Support from '../components/Support';
import Container from '../components/Container';
import WrapperCatalog from '../components/Wrapper/WrapperCatalog';
import BigContainer from '../components/Container/BigContainer';
import ProductsSales from '../components/Product/ProductsSales';
import HomeSliderPromotion from '../components/Slider/HomeSliderPromotion';
import WrapperProductsSales from '../components/Wrapper/WrapperProductsSlider';

const Home = () => {
	return (
		<>
			<Head>
				<title>Главная</title>
			</Head>
			<Header />
			<BigContainer>
				<WrapperCatalog>
					<Catalog />
					<HomeSliderPromotion />
				</WrapperCatalog>
				<WrapperProductsSales />
			</BigContainer>
			<Container>
				<ProductsSales /> 
			</Container>
			<BigContainer>
				<Support />
				<Footer />
			</BigContainer>
		</>
	)
};

export default Home;
