import Link from 'next/link';
// import Image from 'next/image';
import { RiMenuUnfoldFill } from 'react-icons/ri';
import { BsArrowLeft, BsFillCircleFill } from 'react-icons/bs';
import styles from '../../styles/Catalog.module.sass';

const Catalog = (props: any) => {

    const arrayCategories = props.categories.map((el: any, index: any) => {
        return (
            <Link href={'/'} key={index}>
                <a className={styles.catalog__navLink}>
                    {/* <Image
                        className={styles.catalog__navImg}
                        src={'/images/catalog-bakery.jpg'}
                        alt='пекарня'
                        width={50}
                        height={38}
                    /> */}
                    <BsFillCircleFill className={styles.catalog__navIcon} />
                    {el.name}
                </a>
            </Link>
        )
    })

    return (
        <div className={styles.catalog}>
            <div className={styles.catalog__open}>
                Открыть каталог
                <RiMenuUnfoldFill className={styles.catalog__open__icon} />
            </div>
            <div className={styles.catalog__wrapper}>
                <div className={styles.catalog__btn}>
                    <Link href={'/'}>
                        <a className={styles.catalog__backLink}>
                            <BsArrowLeft className={styles.catalog__backLinkIcon} />
                        </a>
                    </Link>
                </div>
                <div className={styles.catalog__content}>
                    <h1 className={styles.catalog__heading}>{props.hello}</h1>
                    <nav className={styles.catalog__nav}>
                        {arrayCategories}
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Catalog;