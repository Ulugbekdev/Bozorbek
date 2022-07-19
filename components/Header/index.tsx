import Link from 'next/link';
import { AiOutlineSearch } from 'react-icons/ai';
import BigContainer from '../Container/BigContainer';
import { GiShoppingBag, GiHamburgerMenu } from 'react-icons/gi';
import styles from '../../styles/Header.module.sass';

const Header = () => {
    return (
        <header className={styles.header}>
            <BigContainer>
                <div className={styles.header__wrapper}>
                    <Link href={'/'}>
                        <a className={styles.header__logo}>Bozorbek</a>
                    </Link>
                    <div className={styles.header__content}>
                        <form className={styles.header__form}>
                            <div className={styles.header__form__input}>
                                <input
                                    type='text'
                                    placeholder='Поиск'
                                />
                                <AiOutlineSearch className={styles.header__form__inputIcon} />
                            </div>
                        </form>
                        <div className={styles.header__cardData}>
                            <GiShoppingBag className={styles.header__cardDataIcon} />
                            50 000 сум
                        </div>
                    </div>
                    <button className={styles.header__burgerBtn}>
                        <GiHamburgerMenu className={styles.header__burgerIcon} />
                    </button>
                </div>
            </BigContainer>
        </header>
    )
};

export default Header;