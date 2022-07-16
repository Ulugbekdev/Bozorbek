import styles from '../../../styles/WrapperCatalog.module.sass';

const Wrapper = (props: any) => {
    return (
        <div className={styles.wrapper}>
            {props.children}
        </div>
    )
};

export default Wrapper;