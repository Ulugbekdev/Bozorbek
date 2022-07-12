import Image from 'next/image';
import Link from 'next/link';
import { BsArrowLeft, BsFillCircleFill } from 'react-icons/bs';
import styles from '../../styles/Catalog.module.sass';

const Catalog = () => {
    return (
        <div className={styles.catalog}>
            <div className={styles.catalog__btn}>
                <Link href={'/'}>
                    <a className={styles.catalog__backLink}>
                        <BsArrowLeft className={styles.catalog__backLinkIcon} />
                    </a>
                </Link>
            </div>
            <div className={styles.catalog__content}>
                <h1 className={styles.catalog__heading}>Каталог</h1>
                <nav className={styles.catalog__nav}>
                    <Link href={'/'}>
                        <a className={styles.catalog__navLink}>
                            <Image
                                className={styles.catalog__navImg}
                                src={'/images/catalog-bakery.jpg'}
                                alt='пекарня'
                                width={50}
                                height={38}
                            />
                            <BsFillCircleFill className={styles.catalog__navIcon} />
                            Пекарня
                        </a>
                    </Link>
                    <Link href={'/'}>
                        <a className={styles.catalog__navLink}>
                            <Image
                                className={styles.catalog__navImg}
                                src={'/images/catalog-fruits.jpg'}
                                alt='фрукты'
                                width={50}
                                height={38}
                            />
                            <BsFillCircleFill className={styles.catalog__navIcon} />
                            Фрукты
                        </a>
                    </Link>
                    <Link href={'/'}>
                        <a className={styles.catalog__navLink}>
                            <Image
                                className={styles.catalog__navImg}
                                src={'/images/catalog-vegetables.jpg'}
                                alt='овощи'
                                width={50}
                                height={38}
                            />
                            <BsFillCircleFill className={styles.catalog__navIcon} />
                            Овощи
                        </a>
                    </Link>
                    <Link href={'/'}>
                        <a className={styles.catalog__navLink}>
                            <Image
                                className={styles.catalog__navImg}
                                src={'/images/catalog-bakery.jpg'}
                                alt='пекарня'
                                width={50}
                                height={38}
                            />
                            <BsFillCircleFill className={styles.catalog__navIcon} />
                            Пекарня
                        </a>
                    </Link>
                    <Link href={'/'}>
                        <a className={styles.catalog__navLink}>
                            <Image
                                className={styles.catalog__navImg}
                                src={'/images/catalog-fruits.jpg'}
                                alt='фрукты'
                                width={50}
                                height={38}
                            />
                            <BsFillCircleFill className={styles.catalog__navIcon} />
                            Фрукты
                        </a>
                    </Link>
                    <Link href={'/'}>
                        <a className={styles.catalog__navLink}>
                            <Image
                                className={styles.catalog__navImg}
                                src={'/images/catalog-vegetables.jpg'}
                                alt='овощи'
                                width={50}
                                height={38}
                            />
                            <BsFillCircleFill className={styles.catalog__navIcon} />
                            Овощи
                        </a>
                    </Link>
                    <Link href={'/'}>
                        <a className={styles.catalog__navLink}>
                            <Image
                                className={styles.catalog__navImg}
                                src={'/images/catalog-bakery.jpg'}
                                alt='пекарня'
                                width={50}
                                height={38}
                            />
                            <BsFillCircleFill className={styles.catalog__navIcon} />
                            Пекарня
                        </a>
                    </Link>
                    <Link href={'/'}>
                        <a className={styles.catalog__navLink}>
                            <Image
                                className={styles.catalog__navImg}
                                src={'/images/catalog-fruits.jpg'}
                                alt='фрукты'
                                width={50}
                                height={38}
                            />
                            <BsFillCircleFill className={styles.catalog__navIcon} />
                            Фрукты
                        </a>
                    </Link>
                    <Link href={'/'}>
                        <a className={styles.catalog__navLink}>
                            <Image
                                className={styles.catalog__navImg}
                                src={'/images/catalog-vegetables.jpg'}
                                alt='овощи'
                                width={50}
                                height={38}
                            />
                            <BsFillCircleFill className={styles.catalog__navIcon} />
                            Овощи
                        </a>
                    </Link>
                    <Link href={'/'}>
                        <a className={styles.catalog__navLink}>
                            <Image
                                className={styles.catalog__navImg}
                                src={'/images/catalog-bakery.jpg'}
                                alt='пекарня'
                                width={50}
                                height={38}
                            />
                            <BsFillCircleFill className={styles.catalog__navIcon} />
                            Пекарня
                        </a>
                    </Link>
                    <Link href={'/'}>
                        <a className={styles.catalog__navLink}>
                            <Image
                                className={styles.catalog__navImg}
                                src={'/images/catalog-fruits.jpg'}
                                alt='фрукты'
                                width={50}
                                height={38}
                            />
                            <BsFillCircleFill className={styles.catalog__navIcon} />
                            Фрукты
                        </a>
                    </Link>
                    <Link href={'/'}>
                        <a className={styles.catalog__navLink}>
                            <Image
                                className={styles.catalog__navImg}
                                src={'/images/catalog-vegetables.jpg'}
                                alt='овощи'
                                width={50}
                                height={38}
                            />
                            <BsFillCircleFill className={styles.catalog__navIcon} />
                            Овощи
                        </a>
                    </Link>
                    <Link href={'/'}>
                        <a className={styles.catalog__navLink}>
                            <Image
                                className={styles.catalog__navImg}
                                src={'/images/catalog-bakery.jpg'}
                                alt='пекарня'
                                width={50}
                                height={38}
                            />
                            <BsFillCircleFill className={styles.catalog__navIcon} />
                            Пекарня
                        </a>
                    </Link>
                    <Link href={'/'}>
                        <a className={styles.catalog__navLink}>
                            <Image
                                className={styles.catalog__navImg}
                                src={'/images/catalog-fruits.jpg'}
                                alt='фрукты'
                                width={50}
                                height={38}
                            />
                            <BsFillCircleFill className={styles.catalog__navIcon} />
                            Фрукты
                        </a>
                    </Link>
                    <Link href={'/'}>
                        <a className={styles.catalog__navLink}>
                            <Image
                                className={styles.catalog__navImg}
                                src={'/images/catalog-vegetables.jpg'}
                                alt='овощи'
                                width={50}
                                height={38}
                            />
                            <BsFillCircleFill className={styles.catalog__navIcon} />
                            Овощи
                        </a>
                    </Link>
                </nav>
            </div>
        </div>
    )
}

export default Catalog;