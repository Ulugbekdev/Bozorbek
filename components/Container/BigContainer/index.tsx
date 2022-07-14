import styles from '../../../styles/BigContainer.module.sass';

const BigContainer = (props: any) => {
	return (
		<div className={styles.container}>
			{props.children}
		</div>
	)
};

export default BigContainer;