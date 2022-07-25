import Image from 'next/image';
import { useScrollTo } from 'react-use-window-scroll';
import { AiOutlineSearch, AiOutlineArrowDown } from 'react-icons/ai';
import styles from '../../styles/Search.module.sass';

const Search = () => {
    const scrollto = useScrollTo();

    return (
        <div className={styles.search}>
            <div className={styles.search__wrapper}>
                <div className={styles.search__logo}>
                    <Image
                        src={'/svg/logo.svg'}
                        alt='logo'
                        width={354}
                        height={104}
                    />
                </div>
                <form className={styles.search__form}>
                    <input type="text" className={styles.search__form__input} placeholder='Поиск' />
                    <AiOutlineSearch className={styles.search__form__icon} />
                </form>
                <p className={styles.search__prompt}>Введите в поиск название нужных вам продуктов.</p>
            </div>
            <button
                className={styles.search__down}
                onClick={() => scrollto({top: window.innerHeight, behavior: 'smooth'})}
            >
                <AiOutlineArrowDown />
            </button>
        </div>
    )
};

export default Search;