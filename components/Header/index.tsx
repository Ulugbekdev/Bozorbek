import Link from 'next/link';
import styles from '../../styles/Header.module.sass';
import { AiOutlineSearch } from 'react-icons/ai';
import { GiShoppingBag, GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.header__content}>
                    <Link href={'/'}>
                        <a className={styles.header__link}>Bozorbek</a>
                    </Link>
                    <form>
                        <div className={styles.header__input}>
                            <input
                                type='text'
                                placeholder='Поиск'
                            />
                            <AiOutlineSearch className={styles.header__inputIcon}/>
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
        </>
    )
};

export default Header;