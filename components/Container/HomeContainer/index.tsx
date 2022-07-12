import styles from '../../../styles/HomeContainer.module.sass';

const HomeContainer = (props: any) => {
	return (
		<div className={styles.container}>
			{props.children}
		</div>
	)
};

export default HomeContainer;