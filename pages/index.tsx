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
import WrapperProductsSlider from '../components/Wrapper/WrapperProductsSlider';
import Search from '../components/Search';
import { homePage } from '../redux/requests';

const Home = (props: any) => {
	console.log(props.productsCategory);
	
	return (
		<>
			<Head>
				<title>Главная</title>
			</Head>
			<Search />
			<Header />
			<BigContainer>
				<WrapperCatalog>
					<Catalog categories={props.categories} />
					<HomeSliderPromotion />
				</WrapperCatalog>
				<WrapperProductsSlider productsCategory={props.productsCategory}/>
			</BigContainer>
			<Container>
				<ProductsSales products={props.discountProducts} />
			</Container>
			<BigContainer>
				<Support />
				<Footer />
			</BigContainer>
		</>
	)
};

export default Home;

export async function getStaticProps() {
	const categories = await homePage.getCategories();
	const discountProducts = await homePage.getDiscountProducts();
	const categoriesProducts = categories.slice(0, 2);
	const productsCategory: Array<any> = [];
	const productsCategoryBk = await homePage.getProductsCategory(categoriesProducts[0].slug);	
	const productsCategoryGg = await homePage.getProductsCategory(categoriesProducts[1].slug);	
	productsCategory.push(productsCategoryBk);
	productsCategory.push(productsCategoryGg);

	return {
		props: {
			categories,
			discountProducts,
			productsCategory
		},
	}
}
