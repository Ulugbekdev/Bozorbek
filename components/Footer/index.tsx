import Link from 'next/link';
import Image from 'next/image';
import Container from '../Container';
import styles from '../../styles/Footer.module.sass';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.footer__wrapper}>
                    <div className={styles.footer__title}>
                        <Link href={'/'}><a className={styles.footer__title__logo}>Bozorbek</a></Link>
                        <p className={styles.footer__title__description}>Пишите нам свои вопросы, комментарии и предложения</p>
                    </div>
                    <div className={styles.footer__item}>
                        <p className={styles.footer__subtitle}>О компании</p>
                        <Link href={'/'}><a className={styles.footer__link}>Собственные марки</a></Link>
                        <Link href={'/'}><a className={styles.footer__link}>Доставка</a></Link>
                        <Link href={'/'}><a className={styles.footer__link}>История</a></Link>
                    </div>
                    <div className={styles.footer__item}>
                        <p className={styles.footer__subtitle}>Контакты</p>
                        <Link href={'/'}><a className={styles.footer__link}>Круглосутоно</a></Link>
                        <Link href={'/'}><a className={styles.footer__link}>bozorbek@mail.ru</a></Link>
                        <Link href={'/'}><a className={styles.footer__link}>+998 90 999-99-99</a></Link>
                        <Link href={'/'}><a className={styles.footer__link_subtitle}>Политика конфиденциальности</a></Link>
                    </div>
                    <div className={styles.footer__item}>
                        <p className={styles.footer__subtitle}>Горячая линия</p>
                        <Link href={'/'}><a className={styles.footer__link}>+998 99 999-99-99</a></Link>
                    </div>
                    <div className={styles.footer__apps}>
                        <p className={styles.footer__apps__title}>Скачивайте наше мобильное приложение</p>
                        <div className={styles.footer__apps__wrapper}>
                            <Link href={'/'}>
                                <a className={styles.footer__apps__link}>
                                    <Image
                                        src='/svg/footer-play-market.svg'
                                        alt='play-market'
                                        width={35}
                                        height={38}
                                    />
                                    <p className={styles.footer__apps__subtitle}>
                                        Доступно в
                                        <span>
                                            Play Market
                                        </span>
                                    </p>
                                </a>
                            </Link>
                            <Link href={'/'}>
                                <a className={styles.footer__apps__link}>
                                    <Image
                                        src='/svg/footer-app-store.svg'
                                        alt='app-store'
                                        width={35}
                                        height={35}
                                    />
                                    <p className={styles.footer__apps__subtitle}>
                                        Доступно в
                                        <span>
                                            App Store
                                        </span>
                                    </p>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.footer__socnets}>
                        <p className={styles.footer__socnets__title}>Мы в соц.сетях</p>
                        <div className={styles.footer__socnets__wrapper}>
                            <Link href={'/'}>
                                <a className={styles.footer__socnets__link}>
                                <Image
                                        src='/svg/footer-instagram.svg'
                                        alt='play-market'
                                        width={30}
                                        height={30}
                                    />
                                </a>
                            </Link>
                            <Link href={'/'}>
                                <a className={styles.footer__socnets__link}>
                                <Image
                                        src='/svg/footer-telegram.svg'
                                        alt='play-market'
                                        width={30}
                                        height={30}
                                    />
                                </a>
                            </Link>
                            <Link href={'/'}>
                                <a className={styles.footer__socnets__link}>
                                <Image
                                        src='/svg/footer-facebook.svg'
                                        alt='facebook'
                                        width={30}
                                        height={30}
                                    />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    )
};

export default Footer;