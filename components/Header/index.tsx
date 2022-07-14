import Link from 'next/link';
import { AiOutlineSearch } from 'react-icons/ai';
import BigContainer from '../Container/BigContainer';
import { GiShoppingBag, GiHamburgerMenu } from 'react-icons/gi';
import styles from '../../styles/Header.module.sass';

const Header = () => {
    return (
        <BigContainer>
            <header className={styles.header}>
                <div className={styles.header__content}>
                    <Link href={'/'}>
                        <a className={styles.header__link}>Bozorbek</a>
                    </Link>
                    <form className={styles.header__form}>
                        <div className={styles.header__form__input}>
                            <input
                                type='text'
                                placeholder='Поиск'
                            />
                            <AiOutlineSearch className={styles.header__form__inputIcon}/>
                        </div>                  
                    </form>
                    <div className={styles.header__cardData}>
                        <GiShoppingBag className={styles.header__cardDataIcon}/>
                        50 000 сум
                    </div>
                    <button className={styles.header__burgerBtn}>
                        <GiHamburgerMenu className={styles.header__burgerIcon}/>
                    </button>
                </div>
            </header>
        </BigContainer>
    )
};

export default Header;